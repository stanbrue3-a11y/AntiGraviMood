# MoodMap — CTO Tech Spec (Industrial 2026)

## North Star (V1)

- 1000 bars + 1000 restaurants.
- Data quality is a product: multi-source, deduped, validated, audited.
- Social layer production-ready (not mock): follow/subscription, feed, likes, comments.
- iOS-first, ultra-performant.

## Non‑Negotiable Quality Gates

- `npm run typecheck` must pass.
- `npm run lint` must pass with `--max-warnings=0`.
- `npm run format:check` must pass.
- `npm test` must pass.
- All gates run in CI on every PR.

## Architecture Target

### Data

- Backend (Supabase) is the source of truth.
- Client is offline-tolerant and fast via local SQLite read model.
- Client syncs: places dataset + social events (moments/likes/comments/follows).

### Layers (client)

- UI components (Expo Router screens)
- Stores (Zustand): state only, no business rules beyond orchestration
- Services: orchestration + domain logic (e.g. mappers, search)
- Repositories: persistence (SQLite) and network (Supabase)
- Schemas: Zod contracts for every payload boundary

## Social V1 (Required Domains)

### Tables (conceptual)

- `profiles` (user public data)
- `follows` (subscriber graph)
- `moments` (post + media refs)
- `moment_likes`
- `moment_comments`
- `place_likes` (this enables “friends liked places map”)

### Key Feature: Friends Like Map

- Query: `place_likes` filtered by follow graph.
- Output: list of `place_id` with `count` + optionally top friends.
- Client: render as a separate Mapbox layer (clusters) reusing existing map infra.

## Performance Targets (iOS)

- Cold start target: measure and keep under an explicit threshold.
- Map scroll/pinch: avoid expensive JS work during gestures.
- Place detail open: prefer local SQLite read then hydrate.

## Delivery Plan (Strict)

### Phase 0 — Stabilize (1–2 weeks)

- Add CI + lint + format + typecheck gates.
- Remove mocks from critical flows or isolate them behind flags.
- Add crash reporting (Sentry/Bugsnag) wiring point.

### Phase 1 — Social Production (2–4 weeks)

- Implement real repositories backed by Supabase.
- RLS policies and minimal rate limiting/anti-abuse.
- Ship: follow, feed, likes, comments, friend-like-map.

### Phase 2 — Data Pipeline (ongoing)

- Reproducible scraping pipeline.
- Automated audits and a “golden dataset” release process.

## Open Questions (need answers)

- Is offline a requirement for V1? If not: we still keep SQLite for speed, but we stop designing for full offline UX.
- Update cadence for places (daily/weekly/on-demand)?
- Social moderation and anti-spam requirements?
