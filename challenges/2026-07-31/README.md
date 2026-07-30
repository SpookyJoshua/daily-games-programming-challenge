# Fixed-Step Gameplay Replay Buffer

**Date:** 2026-07-31  
**Difficulty:** Advanced  
**Estimated time:** 75 minutes

## Brief

Record compact fixed-step player inputs and replay them deterministically for debugging or ghost playback.

## Requirements

- Recorded frames must include a fixed-step index.
- The buffer must have a configurable maximum duration.
- Playback must support pause, resume, seek, and restart.
- Recording data must be serialisable.
- The replay system must detect mismatched simulation versions.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-31/)
