# Architecture Audit and Target Architecture

## Repository Audit

### Current stack

- Static frontend served from `index.html`.
- JavaScript ES Modules in `src/main.js` and `src/finance.js`.
- CSS in `src/styles.css` with RTL Persian layout.
- Tests use Node.js built-in test runner in `test/finance.test.js`.
- No backend API, database, migrations, authentication, authorization, logging, or deployment automation exists yet.

### Current file structure

```text
index.html
package.json
src/
  finance.js
  main.js
  styles.css
test/
  finance.test.js
```

### Current architectural problems

1. The app is a personal finance SPA, not a restaurant ERP.
2. Business data is held in in-memory seed arrays.
3. There is no persistence layer or migration strategy.
4. There is no API boundary between UI and business logic.
5. There is no authentication, session management, RBAC, or permission enforcement.
6. There is no audit log for sensitive operations.
7. Financial and inventory data are mutable client-side values instead of immutable backend transactions.
8. There is no structured logging, validation layer, or centralized error model.
9. Tests cover only a small finance utility and do not exercise ERP workflows.

## Target modular architecture

The target system should be API-first and domain-modular:

```text
apps/
  web/                 # Persian RTL frontend and PWA shell
  api/                 # Backend API
packages/
  domain/              # Pure business rules and state machines
  database/            # Schema, migrations, repositories
  auth/                # Authentication, sessions, RBAC, permissions
  observability/       # Logging, metrics, audit helpers
  shared/              # Shared types, validation schemas, constants
```

Recommended backend layering per domain:

```text
Controller/API route -> Request validation -> Permission guard -> Service/use-case -> Repository -> Database
```

Recommended frontend layering:

```text
Page/Route -> Feature component -> API client -> View model/state -> Design tokens
```

## Domains

The ERP should evolve through independent modules:

- Auth, Users, Roles, Permissions
- Branches, Floors, Rooms, Tables
- Menu, Products, Product Variants, Modifiers, Recipes
- POS, Orders, Payments, Refunds, Taxes, Discounts
- Kitchen and KDS
- Inventory, Warehouses, Stock Movements, Waste
- Purchasing and Suppliers
- Accounting, Transactions, Expenses, Revenues, Cash Registers
- Customers, CRM, Loyalty
- Staff, Shifts, Attendance, Payroll
- Reservations
- Reports and Analytics
- Notifications
- AI Manager and AI Agents
- Audit and Settings

## Phase roadmap

1. Architecture + Repository Audit
2. Database + Core Models
3. Authentication + RBAC
4. Admin Dashboard
5. Menu + Products + Recipes
6. Tables + POS + Orders
7. KDS
8. Inventory
9. Purchasing
10. Accounting + Cash
11. Customers + CRM + Loyalty
12. Staff + Shifts
13. Reports + Analytics
14. AI Manager + Agents
15. PWA + Offline Sync
16. Security + Audit + Backup
17. Testing + Optimization
18. Production Release

## Phase 01 outcome

Phase 01 establishes the true current state, documents the target architecture, and prevents fake feature claims before core backend and database foundations are implemented.
