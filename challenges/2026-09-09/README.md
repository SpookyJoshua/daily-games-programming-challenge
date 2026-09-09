# Command History with Undo and Redo

**Date:** 2026-09-09  
**Difficulty:** Advanced  
**Estimated time:** 60 minutes

## Brief

Implement commands with execute, undo, redo, grouping, and an optional history capacity.

## Requirements

- Every command must expose execute and undo operations.
- Executing after an undo must clear redo history.
- Undo and redo with empty histories must be safe.
- A grouped command must behave as one history entry.
- History capacity must discard the oldest complete entry.

## Additional constraint

The solution must remain safe when a tracked object is removed unexpectedly.

## Stretch goal

Add save and load support without coupling serialisation to the core system.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-09/)
