# Credential response checklist

## Current status

Credential-like values were committed in this document. Assume any real values ever present here are compromised, even if they were later masked or removed from the current branch. This checklist does not prove credentials have been rotated.

## Maintainer actions

1. Revoke and replace each credential that appeared in this file or related workflow history, including provider API keys and OAuth or bot credentials.
2. Review account activity and revoke sessions or grants that cannot be safely retained.
3. Store replacements only in the relevant provider's secret store or n8n credential manager. Do not put values in Git, issues, logs, or chat.
4. Review repository history, forks, clones, caches, and downloaded workflow copies. Coordinate history cleanup with affected maintainers and collaborators; history rewriting cannot recall existing copies.
5. Review workflow node references to ensure they use managed credentials or environment references and contain no literal secret values.
6. Record completion without recording secret values. Confirm provider-side state directly.

## Scope and limits

I have not revoked credentials, accessed provider accounts, checked provider activity, or rewritten Git history. The repository owner must complete and verify those actions. Do not run the workflow until exposed credentials have been rotated and the workflow has been reviewed in an isolated environment.
