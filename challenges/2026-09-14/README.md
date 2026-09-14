# Priority Combat Input Buffer

**Date:** 2026-09-14  
**Difficulty:** Advanced  
**Estimated time:** 65 minutes

## Brief

Create an input buffer that stores combat commands until the character can execute them, while supporting expiry and priority.

## Requirements

- Buffered commands must expire after a configurable duration.
- Commands with equal priority must preserve input order.
- Invalid commands must be discarded with a reason.
- The buffer must have a configurable maximum size.
- Executing or discarding a command must remove it exactly once.

## Additional constraint

Design the public API first and include a short usage example.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-14/)
