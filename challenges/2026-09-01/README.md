# Interruptible Enemy State Machine

**Date:** 2026-09-01  
**Difficulty:** Intermediate  
**Estimated time:** 55 minutes

## Brief

Create an enemy state machine with idle, patrol, investigate, chase, attack, and stunned states.

## Requirements

- Every state must expose enter, update, and exit behaviour.
- Stunned must be able to interrupt any active state.
- Attack must respect both range and cooldown checks.
- The state machine must reject invalid transitions safely.
- Adding a new state must not require editing every existing state.

## Additional constraint

The main system must support more than one simultaneous independent instance.

## Stretch goal

Add editor-time validation for invalid configuration values.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-01/)
