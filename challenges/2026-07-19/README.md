# Voice-Limited Audio Priority Manager

**Date:** 2026-07-19  
**Difficulty:** Intermediate  
**Estimated time:** 50 minutes

## Brief

Create an audio request manager that limits simultaneous sounds and replaces lower-priority sounds when appropriate.

## Requirements

- Every request must include priority and category.
- Global and per-category voice limits must be configurable.
- Completed sounds must be removed from active tracking.
- Equal-priority replacement behaviour must be deterministic.
- A rejected request must report why it could not play.

## Additional constraint

Do not allocate a new collection during every update tick.

## Stretch goal

Provide a second implementation behind the same interface.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-19/)
