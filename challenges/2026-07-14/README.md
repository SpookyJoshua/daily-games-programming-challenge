# Queued Asynchronous Scene Transition

**Date:** 2026-07-14  
**Difficulty:** Intermediate  
**Estimated time:** 55 minutes

## Brief

Create a scene transition coordinator with loading progress, fade stages, cancellation rules, and duplicate-request handling.

## Requirements

- Only one transition may actively load at a time.
- Duplicate requests must have defined behaviour.
- Loading progress must be exposed independently from UI.
- A failed load must restore a valid state.
- Scene activation must occur only after required transition stages complete.

## Additional constraint

Random number generation must be supplied through an abstraction.

## Stretch goal

Support deterministic replay from a recorded seed or command sequence.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-14/)
