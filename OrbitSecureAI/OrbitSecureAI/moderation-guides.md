# OrbitSecureAI Moderation Guide

This guide explains how contributor moderation works across OrbitVerse modules, including flags, severity scoring, appeal protocols, and recovery actions.

---

## Flag Types & Severity Ranges

| Flag Type               | Severity (0–100) | Trigger Source | Review Needed |
|------------------------|------------------|----------------|----------------|
| Late Delivery          | 5–15             | Auto           | No             |
| Escrow Mismatch        | 15–30            | Auto/Manual    | Yes            |
| Identity Falsification | 40–70            | Manual         | Yes            |
| Loan Default           | 25–45            | Auto           | Yes            |
| Trade Violations       | 30–60            | Auto/Manual    | Yes            |

---

## Scoring System

- Each contributor starts at `score: 100`
- Violations reduce score based on severity
- Recovery actions can regain score (up to 90)
- Scores < 35 trigger identity lock risk

---

## Moderation Roles

| Role         | Actions Allowed                            |
|--------------|---------------------------------------------|
| Auto-Mod     | Flag triggers, score updates                |
| Moderator    | Review cases, respond to appeals            |
| System Viewer| Monitor flags, feed, and contributor stats  |

---

## Appeal Protocol

- Contributors submit a JSON appeal with a reason
- The moderator has 48h to respond
- Status: `Pending`, `Approved`, or `Rejected`

---

## 🔁 Recovery Flow

- Triggered on correction (e.g., verified delivery)
- Recovery score logged in `recovery-actions.json`
- Recovery can be auto or require moderator confirmation

---

## Identity Lock Rules

- Score <35 OR verified fraud = profile lock
- Appeals permitted unless `system override` triggered
- Locked profiles reviewed every 72h


## Review Timeline

| Status            | Review Due |
|------------------|------------|
| Flag Raised       | 24h       |
| Appeal Submitted  | 48h       |
| Identity Locked   | 72h       |
| Recovery Logged   | 12h       |


Orbital trust needs clarity. This guide ensures fairness, transparency, and modular resolution
