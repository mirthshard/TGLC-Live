# Implementation Plan: TGLC Multi-Tier Portal (Client & Management Console)

Build out the Member Portal into a full multi-screen, multi-tier web application representing the digital operating system of The Global Luxury Consortium. Powered by a high-fidelity **Simulated Supabase Client** (persisted in local state with reactive queries and instant login credentials for four distinct roles), this gives prospective clients, family office principals, and managing directors a fully realized, interactive demonstration.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the following architectural decisions in Phase 1:
> - **Supabase Persistence**: Simulated Supabase Client (`supabaseClient.ts`) providing zero-key, zero-setup instant demo logins while replicating the exact Supabase table schemas (`profiles`, `concierge_requests`, `direct_messages`, `itineraries`, `billing_statements`). Also includes an easy toggle for members who wish to bind custom live Supabase credentials.
> - **Multi-Tier Role Coverage**: 4 distinct switchable personas:
>   1. **Private Client**: James Ashford (Global Member, Eaton Square, London & Florence)
>   2. **Family Office Executive**: Elena Rostova (CFO, Vance-Rostova Multi-Family Office)
>   3. **Senior Manager / Admin**: Camilla Vance-Moreau (Director of Private Office, Albemarle St)
>   4. **Tactical Security Lead**: Julian Sterling (Director of Fleet & Protection)
> - **Core Interactive Features**:
>   1. Real-time concierge request creation, live status workflow transitions (Received -> In Review -> Staged -> Completed), and priority dispatch.
>   2. Private direct messaging channel with live responses from dedicated principals (Camilla & Julian).
>   3. Dynamic Florence & London itinerary viewer with interactive waypoint map coordinates and flight telemetry.
>   4. Confidential billing ledgers, retained hours trackers, pass-through disbursements, and downloadable statement memos.

---

## 1. Overview & Core Concept

- **What It Does**: A secure, multi-tier lifestyle operations portal delivering personalized dashboards for sovereign families and the internal command console for Mayfair lifestyle managers.
- **Target Audience / Personas**: 
  - Ultra-High-Net-Worth Principals managing global travel and home admissions.
  - Family Office CFOs monitoring retained hours, third-party expense disbursements, and security clearances.
  - TGLC Managing Directors and Tactical Mobility Leads dispatching close protection, aviation, and reservations.
- **Key Value**: Delivers the visual and operational reality of TGLC’s promise—"A life arranged with precision, warmth, and unhurried grace."

---

## 2. User Experience & Visual Design

### A. Persona Switcher & Authentication Screen
- **Quick Demo Persona Bar**: One-click instant login selector showcasing the 4 accounts:
  - `client@tglc.com` / `james123` (Client - James Ashford)
  - `familyoffice@tglc.com` / `office123` (Family Office - Elena Rostova)
  - `admin@tglc.com` / `admin123` (Admin / Senior Director - Camilla Vance-Moreau)
  - `security@tglc.com` / `secure123` (Security Lead - Julian Sterling)
- **Login Modal**: Polished biometric-inspired credentials card featuring the TGLC Crest, encrypted session indicator, demo credential chips, and a "Use Custom Supabase Project" drawer.

