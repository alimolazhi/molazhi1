# Database Design Baseline

## Current state

No database, schema, migrations, repository layer, or persistence adapter exists in this repository yet.

## Required database principles

- Every important table must have a primary key.
- Business identifiers must be stable and never reused after deletion.
- Financial, inventory, payment, and cash records should be immutable where possible.
- Inventory must be derived from stock movements, not edited as a direct balance.
- Sensitive changes must be written to `audit_logs`.
- Tables should include `created_at`, `updated_at`, `status`, and `deleted_at` where soft delete is appropriate.

## Initial entities for Phase 02

Phase 02 should introduce migrations for at least these entities:

```text
users, roles, permissions, user_roles
branches, floors, rooms, tables
categories, products, product_variants, modifiers, modifier_items
recipes, recipe_items
orders, order_items, order_modifiers, order_status_history
payments, payment_methods, refunds, discounts, taxes
warehouses, inventory_items, stock_movements
suppliers, purchase_orders, purchase_items, waste_records
customers, customer_addresses, customer_orders, customer_points, customer_wallet
employees, employee_shifts, attendance, payroll
accounts, transactions, expenses, revenues, cash_registers, cash_movements
kitchen_orders, kitchen_order_items, kitchen_stations
reservations, notifications, audit_logs, system_settings
ai_predictions, ai_insights, ai_actions
```

## Business ID examples

- Orders: `ORD-YYYYMMDD-000001`
- Customers: `CUS-000001`
- Products: `PRD-000001`
- Inventory items: `INV-000001`
- Payments: `PAY-YYYYMMDD-000001`

These IDs should be generated from database-backed sequences or transaction-safe counters, not from client-side timestamps.
