# Conditional Branching Dialogue Runtime

**Date:** 2026-07-18  
**Difficulty:** Intermediate  
**Estimated time:** 60 minutes

## Brief

Implement dialogue nodes, conditional responses, state-changing consequences, and conversation termination without UI dependencies.

## Requirements

- A node must support multiple player responses.
- Unavailable responses must include a reason for debugging.
- Consequences must be applied only after a response is selected.
- Dialogue data must remain separate from presentation.
- Invalid node references must terminate gracefully with an error result.

## Additional constraint

Avoid inheritance for the main design; prefer composition and small interfaces.

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

[View the public challenge page](https://spookyjoshua.github.io/daily-games-programming-challenge/challenges/2026-07-18/)
