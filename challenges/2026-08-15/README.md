# Atomic Recipe Crafting

**Date:** 2026-08-15  
**Difficulty:** Intermediate  
**Estimated time:** 50 minutes

## Brief

Implement crafting that validates all ingredients and capacity rules before modifying the inventory.

## Requirements

- Recipes must support several ingredient types and quantities.
- A failed validation must not modify inventory state.
- Ingredients must be removed only after every check succeeds.
- The result must identify each missing requirement.
- Recipe definitions must remain separate from runtime crafting logic.

## Additional constraint

The main system must support more than one simultaneous independent instance.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-15/)
