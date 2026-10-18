# Keel expansion packs repository

This repository plans packs for Keel beyond software, and shows what Keel is. Read `PLAN.md` before any work; it wins over anything else here.

## Rules for every session in this repository

- `partners-pixel/keel-engine` and `partners-pixel/crownglobe-ops` are read-only reference. Never edit, commit to, push to or open a pull request against either.
- Building a pack waits until keel-engine reaches 1.0 (keel-engine decision F-18). Until then this repository holds plans, the showcase, pack sketches and the registry design, not pack code.
- Every `pack.json` and `stack.json` under `packs/` must pass `node tools/check-sketches.mjs --engine <keel-engine checkout>`, which uses the kernel's own rules. Say which engine commit you checked against.
- Decisions about money, scope and priorities belong to the owner. Ask them in one batch, each with a recommendation; never decide them in a plan.
- Fictional data only. No secret, token or real client or personal data in the repository, a log or memory.
- Facts about platforms, prices, licences and laws go in `docs/SOURCES.md` with a source, a date and a confidence mark. Re-verify a fact before a plan relies on it for a production or money decision.
- Work on a branch and through a pull request; never push to `main` directly.
