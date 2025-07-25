# OrbitSecureAI Trust Scenarios

Walkthroughs showing how contributor trust evolves from onboarding to recovery:

---

##  Scenario 1: Late Delivery + Score Recovery

- `Event`: Late delivery (>24h)
- `Flag`: Auto-mod (severity: 10)
- `Impact`: Score drops from 88 ➡ 78
- `Recovery`: On-time next delivery (+4)
- `Final Score`: 82

---

## Scenario 2: ID Falsification ➡Appeal ➡Lock ➡ Review

- `Event`: Fake ID submitted
- `Flag`: Manual (severity: 40)
- `Impact`: Score drops to 34
- `Action`: Identity locked
- `Appeal`: Secondary ID submitted
- `Outcome`: Moderator reviews, recovery granted (+6)
- `Status`: Profile unlocked

---

## Scenario 3: Loan Default ➡Appeal Denied

- `Event`: Missed repayment
- `Flag`: Auto-mod (severity: 25)
- `Score`: Drops from 72 ➡ 47
- `Appeal`: Claim of incorrect loan tagging
- `Outcome`: Auto-rejected
- `Final Status`: Flagged, appeal closed
