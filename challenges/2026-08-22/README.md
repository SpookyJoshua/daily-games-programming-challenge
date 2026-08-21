# Data-Driven Encounter Wave Controller

**Date:** 2026-08-22  
**Difficulty:** Intermediate  
**Estimated time:** 55 minutes

## Brief

Build a wave controller that processes configurable enemy groups, spawn delays, completion rules, and optional intermissions.

## Requirements

- Wave configuration must be separate from runtime progress.
- Each group must define an enemy type, quantity, and spawn interval.
- The next wave must not begin until the active completion rule succeeds.
- The controller must report wave-started, wave-completed, and encounter-completed events.
- Cancellation must stop pending spawns safely.

## Additional constraint

Design the public API first and include a short usage example.

## Stretch goal

Document one architectural trade-off and one rejected alternative.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-22/)
