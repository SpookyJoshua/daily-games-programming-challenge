# Deterministic Weighted Loot Table

**Date:** 2026-08-19  
**Difficulty:** Intermediate  
**Estimated time:** 45 minutes

## Brief

Create a weighted loot table supporting rarity weights, quantity ranges, guaranteed drops, and deterministic seeded rolls.

## Requirements

- Zero-weight entries must never be selected randomly.
- Invalid or empty tables must return a descriptive failure.
- Guaranteed drops must be resolved separately from weighted drops.
- The same seed and input data must produce the same result.
- Random number generation must be supplied as a dependency.

## Additional constraint

Time must be supplied through an abstraction rather than read directly from UnityEngine.Time.

## Stretch goal

Add a diagnostic snapshot that explains the system's current state.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-19/)
