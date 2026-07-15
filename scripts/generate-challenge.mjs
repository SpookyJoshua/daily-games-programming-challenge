import { createHash, randomInt } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const config = readJson(join(projectRoot, "config.json"));
const pool = readJson(join(projectRoot, "data", "challenge-pool.json"));

const requestedDate = getArgumentValue("--date");
const challengeDate = requestedDate ?? getDateInTimeZone(config.timezone);

validateDateKey(challengeDate);

const archivePath = join(projectRoot, "docs", "api", "challenges.json");
const currentPath = join(projectRoot, "docs", "api", "current.json");
const archive = existsSync(archivePath) ? readJson(archivePath) : [];

const existingChallenge = archive.find(entry => entry.date === challengeDate);

if (existingChallenge) {
    writeJson(currentPath, existingChallenge);
    console.log(`Challenge ${challengeDate} already exists. current.json was refreshed.`);
    process.exit(0);
}

const usedSignatures = new Set(
    archive
        .map(entry => entry.signature)
        .filter(Boolean)
);

const generated = createUniqueChallenge(
    challengeDate,
    pool,
    usedSignatures,
    config
);

const updatedArchive = [generated, ...archive]
    .sort((first, second) => second.date.localeCompare(first.date));

writeJson(currentPath, generated);
writeJson(archivePath, updatedArchive);

const repositoryChallengeDirectory = join(
    projectRoot,
    "challenges",
    challengeDate
);

const pageChallengeDirectory = join(
    projectRoot,
    "docs",
    "challenges",
    challengeDate
);

mkdirSync(repositoryChallengeDirectory, { recursive: true });
mkdirSync(pageChallengeDirectory, { recursive: true });

writeFileSync(
    join(repositoryChallengeDirectory, "README.md"),
    createChallengeMarkdown(generated),
    "utf8"
);

writeJson(
    join(pageChallengeDirectory, "challenge.json"),
    generated
);

writeFileSync(
    join(pageChallengeDirectory, "index.html"),
    createChallengePage(generated, config),
    "utf8"
);

console.log(`Generated challenge for ${challengeDate}: ${generated.title}`);

function createUniqueChallenge(date, challengePool, used, repositoryConfig) {
    const maximumAttempts = 500;

    for (let attempt = 0; attempt < maximumAttempts; attempt++) {
        const challenge = chooseRandom(challengePool.challenges);
        const constraint = chooseRandom(challengePool.constraints);
        const stretchGoal = chooseRandom(challengePool.stretchGoals);

        const signatureSource = [
            challenge.id,
            constraint,
            stretchGoal
        ].join("|");

        const signature = createHash("sha256")
            .update(signatureSource)
            .digest("hex")
            .slice(0, 16);

        if (used.has(signature)) {
            continue;
        }

        const repositoryUrl =
            `https://github.com/${repositoryConfig.owner}/` +
            `${repositoryConfig.repository}/tree/main/challenges/${date}`;

        const pageUrl =
            `${repositoryConfig.pagesBaseUrl}/challenges/${date}/`;

        return {
            date,
            id: `${date}-${challenge.id}`,
            signature,
            title: challenge.title,
            difficulty: challenge.difficulty,
            estimatedMinutes: challenge.estimatedMinutes,
            description: challenge.description,
            requirements: [...challenge.requirements],
            constraint,
            stretchGoal,
            repositoryUrl,
            pageUrl,
            generatedAt: new Date().toISOString()
        };
    }

    throw new Error(
        "Unable to generate a unique challenge combination. " +
        "Add more challenges, constraints, or stretch goals."
    );
}

function chooseRandom(values) {
    if (!Array.isArray(values) || values.length === 0) {
        throw new Error("Cannot select from an empty collection.");
    }

    return values[randomInt(0, values.length)];
}

function getDateInTimeZone(timeZone) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const values = Object.fromEntries(
        parts.map(part => [part.type, part.value])
    );

    return `${values.year}-${values.month}-${values.day}`;
}

function validateDateKey(dateKey) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) {
        throw new Error(
            `Invalid date "${dateKey}". Expected YYYY-MM-DD.`
        );
    }
}

function getArgumentValue(argumentName) {
    const matchingArgument = process.argv.find(argument =>
        argument.startsWith(`${argumentName}=`)
    );

    if (!matchingArgument) {
        return null;
    }

    return matchingArgument.slice(argumentName.length + 1);
}

function readJson(filePath) {
    return JSON.parse(readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(
        filePath,
        `${JSON.stringify(value, null, 2)}\n`,
        "utf8"
    );
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");
}

function createChallengeMarkdown(challenge) {
    const requirements = challenge.requirements
        .map(requirement => `- ${requirement}`)
        .join("\n");

    return `# ${challenge.title}

**Date:** ${challenge.date}  
**Difficulty:** ${challenge.difficulty}  
**Estimated time:** ${challenge.estimatedMinutes} minutes

## Brief

${challenge.description}

## Requirements

${requirements}

## Additional constraint

${challenge.constraint}

## Stretch goal

${challenge.stretchGoal}

## Submission structure

Create your solution inside this folder using a structure appropriate for the language or engine you choose.

Suggested files:

- \`README.md\` — explain your approach and trade-offs.
- \`Solution/\` — place the implementation here.
- \`Tests/\` — place automated tests here when applicable.

## Solution notes

Document:

1. Your chosen architecture.
2. The edge cases you handled.
3. What you would improve with more time.
4. The approximate time you spent.

---

[View the public challenge page](${challenge.pageUrl})
`;
}

function createChallengePage(challenge, repositoryConfig) {
    const requirements = challenge.requirements
        .map(requirement => `<li>${escapeHtml(requirement)}</li>`)
        .join("");

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >
    <meta
        name="description"
        content="${escapeHtml(challenge.description)}"
    >
    <title>
        ${escapeHtml(challenge.title)} |
        ${escapeHtml(repositoryConfig.siteTitle)}
    </title>
    <link rel="stylesheet" href="../../styles.css">
</head>
<body>
    <main class="site-shell">
        <a class="back-link" href="../../">
            ← View all challenges
        </a>

        <article class="challenge-detail-card">
            <p class="eyebrow">${escapeHtml(challenge.date)}</p>
            <h1>${escapeHtml(challenge.title)}</h1>

            <div class="meta-row">
                <span>${escapeHtml(challenge.difficulty)}</span>
                <span>${challenge.estimatedMinutes} minutes</span>
            </div>

            <p class="lead">
                ${escapeHtml(challenge.description)}
            </p>

            <section>
                <h2>Requirements</h2>
                <ul>${requirements}</ul>
            </section>

            <section>
                <h2>Additional constraint</h2>
                <p>${escapeHtml(challenge.constraint)}</p>
            </section>

            <section>
                <h2>Stretch goal</h2>
                <p>${escapeHtml(challenge.stretchGoal)}</p>
            </section>

            <div class="button-row">
                <a
                    class="primary-button"
                    href="${escapeHtml(challenge.repositoryUrl)}"
                >
                    Open challenge on GitHub
                </a>

                <a
                    class="secondary-button"
                    href="../../"
                >
                    Browse previous challenges
                </a>
            </div>
        </article>
    </main>
</body>
</html>
`;
}
