# n8n workflow archive

> A small collection of workflow-shaped JSON files and a JavaScript workflow example. The files have not been validated by importing or running them in n8n.
> **Status:** Reference/archive material; production readiness and credential rotation are not verified.

## Contents

| Path | Described topic |
|---|---|
| `workflows/01_multi-agent-llm-router.json` | Model routing example |
| `workflows/02_inventory-mesh-api-gateway.json` | Inventory API gateway example |
| `workflows/03_inventory-sync-agent.json` | Inventory synchronization example |
| `workflows/04_mae-daily-orchestrator.json` | Daily orchestration example |
| `workflows/05_daily-ads-audit-pdf-report.json` | Ads audit report example |
| `workflows/06_agency-pipeline-email-lead-processing.json` | Lead processing example |
| `workflows/07_youtube-shorts-autopilot-free-stack.json` | Video workflow example |
| `workflows/07_youtube-shorts-CLEAN-IMPORT.js` | JavaScript workflow construction example; not a JSON export |
| `workflows/08_hmz-github-daily-auto-sync.json` | GitHub synchronization example |

Names and descriptions are labels in this repository; they do not establish that a workflow was active, production-used, exported from an n8n instance, complete, or restorable. Inspect the workflow structure and node compatibility before use.

## Import and review

No n8n version, credential mapping, environment file, deployment procedure, or validated import guide is included. Review every node, expression, external URL, schedule, and write action in an isolated n8n instance before enabling a workflow. Use test accounts and synthetic data first. Keep n8n credentials in its credential store or a secret manager, never in workflow exports or documentation.

The repository contains a JavaScript example that imports `@n8n/workflow-sdk`; no package manifest or successful build/import validation was found in the reviewed tree. Do not treat comments in that file as proof of SDK validation.

## Credential exposure

The tracked `ROTATE-KEYS-NOW.md` contained credential-like values and account identifiers. The file is removed in this documentation branch and sensitive-history cleanup is still required. Removing a file from the current branch does not erase prior Git history, clones, caches, or public exposure. The repository owner must revoke and replace any exposed credentials, review provider/account activity, and coordinate history cleanup and downstream clone refresh. Do not reuse credentials found in Git history.

I did not rotate credentials or contact providers. GitHub history and external provider state require maintainer action and cannot be confirmed by this documentation change.

## Documentation and security

See [SECURITY.md](SECURITY.md) for data, execution, and reporting notes. No license file or formal release procedure was present in the reviewed tree. Confirm provenance and licensing before redistribution.

## Verification status

- Repository tree and workflow file contents were inspected.
- Potential credential-pattern scan of the eight workflow files found no matching tokens; this does not prove they are secret-free.
- No workflow import, execution, credential test, n8n connection, build, or test suite was run.
- No backup restoration or release was verified.
