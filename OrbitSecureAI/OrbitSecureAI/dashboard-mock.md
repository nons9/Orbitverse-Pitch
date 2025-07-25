#  OrbitSecure Moderation Dashboard (Mock)

This mock outlines the future OrbitAdmin UI for managing TrustScore events, contributor violations, and moderation flows across modules.

## Dashboard Modules

| Section Name           | Functionality                                  |
|------------------------|------------------------------------------------|
| Active Flags         | View users with violations above -15           |
| Event Feed          | Real-time moderation alerts from all modules   |
| Score Ledger        | Filter and audit TrustScore changes over time  |
| Identity Locks       | Review contributors under restriction          |
| Audit Archive       | Searchable log of all past events              |
| Manual Override     | Admin ability to unlock, penalize, or clear    |

## Dashboard Controls

- **Filters:**
  - Module: OrbitDeliver / Trade / Finance / Connect
  - Role: Trader / Courier / Admin / Regional Lead
  - Severity: Warning, Flag, Lock

- **Actions:**
  - Unlock Identity
  - View Audit Details
  - Adjust TrustScore
  - Assign Moderator
  - Send Notification

## Example Interface Sketch

## Upcoming Features (Mock Extensions)

- Integration with `notification-triggers.json` → real-time SMS/email alerts
- Score trend visualization → contributor trust trajectory
- Appeals queue → allow contributors to submit recovery cases
