# OrbitConnect: Messaging & Contributor Management Engine

Logic module behind DMs, verified lounges, and contributor onboarding.

---

## Verified Communication Tools

- Role-based room access
- Real-time moderation logic
- Message trust filters (spam flags, behavioral triggers)

---

## Contributor Identity Flow

- Contributor metadata captured
- ID + business alignment checked
- Public/Private repo access granted via TrustScore

---

## APIs

- `POST /api/messages/send`
- `GET /api/contributor/:id/score`
- `PATCH /api/room/:id/role-access`
