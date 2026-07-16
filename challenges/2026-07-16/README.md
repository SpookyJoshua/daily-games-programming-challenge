# Command History with Undo and Redo

**Date:** 2026-07-16  
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

Keep the core logic independent from MonoBehaviour so it can be unit tested without a Unity scene.

## Stretch goal

Add a debug event history with a configurable maximum capacity.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-16/)
