# OrbitSecureAI Event Tracking Guide

This document maps the flow of user-triggered events across OrbitVerse modules into the OrbitSecureAI moderation engine.

Every time a contributor performs a critical action (e.g., late delivery, escrow setup, identity upload), an event is logged, analyzed, and scored.

## Event Lifecycle

1. **Trigger** → Contributor action in a module  
2. **Validation** → Rule check via `violation-types.json`  
3. **Score Impact** → TrustScore updated  
4. **Moderation Check** → Based on thresholds in `moderation-rules.json`  
5. **Notification** → Stakeholders alerted per `notification-triggers.json`  
6. **Log Entry** → Stored in `trustScore-audit.json`

## Sample Event Paths

| Triggering Module | Action             | Event ID         | Severity | Outcome                 |
|-------------------|--------------------|------------------|----------|--------------------------|
| OrbitDeliver      | Delivery >24h late | `DLV-LATE-24`    | 5        | Contributor warned       |
| OrbitTrade        | Escrow failed      | `TRD-ESCROW-FAIL`| 15       | Admin review             |
| OrbitFinance      | Loan default       | `FIN-DEFAULT-01` | 25       | TrustScore penalty       |
| OrbitConnect      | Invalid ID upload  | `CON-ID-FAKE`    | 40       | Immediate identity lock  |

## Data Storage

All moderation events are recorded in:
- `trustScore-audit.json`: Logs user ID, timestamp, event, score impact, status.
- `identity-locks.json`: Tracks contributor locks + recovery path.

## Contributor Note

OrbitSecure does not auto-ban. Every event is tracked transparently, scored fairly, and offers recovery options.

To help refine fairness, submit feedback via `moderation-feedback.md`.

