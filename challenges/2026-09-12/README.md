# Charge-Based Ability Cooldowns

**Date:** 2026-09-12  
**Difficulty:** Intermediate  
**Estimated time:** 45 minutes

## Brief

Create an ability cooldown system that supports independent abilities, multiple charges, recharge queues, and cooldown modifiers.

## Requirements

- Abilities must use stable identifiers rather than display names.
- Using a charge must begin recharging only the missing charge.
- Cooldown progress must be available as a normalised value.
- Changing a cooldown modifier must preserve valid progress.
- The system must define what happens when an active cooldown is restarted.

## Additional constraint

Time must be supplied through an abstraction rather than read directly from UnityEngine.Time.

## Stretch goal

Add a debug event history with a configurable maximum capacity.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-09-12/)
