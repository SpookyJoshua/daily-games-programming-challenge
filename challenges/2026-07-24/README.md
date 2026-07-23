# Type-Safe Gameplay Event Bus

**Date:** 2026-07-24  
**Difficulty:** Advanced  
**Estimated time:** 60 minutes

## Brief

Implement a typed event bus that allows unrelated gameplay systems to communicate without direct references.

## Requirements

- Events must use strongly typed payloads.
- Subscribers must be able to register and unregister safely.
- Duplicate subscription behaviour must be explicitly defined.
- Publishing with no listeners must be safe.
- One failing listener must not prevent remaining listeners from being called.

## Additional constraint

The primary manager class must remain below 150 lines.

## Stretch goal

Write at least three unit tests covering normal behaviour, an edge case, and invalid input.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-24/)
