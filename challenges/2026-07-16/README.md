# Checkpoint and Respawn Snapshot

**Date:** 2026-07-16  
**Difficulty:** Junior  
**Estimated time:** 40 minutes

## Brief

Build a checkpoint service that records the latest valid checkpoint and restores selected player state after death.

## Requirements

- Activating the same checkpoint repeatedly must be safe.
- A default spawn must exist when no checkpoint has been activated.
- Checkpoint data must not directly manipulate the player object.
- Respawn must restore position and configurable state values.
- Invalid checkpoint data must fall back safely.

## Additional constraint

Use a dedicated result type rather than returning only true or false.

## Stretch goal

Add graceful recovery when one dependency reports a failure.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-16/)
