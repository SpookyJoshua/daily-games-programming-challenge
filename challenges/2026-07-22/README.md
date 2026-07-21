# Event-Driven Quest Objective Tracker

**Date:** 2026-07-22  
**Difficulty:** Intermediate  
**Estimated time:** 55 minutes

## Brief

Implement quests containing collection, elimination, interaction, and location objectives without tightly coupling quests to gameplay systems.

## Requirements

- Objectives must subscribe only to relevant gameplay events.
- Completed objectives must ignore further progress.
- Optional objectives must not block quest completion.
- Quest progress must be serialisable without serialising event subscriptions.
- The system must report progress changes without UI polling.

## Additional constraint

Do not use LINQ inside frequently executed gameplay code.

## Stretch goal

Create an example showing two separate systems consuming the same public API.

## Submission structure

Create your solution inside this folder using a structure appropriate for the language or engine you choose.

Suggested files:

- `README.md` — explain your approach and trade-offs.
- `Solution/` — place the implementation here.
- `Tests/` — place automated tests here when applicable.

## Solution notes

Document:

1. Your chosen architecture.
2. The edge cases you handled.
3. What you would improve with more time.
4. The approximate time you spent.

---

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-22/)
