# Decay-Based Combo Scoring

**Date:** 2026-07-30  
**Difficulty:** Junior  
**Estimated time:** 35 minutes

## Brief

Create a scoring system where successful actions build a multiplier that decays after inactivity and resets on failure.

## Requirements

- Multiplier growth thresholds must be configurable.
- The multiplier must have a maximum value.
- A failed action must reset the combo.
- Awarded score must use the multiplier active at that moment.
- The system must expose remaining combo time without requiring UI-specific code.

## Additional constraint

Design the public API first and include a short usage example.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-30/)
