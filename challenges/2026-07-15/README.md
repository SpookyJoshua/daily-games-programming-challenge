# Damage Resolution Pipeline

**Date:** 2026-07-15  
**Difficulty:** Advanced  
**Estimated time:** 65 minutes

## Brief

Design a damage pipeline that supports armour, resistances, critical hits, shields, invulnerability, and final health application.

## Requirements

- Incoming damage must be represented by an immutable request object.
- Each processing stage must be independently testable.
- Damage values must never become negative.
- Rejected damage must include a reason.
- The final result must report health damage, shield damage, and whether the hit was critical.

## Additional constraint

Important state changes must be reported through events or callbacks.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-15/)
