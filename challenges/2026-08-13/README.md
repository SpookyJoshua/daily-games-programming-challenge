# Contextual Interaction Selector

**Date:** 2026-08-13  
**Difficulty:** Intermediate  
**Estimated time:** 50 minutes

## Brief

Create a selector that chooses the best interactable using distance, viewing angle, priority, and line of sight.

## Requirements

- Invalid interactables must be ignored safely.
- Selection scoring must be configurable.
- The selected target must not flicker between near-equal candidates.
- The system must report selection changes through an event.
- Interaction execution must remain separate from target selection.

## Additional constraint

The primary manager class must remain below 150 lines.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-08-13/)
