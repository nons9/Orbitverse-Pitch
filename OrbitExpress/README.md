# OrbitExpress — Verified Courier Logistics

OrbitExpress powers last-mile delivery across Africa and beyond, combining GPS routing, courier onboarding, and **trust-backed delivery scoring**. Every delivery event is logged, scored, and visualized—ensuring speed, transparency, and contributor accountability.

##  Core Features
- **GPS Routing Hooks**: Real-time location tracking and reroute triggers
- **Courier Trust Logic**: Score-based delivery reputation (`courierTrust.json`)
- **Zone-Based Pricing**: Dynamic pricing by region and trust tier
- **Event Logging**: Missed pickups, reroutes, and delivery violations
- **Fleet Onboarding**: Contributor guide for verified entry (`courier-onboarding.md`)

## Trust & Moderation
OrbitExpress integrates with `OrbitSecureAI` to:
- Flag suspicious delivery patterns
- Lock the courier identity on repeated violations
- Trigger audit logs and recovery flows

## File Structure

## Contributor Pathway
1. Read `courier-onboarding.md` to understand fleet entry rules
2. Review `courierTrust.json` for delivery scoring logic
3. Use `gps-route-hooks.json` to integrate frontend triggers
4. Preview `delivery-map.html` for UI event flow

## Why It Matters
OrbitExpress isn’t just fast—it’s **verified**. Every delivery builds trust, every courier earns a reputation, and every contributor sees their impact.
