# AI Architecture Baseline

## Current state

No AI service, AI data access layer, model integration, prediction pipeline, or agent orchestration exists yet.

## Target AI manager

```text
AI Manager
├── Sales Agent
├── Inventory Agent
├── Finance Agent
├── Customer Agent
├── Staff Agent
├── Forecast Agent
└── Anomaly Agent
```

## Safety model

AI must not claim analysis without real data access. Sensitive actions must follow:

```text
ANALYZE -> PROPOSE -> CONFIRM -> EXECUTE -> AUDIT
```

If historical data is insufficient, forecasting responses must explicitly state that there is not enough data for an accurate prediction.
