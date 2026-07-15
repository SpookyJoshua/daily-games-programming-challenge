document.addEventListener("DOMContentLoaded", async () => {
    const currentElement = document.getElementById(
        "current-challenge"
    );

    const archiveElement = document.getElementById(
        "challenge-archive"
    );

    const searchElement = document.getElementById(
        "challenge-search"
    );

    if (!currentElement || !archiveElement || !searchElement) {
        return;
    }

    try {
        const archive = await fetchJson(
            `api/challenges.json?v=${getCacheKey()}`
        );

        if (!Array.isArray(archive) || archive.length === 0) {
            throw new Error("The challenge archive is empty.");
        }

        renderCurrentChallenge(currentElement, archive[0]);
        renderArchive(archiveElement, archive);

        searchElement.addEventListener("input", () => {
            const query = searchElement.value
                .trim()
                .toLowerCase();

            const filteredChallenges = archive.filter(
                challenge => matchesSearch(challenge, query)
            );

            renderArchive(
                archiveElement,
                filteredChallenges
            );
        });
    } catch (error) {
        console.error(error);

        currentElement.innerHTML = `
            <p>
                Today's challenge could not be loaded.
                Open the GitHub repository to check the latest entry.
            </p>
        `;

        archiveElement.innerHTML = `
            <div class="empty-state">
                The challenge archive is currently unavailable.
            </div>
        `;
    }
});

async function fetchJson(url) {
    const response = await fetch(url, {
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error(
            `Request failed with status ${response.status}.`
        );
    }

    return response.json();
}

function renderCurrentChallenge(container, challenge) {
    const requirements = challenge.requirements
        .map(requirement => `<li>${escapeHtml(requirement)}</li>`)
        .join("");

    container.innerHTML = `
        <p class="eyebrow">
            Today's challenge · ${escapeHtml(challenge.date)}
        </p>

        <h2>${escapeHtml(challenge.title)}</h2>

        <div class="meta-row">
            <span>${escapeHtml(challenge.difficulty)}</span>
            <span>${challenge.estimatedMinutes} minutes</span>
        </div>

        <p class="lead">
            ${escapeHtml(challenge.description)}
        </p>

        <section>
            <h3>Requirements</h3>
            <ul>${requirements}</ul>
        </section>

        <section>
            <h3>Additional constraint</h3>
            <p>${escapeHtml(challenge.constraint)}</p>
        </section>

        <section>
            <h3>Stretch goal</h3>
            <p>${escapeHtml(challenge.stretchGoal)}</p>
        </section>

        <div class="button-row">
            <a
                class="primary-button"
                href="${escapeAttribute(challenge.repositoryUrl)}"
            >
                Open challenge on GitHub
            </a>

            <a
                class="secondary-button"
                href="${escapeAttribute(challenge.pageUrl)}"
            >
                Open challenge page
            </a>
        </div>
    `;
}

function renderArchive(container, challenges) {
    container.replaceChildren();

    if (challenges.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.textContent =
            "No challenges match that search.";
        container.appendChild(emptyState);
        return;
    }

    for (const challenge of challenges) {
        const card = document.createElement("a");
        card.className = "archive-card";
        card.href = challenge.pageUrl;

        const date = document.createElement("p");
        date.className = "archive-card-date";
        date.textContent = challenge.date;

        const title = document.createElement("h3");
        title.textContent = challenge.title;

        const description = document.createElement("p");
        description.textContent = challenge.description;

        const meta = document.createElement("p");
        meta.className = "archive-card-meta";
        meta.textContent =
            `${challenge.difficulty} · ` +
            `${challenge.estimatedMinutes} minutes`;

        card.append(date, title, description, meta);
        container.appendChild(card);
    }
}

function matchesSearch(challenge, query) {
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

function getCacheKey() {
    const now = new Date();

    return [
        now.getUTCFullYear(),
        now.getUTCMonth() + 1,
        now.getUTCDate(),
        now.getUTCHours()
    ].join("-");
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
    return escapeHtml(value);
}
