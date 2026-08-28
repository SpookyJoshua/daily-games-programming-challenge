# Composable Status Effect System

**Date:** 2026-08-28  
**Difficulty:** Advanced  
**Estimated time:** 75 minutes

## Brief

Build a status effect system supporting timed effects, periodic ticks, stacking rules, stat modifiers, and safe removal.

## Requirements

- Effect definitions must not contain shared runtime state.
- Each effect must define stack, refresh, replace, or reject behaviour.
- Periodic effects must support configurable intervals.
- Removing an effect must reverse temporary modifications.
- Finite and infinite durations must both be supported.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-28/)
