#  OrbitGroups — Verified Communication & Community Logic

OrbitGroups powers trusted communication across the OrbitVerse ecosystem. From direct messages to lounges and live events, every interaction is governed by **role-based permissions**, **moderation flows**, and **score-linked visibility**.

## 🔧 Core Features
- **Role Tiers**: Contributor, Moderator, Admin, Partner
- **Permission Logic**: Defined in `groupPermissions.json`
- **DM & Lounge Hooks**: Spam prevention, trust triggers (`dm-hooks.json`)
- **Moderator Rotation**: Community-led moderation cycles
- **Event Logging**: Chat violations, mute triggers, audit trails

## 🛡 Trust & Moderation
OrbitGroups integrates with `OrbitSecureAI` to:
- Flag spam, impersonation, and harassment
- Lock identity on repeated violations
- Trigger audit logs and recovery flows
- Rotate moderators based on trust score

## 📁 File Structure

## 🧭 Contributor Pathway
1. Read `orbitLounges.md` for lounge rules and moderator logic
2. Review `groupPermissions.json` to understand role tiers
3. Use `dm-hooks.json` to integrate frontend chat triggers
4. Preview `lounge-view.html` for UI event flow

## 🌍 Why It Matters
OrbitGroups ensures that every message builds trust. Contributors earn visibility, moderators rotate ethically, and communities thrive with transparency.
