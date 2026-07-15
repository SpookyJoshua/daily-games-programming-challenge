document.addEventListener("DOMContentLoaded", async () => {
    const featureElement = document.getElementById(
        "global-daily-challenge"
    );

    const currentElement = document.getElementById(
        "global-challenge-current"
    );

    const archiveElement = document.getElementById(
        "global-challenge-archive"
    );

    const searchElement = document.getElementById(
        "global-challenge-search"
    );

    if (
        !featureElement ||
        !currentElement ||
        !archiveElement ||
        !searchElement
    ) {
        return;
    }

    const currentApiUrl =
        featureElement.dataset.currentApi;

    const archiveApiUrl =
        featureElement.dataset.archiveApi;

    if (!currentApiUrl || !archiveApiUrl) {
        renderLoadFailure(currentElement, archiveElement);
        return;
    }

    try {
        const [currentChallenge, challengeArchive] =
            await Promise.all([
                fetchChallengeData(currentApiUrl),
                fetchChallengeData(archiveApiUrl)
            ]);

        if (!Array.isArray(challengeArchive)) {
            throw new Error(
                "The challenge archive response was invalid."
            );
        }

        renderCurrentChallenge(
            currentElement,
            currentChallenge
        );

        renderChallengeArchive(
            archiveElement,
            challengeArchive
        );

        searchElement.addEventListener("input", () => {
            const query = searchElement.value
                .trim()
                .toLowerCase();

            const matches = challengeArchive.filter(
                challenge =>
                    challengeMatchesQuery(challenge, query)
            );

            renderChallengeArchive(
                archiveElement,
                matches
            );
        });
    } catch (error) {
        console.error(
            "The global challenge feature could not load.",
            error
        );

        renderLoadFailure(currentElement, archiveElement);
    }
});

async function fetchChallengeData(baseUrl) {
    const separator = baseUrl.includes("?") ? "&" : "?";
    const url =
        `${baseUrl}${separator}v=${createHourlyCacheKey()}`;

    const response = await fetch(url, {
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error(
            `Challenge request failed with ` +
            `status ${response.status}.`
        );
    }

    return response.json();
}

function renderCurrentChallenge(container, challenge) {
    const requirements = challenge.requirements
        .map(requirement => {
            return `<li>${escapeChallengeHtml(requirement)}</li>`;
        })
        .join("");

    container.innerHTML = `
        <div class="global-challenge-meta">
            <span>${escapeChallengeHtml(challenge.date)}</span>
            <span>${escapeChallengeHtml(challenge.difficulty)}</span>
            <span>${challenge.estimatedMinutes} minutes</span>
        </div>

        <h3>${escapeChallengeHtml(challenge.title)}</h3>

        <p class="global-challenge-current-description">
            ${escapeChallengeHtml(challenge.description)}
        </p>

        <div class="global-challenge-block">
            <h4>Requirements</h4>
            <ul>${requirements}</ul>
        </div>

        <div class="global-challenge-block">
            <h4>Additional constraint</h4>
            <p>${escapeChallengeHtml(challenge.constraint)}</p>
        </div>

        <div class="global-challenge-block">
            <h4>Stretch goal</h4>
            <p>${escapeChallengeHtml(challenge.stretchGoal)}</p>
        </div>

        <div class="global-challenge-actions">
            <a
                class="global-challenge-primary-link"
                href="${escapeChallengeHtml(
                    challenge.repositoryUrl
                )}"
            >
                Open GitHub folder
            </a>

            <a
                class="global-challenge-secondary-link"
                href="${escapeChallengeHtml(
                    challenge.pageUrl
                )}"
            >
                Open challenge page
            </a>
        </div>
    `;
}

function renderChallengeArchive(container, challenges) {
    container.replaceChildren();

    if (challenges.length === 0) {
        const emptyElement = document.createElement("div");
        emptyElement.className = "global-challenge-empty";
        emptyElement.textContent =
            "No previous challenges match that search.";

        container.appendChild(emptyElement);
        return;
    }

    for (const challenge of challenges) {
        const card = document.createElement("a");
        card.className = "global-challenge-archive-card";
        card.href = challenge.pageUrl;

        const date = document.createElement("time");
        date.dateTime = challenge.date;
        date.textContent = formatChallengeDate(
            challenge.date
        );

        const title = document.createElement("h4");
        title.textContent = challenge.title;

        const description = document.createElement("p");
        description.textContent = challenge.description;

        const meta = document.createElement("p");
        meta.className =
            "global-challenge-archive-card-meta";

        meta.textContent =
            `${challenge.difficulty} · ` +
            `${challenge.estimatedMinutes} minutes`;

        card.append(date, title, description, meta);
        container.appendChild(card);
    }
}

function challengeMatchesQuery(challenge, query) {
    if (!query) {
        return true;
    }

    const searchableText = [
        challenge.date,
        challenge.title,
        challenge.difficulty,
        challenge.description,
        challenge.constraint,
        challenge.stretchGoal,
        ...challenge.requirements
    ]
        .join(" ")
        .toLowerCase();

    return searchableText.includes(query);
}

function formatChallengeDate(dateKey) {
    const [year, month, day] = dateKey
        .split("-")
        .map(Number);

    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(date);
}

function renderLoadFailure(
    currentContainer,
    archiveContainer
) {
    currentContainer.innerHTML = `
        <p>
            Today's challenge could not be loaded.
            Please open the GitHub repository directly.
        </p>
    `;

    archiveContainer.innerHTML = `
        <div class="global-challenge-empty">
            The challenge archive is currently unavailable.
        </div>
    `;
}

function createHourlyCacheKey() {
    const now = new Date();

    return [
        now.getUTCFullYear(),
        now.getUTCMonth() + 1,
        now.getUTCDate(),
        now.getUTCHours()
    ].join("-");
}

function escapeChallengeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");
}
