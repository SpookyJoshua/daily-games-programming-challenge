# Regenerating Resource with Delays

**Date:** 2026-08-31  
**Difficulty:** Junior  
**Estimated time:** 35 minutes

## Brief

Implement health, stamina, or mana regeneration with spend validation, delayed recovery, modifiers, and maximum-value changes.

## Requirements

- Spending more than the available value must fail without modification.
- Regeneration must begin only after a configurable delay.
- Changing the maximum must define whether the current ratio is preserved.
- Regeneration modifiers must stack using a documented rule.
- Value changes must be observable without polling.

## Additional constraint

Do not allocate a new collection during every update tick.

## Stretch goal

Add cancellation or interruption behaviour.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-31/)
