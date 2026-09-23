# Decaying AI Threat Selection

**Date:** 2026-09-23  
**Difficulty:** Advanced  
**Estimated time:** 65 minutes

## Brief

Implement an AI threat system using damage, distance, healing, visibility, and time-based decay to choose a target.

## Requirements

- Threat sources must use configurable weightings.
- Destroyed or invalid targets must be removed safely.
- Threat must decay over time.
- Target changes must use hysteresis to avoid rapid switching.
- The system must explain why the current target was selected.

## Additional constraint

Do not identify gameplay objects, states, or actions using display-name strings.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-23/)
