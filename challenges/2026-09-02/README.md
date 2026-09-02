# Transactional Versioned Save System

**Date:** 2026-09-02  
**Difficulty:** Advanced  
**Estimated time:** 75 minutes

## Brief

Build a save system that validates data, migrates older versions, and applies loaded state only after the entire operation succeeds.

## Requirements

- Every save must include a version number.
- Older versions must be migrated sequentially.
- A failed migration must leave runtime state unchanged.
- Serialisation and game-state application must remain separate.
- The result must distinguish missing, corrupt, incompatible, and successful saves.

## Additional constraint

Random number generation must be supplied through an abstraction.

## Stretch goal

Provide a second implementation behind the same interface.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-02/)
