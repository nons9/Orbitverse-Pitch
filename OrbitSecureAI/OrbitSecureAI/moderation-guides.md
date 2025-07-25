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

<table>
  <thead>
    <tr>
      <th>Case ID</th>
      <th>User</th>
      <th>Module</th>
      <th>Event</th>
      <th>Severity</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CASE-00358</td>
      <td>USER-03179</td>
      <td>OrbitConnect</td>
      <td>Fake identity submitted</td>
      <td><span class="badge red">40</span></td>
      <td>Pending Review</td>
      <td><button>Review Appeal</button></td>
    </tr>
    <tr>
      <td>CASE-00359</td>
      <td>USER-30941</td>
      <td>OrbitTrade</td>
      <td>Escrow mismatch</td>
      <td><span class="badge orange">15</span></td>
      <td>Review Complete</td>
      <td><button>Confirm Recovery</button></td>
    </tr>
  </tbody>
</table>

