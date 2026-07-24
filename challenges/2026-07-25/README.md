# Dynamic Enemy Spawn Director

**Date:** 2026-07-25  
**Difficulty:** Advanced  
**Estimated time:** 70 minutes

## Brief

Build a director that spends a threat budget on enemy compositions while respecting pacing, spawn validity, and active enemy limits.

## Requirements

- Enemy types must have configurable budget costs.
- The director must never exceed its active-enemy limit.
- Spawn points must be validated before use.
- Threat budget growth and recovery must be configurable.
- The director must explain why a spawn request was rejected.

## Additional constraint

Do not allocate a new collection during every update tick.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-25/)
