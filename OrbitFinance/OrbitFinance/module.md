# OrbitFinance: Payments, Loans & FX Engine

Core financial module powering wallets, micro-loans, and escrow payouts.

---

## 🛠 Payment Channel Logic

Includes:

- Wallet funding via mobile money or bank APIs
- Escrow confirmation rules
- FX conversion with fallback rates

---

## Loan Module Plans

Loan approval via merchant TrustScore + sales volume logic:

| Factor            | Weight |
|-------------------|--------|
| Past Transaction Success | 40% |
| Refund Ratio      | 20%    |
| Customer Reviews  | 20%    |
| Document Verification | 20% |

---

## 🔌 Sample APIs

- `POST /api/wallet/transfer`
- `POST /api/loan/apply`
- `GET /api/fx/convert`
