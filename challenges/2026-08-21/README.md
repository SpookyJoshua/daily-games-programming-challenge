# Stackable Equipment Inventory

**Date:** 2026-08-21  
**Difficulty:** Intermediate  
**Estimated time:** 50 minutes

## Brief

Build an inventory that stores stackable consumables and unique equipment while keeping configuration data separate from runtime item state.

## Requirements

- Item definitions must use stable unique identifiers.
- Stackable items must fill partial stacks before creating new stacks.
- Unique equipment must retain its own runtime durability value.
- Removing an unavailable quantity must leave the inventory unchanged.
- External callers must not be able to mutate the internal collection directly.

## Additional constraint

Invalid input must be handled without throwing from the public gameplay API.

## Stretch goal

Document one architectural trade-off and one rejected alternative.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-21/)
