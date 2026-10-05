# Ordered Stat Modifier Pipeline

**Date:** 2026-10-05  
**Difficulty:** Intermediate  
**Estimated time:** 55 minutes

## Brief

Create stats with base values, flat additions, additive percentages, multiplicative modifiers, temporary effects, and clamps.

## Requirements

- Base values must remain unchanged by modifiers.
- Modifiers must be removable using stable identifiers.
- Calculation order must be explicit and testable.
- Temporary modifiers must expire automatically.
- External callers must receive a read-only view of active modifiers.

## Additional constraint

Avoid inheritance for the main design; prefer composition and small interfaces.

## Stretch goal

Create an example showing two separate systems consuming the same public API.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-10-05/)
