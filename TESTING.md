# Testing Baseline

## Current state

The repository currently uses Node.js built-in tests and has a small utility test for finance summary formatting.

## Current command

```bash
npm test
```

## Required future coverage

- Unit tests for domain rules and state machines.
- Integration tests for repositories and database migrations.
- API tests for authentication, authorization, validation, and error responses.
- Critical E2E tests for create order, pay order, cancel order, refund order, consume inventory, receive purchase, close cash register, create expense, generate report, and AI data reads.
