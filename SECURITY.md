# Security

## Credential exposure

A tracked file in this repository previously contained credential-like values. The current branch removes those values from the current file, but Git history, forks, caches, clones, logs, and prior downloads may retain copies. Assume any real credentials exposed there are compromised. The maintainer should revoke/replace them with the providers, inspect account activity, and coordinate history cleanup. This repository change does not perform or verify provider-side rotation.

## Workflow review

Treat workflow files as executable automation. Inspect node types, URLs, expressions, schedules, data inputs, outputs, and write actions in an isolated n8n environment before import or activation. Use test credentials and synthetic data. Store secrets in n8n's credential store or a suitable secret manager; never embed live values in workflow files.

No dedicated security reporting channel was present in the reviewed tree. Avoid putting credentials, personal data, or exploitable details in public issues. Confirm a private maintainer contact before disclosure.

This document is guidance, not a security audit or proof that the workflows are safe.
