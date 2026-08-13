# API Design Baseline

## Current state

No backend API exists yet.

## Required API standards

- API-first architecture.
- JSON request and response bodies.
- Server-side validation for every write operation.
- Backend permission checks for every sensitive operation.
- Structured error responses.
- Audit logging for sensitive state changes.
- Pagination, filtering, and export support for reports.

## Initial route groups

```text
/auth
/users
/roles
/permissions
/branches
/tables
/menu
/products
/recipes
/orders
/pos
/payments
/kitchen
/inventory
/purchasing
/accounting
/customers
/loyalty
/staff
/reservations
/reports
/notifications
/ai
/audit
/settings
```

## Order state machine

Allowed order states should be explicitly controlled:

```text
DRAFT -> CONFIRMED -> SENT_TO_KITCHEN -> PREPARING -> READY -> SERVED -> PAID -> CLOSED
DRAFT -> CANCELLED
CONFIRMED -> CANCELLED
PAID -> REFUNDED
```

Every transition must write `order_status_history`.
