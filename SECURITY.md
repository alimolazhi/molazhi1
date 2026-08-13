# Security Baseline

## Current state

Authentication, session management, RBAC, permission checks, rate limiting, CSRF protection, and backend validation do not exist yet.

## Required controls

- Secure password hashing.
- Login, logout, password reset, and account lockout policies.
- Session management with secure cookies or hardened bearer-token strategy.
- Role-based and permission-based access control enforced in the backend.
- Least-privilege default roles: OWNER, ADMIN, MANAGER, ACCOUNTANT, CASHIER, WAITER, KITCHEN, INVENTORY.
- Server-side input validation.
- Audit log for login, logout, permission changes, refunds, cancellations, price changes, inventory adjustments, and financial operations.
- Secrets must be loaded from environment/configuration and never hard-coded.
