# Deployment Baseline

## Current state

The repository can only be run as a static local site with:

```bash
npm start
```

No production deployment pipeline, backend runtime, database provisioning, environment validation, backup job, or observability stack exists yet.

## Target deployment requirements

- Separate web and API build pipelines.
- Managed PostgreSQL or equivalent transactional database.
- Migration execution during release.
- Environment-based configuration.
- Health checks for API and database.
- Structured logs and error reporting.
- Backup and restore runbooks.
- PWA service worker deployment with safe cache invalidation.
