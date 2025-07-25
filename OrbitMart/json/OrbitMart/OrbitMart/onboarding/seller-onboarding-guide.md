# 🛍️ Seller Onboarding Guide

Welcome to OrbitMart — this guide walks contributors and team members through the seller onboarding journey and TrustScore setup.

---

## 🧩 Contributor Tasks

- Create onboarding screens (`/ui/seller-form.vue`)
- Implement API logic for identity and business verification
- Integrate fraud flag callbacks using `fraud-protection-flow.json`
- Draft walkthroughs and tooltips for sellers during setup

---

## Seller Logic Overview

Sellers must pass multi-phase onboarding:

1. **Basic Info Capture**
2. **ID & Document Upload**
3. **Bank and Delivery Details**
4. **TrustScore Preview**
5. **CMS Access Grant**

Each step triggers backend verification and JSON logic updates.

---

## TrustScore Breakdown

Based on real-time API checks and seller history, TrustScore is auto-assigned:

- **Scores 80–100:** Trusted Seller (Instant Listing Access)
- **Scores 50–79:** Probationary Access (Manual Review)
- **Below 50:** Restricted Access (Support Required)

Contributors can test sample scores using `/mockdata/trustscore.json`
