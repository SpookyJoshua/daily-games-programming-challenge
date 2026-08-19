# Seeded Procedural Room Chain

**Date:** 2026-08-20  
**Difficulty:** Advanced  
**Estimated time:** 70 minutes

## Brief

Generate a sequence of compatible rooms using doorway directions, room tags, repetition limits, and a supplied seed.

## Requirements

- Only rooms compatible with the previous exit may be selected.
- Required and forbidden room tags must be respected.
- Each room must have a configurable repetition limit.
- The generator must report when no valid continuation exists.
- The same seed and input catalogue must produce the same layout.

## Additional constraint

Time must be supplied through an abstraction rather than read directly from UnityEngine.Time.

## Stretch goal

Add profiling counters for the operations most likely to become expensive.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-20/)
