# Capacity-Limited Object Pool

**Date:** 2026-09-22  
**Difficulty:** Intermediate  
**Estimated time:** 45 minutes

## Brief

Implement a reusable pool for projectiles, particles, or enemies with configurable growth and capacity rules.

## Requirements

- Inactive objects must be reused before new objects are created.
- The pool must optionally enforce a hard maximum capacity.
- Returning an object twice must not corrupt the pool.
- Creation, activation, and deactivation logic must be separate.
- The pool must expose read-only diagnostics for active and inactive counts.

## Additional constraint

Dependencies must be supplied through a constructor or explicit initialisation method.

## Stretch goal

Add graceful recovery when one dependency reports a failure.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-22/)