### B. Role-Specific Dashboards
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TGLC Member & Management Portal                                             │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ [Role Badge]    │ Breadcrumb / Active Session: James Ashford (Global Tier) │
│ • Overview      ├───────────────────────────────────────────────────────────┤
│ • Concierge     │ [Active Florence Itinerary Plate]                         │
│ • Direct Desk   │ Departure 08:45 RAF Northolt -> Peretola Airport          │
│ • Coordinates   ├─────────────────────────────┬─────────────────────────────┤
│ • Ledger        │ Active Requests (3)         │ Encrypted Channel (Camilla) │
│ • Dossier       │ • Range Rover SV [Staged]   │ "Chalet provisions stocked" │
│                 │ • Villa San Michele [Done]  │ [Send message...]           │
└─────────────────┴─────────────────────────────┴─────────────────────────────┘
```

1. **Client View (James Ashford)**:
   - Panoramic Florence & London active journey overview.
   - Live concierge request pipeline with interactive creation modal.
   - Direct secure chat with Camilla Vance-Moreau.
   - Retained lifestyle balance and upcoming private calendar invitations.
2. **Family Office View (Elena Rostova)**:
   - Multi-property domestic overview (Belgravia, Cotswolds, Verbier).
   - Consolidated billing ledgers, pass-through disbursements, and expense exports.
   - Staff roster allocations and NDA registry.
3. **Admin & Senior Director Console (Camilla Vance-Moreau)**:
   - Central member request triage board (drag/click status updates).
   - Member roster management with tier status, dossier completeness, and assigned managers.
   - Broadcast alerts to member mobile channels.
4. **Security & Fleet Console (Julian Sterling)**:
   - Armoured vehicle and Sprinter JetVan staging log.
   - Close protection detail rosters and diplomatic route clearance status.
   - Airport apron tarmac logistics (RAF Northolt, Farnborough).

### C. Aesthetic & Typography Direction
- **Theme**: Deep obsidian luxury (`#08090C`, `#0E1016`, `#12141A`), bordered by satin gold accents (`#B98633`, `#CFA85E`) and warm paper typography (`#F4F1EA`, `#D9D4CA`).
- **Zero-Pill Discipline**: Status indicators styled with clean typographic bullets and muted contrast borders, never candy badge pills.
- **Tabular Figures**: Numeric balances, reference numbers, flight times, and coordinates rendered with `font-mono tabular-nums`.

---

## 3. Technical Architecture & Data Strategy

```
┌───────────────────────────────────────────────────────────┐
│                    Portal App Context                     │
│               (usePortalAuth / useSupabase)               │
└─────────────────────────────┬─────────────────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│  Client View │      │  Admin View  │      │ Security View│
│ (Member Hub) │      │(Triage Board)│      │(Fleet/Threat)│
└──────┬───────┘      └──────┬───────┘      └──────┬───────┘
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                             ▼
              ┌─────────────────────────────┐
              │  Simulated Supabase Engine  │
              │  • profiles                 │
              │  • concierge_requests       │
              │  • direct_messages          │
              │  • itineraries              │
              │  • billing_ledgers          │
              │  (Reactive LocalStorage)    │
              └─────────────────────────────┘
```

- **`src/services/supabaseClient.ts`**:
  - Implements a fully compatible Supabase-style query builder interface (`supabase.from('table').select().insert().update().eq()`).
  - Supports live real-time state broadcasts across tabs and reactive re-renders.
  - Allows optional initialization with real `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` if the client provides credentials in `.env`.
- **Component Decomposition**:
  - `MemberPortal.tsx`: Main router and responsive shell with mobile bottom drawer and desktop sidebar.
  - `PortalLogin.tsx`: Elegant entry gate with 1-click demo role switcher.
  - `ClientDashboard.tsx`: Luxury client experience (Requests, Itinerary, Messaging, Ledger).
  - `AdminDashboard.tsx`: Staff operational triage, request status workflow, and member directory.
  - `SecurityDashboard.tsx`: Convoy logistics, close protection status, and secure flights.
  - `FamilyOfficeDashboard.tsx`: Multi-household oversight and billing transparency.

---

## 4. Verification & Quality Plan

1. **Role Switcher Test**: Verify that clicking between Client, Family Office, Admin, and Security Lead immediately recalibrates the dashboard views and data permissions.
2. **Interactive Request Dispatch**: Submit a new request in Client view -> Switch to Admin view -> Verify request appears immediately -> Update status to "Staged" -> Switch back to Client view -> Verify status changed.
3. **Encrypted Chat Interaction**: Send a message to Camilla -> Receive simulated priority response -> Verify message history persists.
4. **Mobile Responsiveness**: Test collapsible sidebars and touch rails on iOS/Android viewports ($\ge 44\text{px}$ touch targets).
5. **Compilation & Linting**: Run `compile_applet` and `lint_applet` together to verify zero TypeScript errors.
