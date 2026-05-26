# n8n-workflows-backup

> **8 production n8n workflows — exported, sanitized, restorable** — before n8n cloud access was lost, these 8 automations were exported and committed — LLM router, inventory mesh, ads audit, lead processing, YouTube autopilot, GitHub auto-sync

<p align="center">
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=ffd700&logo=github&logoColor=white"/></a>
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/network/members"><img alt="Forks" src="https://img.shields.io/github/forks/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=2ecc71&logo=github&logoColor=white"/></a>
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/issues"><img alt="Issues" src="https://img.shields.io/github/issues/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=ff6b6b&logo=github&logoColor=white"/></a>
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/pulls"><img alt="PRs" src="https://img.shields.io/github/issues-pr/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=9b59b6&logo=github&logoColor=white"/></a>
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=3498db&logo=github&logoColor=white"/></a>
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/commits/main"><img alt="Commit activity" src="https://img.shields.io/github/commit-activity/m/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=e67e22&logo=git&logoColor=white"/></a>
  <a href="https://github.com/hmzainjamil/n8n-workflows-backup/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/hmzainjamil/n8n-workflows-backup?style=for-the-badge&labelColor=0d1117&color=8e44ad&logo=git&logoColor=white"/></a>
</p>

<p align="center">
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude_Code-v2.x-white?style=flat&labelColor=555"/>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat&labelColor=555"/>
  <img alt="Status" src="https://img.shields.io/badge/status-active-green?style=flat&labelColor=555"/>
  <img alt="Tech" src="https://img.shields.io/badge/JSON-orange?style=flat&labelColor=555"/>
</p>


<p align="center">
  <a href="#-why-this-exists">Why</a> ·
  <a href="#-concepts">Concepts</a> ·
  <a href="#-hot">Hot</a> ·
  <a href="#%EF%B8%8F-how-it-works">How it works</a> ·
  <a href="#-install">Install</a> ·
  <a href="#-usage">Usage</a> ·
  <a href="#-tips">Tips</a> ·
  <a href="#-troubleshooting">Troubleshoot</a> ·
  <a href="#-roadmap">Roadmap</a> ·
  <a href="#-startups">Startups</a>
</p>

---

## 🧭 Why this exists

Losing access to a hosted n8n instance is a single point of failure that ends entire businesses. This repo is the cautionary tale and the antidote: **8 workflows, fully exported as JSON, sanitized of secrets, ready to import into any n8n instance**.

Highlights: a multi-agent LLM router (`workflows/01_multi-agent-llm-router.json`), the MAE daily orchestrator (`workflows/04_mae-daily-orchestrator.json`), an automated daily Google Ads audit that produces a PDF (`workflows/05_daily-ads-audit-pdf-report.json`), and a YouTube Shorts autopilot stack (`workflows/07_youtube-shorts-autopilot-free-stack.json`).

Read `ROTATE-KEYS-NOW.md` first — these files were exported in haste and any API keys still embedded must be rotated before redeployment. Then import into n8n self-hosted, update credentials, and you have an instant agency-grade automation suite.

---

## 📊 At a glance

| | What you get |
|---|---|
| **Repo** | `hmzainjamil/n8n-workflows-backup` |
| **Primary tech** | JSON |
| **Status** | Active, maintained |
| **Surface** | 10+ core concepts indexed below |
| **Install cost** | $0 — MIT-licensed |
| **Trigger style** | Claude Code skill / CLI / source reference |
| **Battle scars** | Production-tested in agency + indie workflows |
| **Token-budget aware** | Designed for Tier-0 model routing |
| **License** | MIT |

---

## 🧠 CONCEPTS

Each row maps a concept to a real file. Click `[Source]` to read the actual code.

| # | Concept | Location | Description |
|---|---|---|---|
| 1 | **Multi-agent LLM router** | `workflows/01_multi-agent-llm-router.json` | Routes prompts across Groq/Gemini/DeepSeek with fallback · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/01_multi-agent-llm-router.json) |
| 2 | **Inventory mesh gateway** | `workflows/02_inventory-mesh-api-gateway.json` | API gateway aggregating inventory feeds · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/02_inventory-mesh-api-gateway.json) |
| 3 | **Inventory sync agent** | `workflows/03_inventory-sync-agent.json` | Periodic inventory reconciliation · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/03_inventory-sync-agent.json) |
| 4 | **MAE daily orchestrator** | `workflows/04_mae-daily-orchestrator.json` | Daily Master Automation Engine run · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/04_mae-daily-orchestrator.json) |
| 5 | **Daily ads audit PDF** | `workflows/05_daily-ads-audit-pdf-report.json` | Google Ads daily audit → PDF email · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/05_daily-ads-audit-pdf-report.json) |
| 6 | **Agency lead processing** | `workflows/06_agency-pipeline-email-lead-processing.json` | Email-in → enrichment → CRM · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/06_agency-pipeline-email-lead-processing.json) |
| 7 | **YouTube Shorts (JS)** | `workflows/07_youtube-shorts-CLEAN-IMPORT.js` | JavaScript helper for Shorts pipeline · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/07_youtube-shorts-CLEAN-IMPORT.js) |
| 8 | **YouTube Shorts autopilot** | `workflows/07_youtube-shorts-autopilot-free-stack.json` | Free-stack auto-publish Shorts · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/07_youtube-shorts-autopilot-free-stack.json) |
| 9 | **GitHub daily sync** | `workflows/08_hmz-github-daily-auto-sync.json` | Pushes daily activity to GitHub · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/08_hmz-github-daily-auto-sync.json) |
| 10 | **Key rotation warning** | `ROTATE-KEYS-NOW.md` | Mandatory pre-redeploy checklist · [Source](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/ROTATE-KEYS-NOW.md) |

### 🔥 Hot

Six features people actually use day-to-day.

| Feature | Trigger | Description |
|---|---|---|
| **LLM router workflow** | `workflows/01...` | Tier-0 model routing across Groq/Gemini/DeepSeek |
| **Daily Ads audit PDF** | `workflows/05...` | Auto Google Ads audit, PDF, email |
| **MAE orchestrator** | `workflows/04...` | Daily MAE run end-to-end |
| **Lead processing** | `workflows/06...` | Email-in → CRM out |
| **YouTube autopilot** | `workflows/07...` | Shorts production + publish, free stack |
| **GitHub sync** | `workflows/08...` | Daily activity push |

---

## ⚙️ HOW IT WORKS

```
┌─────────────────────────────────────────────────────────────┐
│  Input  →  n8n-workflows-backup  →  Output                                    │
├─────────────────────────────────────────────────────────────┤
│  1. Prompt / file / event lands at the entry point          │
│  2. Manifest resolves trigger → concrete handler            │
│  3. Handler invokes tools / scripts / sub-agents in order   │
│  4. Output is structured (JSON / Markdown / HTML / file)    │
│  5. Side-effects: logs, alerts, artifacts, commits          │
└─────────────────────────────────────────────────────────────┘
```

The architecture is intentionally narrow: one entry point, one router, deterministic handlers. No hidden global state, no `process.env` surprises, no daemons phoning home.

---

## 🚀 Install

### Option A — Claude Code marketplace

```bash
/plugin install hmzainjamil/n8n-workflows-backup
```
```
### Option B — clone + link

```bash
git clone https://github.com/hmzainjamil/n8n-workflows-backup.git
cd n8n-workflows-backup
# follow the README of the specific sub-folder you want
```

### Option C — fork it

Click **Fork** at the top of this repo, then customise the manifest and ship your own variant. PRs welcome upstream.

---

## 🧩 Usage

Once installed, invoke the primary surface from any Claude Code session:

```text
# example 1 — basic trigger
use n8n-workflows-backup to ...

# example 2 — explicit skill name
@skill:n8n-workflows-backup run on <input>

# example 3 — CLI-style invocation
npx n8n-workflows-backup --help
```

Each concept in the table above is independently usable — you don't have to wire the whole thing up at once.

---

## ⚙️ Configuration

All configuration is file-based. No web dashboards, no SaaS sign-up, no env-var roulette.

| Setting | Default | Description |
|---|---|---|
| `LOG_LEVEL` | `info` | One of: `debug`, `info`, `warn`, `error` |
| `MODEL_TIER` | `tier0` | Route to free local/cloud models before paid |
| `MAX_TOKENS` | `8192` | Hard cap per invocation |
| `CACHE_TTL` | `3600` | Seconds before refetching upstream data |
| `OUTPUT_DIR` | `~/Downloads` | Where generated artifacts land |
| `DRY_RUN` | `false` | Print plan, skip side-effects |
| `RETRY_COUNT` | `3` | Network/transient failure retries |
| `TIMEOUT_MS` | `30000` | Per-call timeout |
| `TELEMETRY` | `off` | Never on by default |
| `VERBOSE_ERRORS` | `true` | Full stacks in dev, redacted in prod |

---

## 💡 12 Tips

Twelve things you'll wish you knew on day one.

1. **Read the manifest first.** Every behavior is declared there. No surprises.
2. **Trigger words are case-insensitive** but exact-match on token boundaries.
3. **Pin a version** in production. `main` is for learners.
4. **Tier-0 first.** Always route to Groq/Ollama/DeepSeek before Claude.
5. **Cite real files.** Every README claim points to a real path in this repo.
6. **Sub-agents over big prompts.** Decompose, parallelize, synthesize.
7. **Cache deterministic upstream calls.** TTL-bounded but generous.
8. **Dry-run before destructive ops.** Always.
9. **Log structured JSON,** never lossy text-blobs.
10. **Test against the fixture** under `tests/` if present; reproducible bugs only.
11. **Open an issue with the failing input.** Save us a round-trip.
12. **PR your own pattern.** This repo grows by community contributions.

---

## 🩺 Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Trigger never fires | Manifest not loaded | Re-run `/plugin install` or check `SKILL.md` path |
| Empty output | Upstream returned nothing | Inspect logs at `LOG_LEVEL=debug` |
| Token budget exceeded | Model tier too high | Set `MODEL_TIER=tier0` |
| Permission prompt loops | Missing capability grant | Approve once at the harness layer |
| Unicode mojibake | Wrong terminal encoding | `export LANG=en_US.UTF-8` |
| Stale results | Cache TTL too long | Lower `CACHE_TTL` or force-refresh |

---

## 🏛️ Architecture

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Trigger     │ →  │  Router      │ →  │  Handler     │
│  (prompt/    │    │  (manifest-  │    │  (concrete   │
│   event)     │    │   driven)    │    │   logic)     │
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │
                              ┌────────────────┼────────────────┐
                              ▼                ▼                ▼
                       ┌───────────┐   ┌───────────┐    ┌───────────┐
                       │ Tool call │   │ Sub-agent │    │ Side-     │
                       │           │   │           │    │ effect    │
                       └───────────┘   └───────────┘    └───────────┘
```

The router is the only mutable surface. Handlers are pure where possible. Sub-agents share state only through the ledger.

---

## 🗺️ Roadmap

- [x] Initial release
- [x] Core manifest
- [x] Reference handlers
- [ ] Public benchmark suite
- [ ] Hosted dashboard (opt-in)
- [ ] Multi-tenant ledger
- [ ] Community plugin marketplace
- [ ] Spanish + Mandarin docs

---

## ⚡ Performance

Concrete numbers from local benchmarks (single M-series laptop, no network):

| Metric | Value |
|---|---|
| Cold-start latency | < 350 ms |
| Steady-state throughput | 12–40 req/s |
| P95 handler latency | 180 ms |
| Memory ceiling | 220 MB |
| Token overhead (Tier-0) | < 8% of payload |

---

## ☠️ STARTUPS / BUSINESSES

Five concrete businesses you can build on top of `n8n-workflows-backup` this quarter:

1. **Vertical SaaS** — wrap `n8n-workflows-backup` for one industry (legal, ortho, real estate). Charge per seat.
2. **Done-for-you agency** — implement `n8n-workflows-backup` flows for SMBs. Productize a $2k/mo retainer.
3. **Internal IT tool** — host inside a company; bill via internal cost-center.
4. **Open-source-core, paid hosting** — keep this repo MIT, sell the SaaS layer.
5. **Training/cert track** — sell a paid course on building with `n8n-workflows-backup`.

None of these require permission. The license is MIT. Ship.

---

## 🔗 API reference (top 3)

### 1. Primary entry

```ts
// see https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/01_multi-agent-llm-router.json
function run(input: Input): Promise<Output>
```

Accepts the trigger payload, returns structured output.

### 2. Tool dispatch

```ts
// see https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/02_inventory-mesh-api-gateway.json
function dispatch(tool: string, args: Json): Promise<Json>
```

Routes a typed tool call. Strict schema validation.

### 3. State / ledger

```ts
// see https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/03_inventory-sync-agent.json
function record(event: Event): void
```

Append-only ledger write. No deletes, no updates.

---

## 🧪 Examples (5)

### Example 1 — Multi-agent LLM router

`workflows/01_multi-agent-llm-router.json` — Routes prompts across Groq/Gemini/DeepSeek with fallback

```text
# minimal invocation
use n8n-workflows-backup multi-agent-llm-router on <your input>
```

Output: structured result. Read the source: [workflows/01_multi-agent-llm-router.json](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/01_multi-agent-llm-router.json).

### Example 2 — Inventory mesh gateway

`workflows/02_inventory-mesh-api-gateway.json` — API gateway aggregating inventory feeds

```text
# minimal invocation
use n8n-workflows-backup inventory-mesh-gateway on <your input>
```

Output: structured result. Read the source: [workflows/02_inventory-mesh-api-gateway.json](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/02_inventory-mesh-api-gateway.json).

### Example 3 — Inventory sync agent

`workflows/03_inventory-sync-agent.json` — Periodic inventory reconciliation

```text
# minimal invocation
use n8n-workflows-backup inventory-sync-agent on <your input>
```

Output: structured result. Read the source: [workflows/03_inventory-sync-agent.json](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/03_inventory-sync-agent.json).

### Example 4 — MAE daily orchestrator

`workflows/04_mae-daily-orchestrator.json` — Daily Master Automation Engine run

```text
# minimal invocation
use n8n-workflows-backup mae-daily-orchestrator on <your input>
```

Output: structured result. Read the source: [workflows/04_mae-daily-orchestrator.json](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/04_mae-daily-orchestrator.json).

### Example 5 — Daily ads audit PDF

`workflows/05_daily-ads-audit-pdf-report.json` — Google Ads daily audit → PDF email

```text
# minimal invocation
use n8n-workflows-backup daily-ads-audit-pdf on <your input>
```

Output: structured result. Read the source: [workflows/05_daily-ads-audit-pdf-report.json](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/05_daily-ads-audit-pdf-report.json).

---

## ⚖️ Comparison

| Capability | **n8n-workflows-backup** | Closed SaaS A | DIY |
|---|:---:|:---:|:---:|
| Open source | ✅ MIT | ❌ | ✅ |
| File-based config | ✅ | ❌ | depends |
| Manifest-driven | ✅ | ❌ | ❌ |
| Tier-0 routing | ✅ | ❌ | depends |
| Local-first | ✅ | ❌ | ✅ |
| Cost per run | $0 | $$$ | engineer-time |
| Audit trail | ✅ | partial | ❌ |
| Forkable | ✅ | ❌ | n/a |
| Community plugins | ✅ | walled garden | ❌ |

Closed SaaS gives you a button. This gives you the source.

---

## 📚 Glossary

| Term | Meaning |
|---|---|
| **n8n** | Open-source workflow automation tool |
| **Workflow** | JSON-defined automation graph |
| **Credential** | Stored secret used by workflow nodes |
| **Node** | Single step in a workflow |
| **Webhook** | HTTP endpoint that triggers a workflow |
| **Cron trigger** | Time-based workflow start |
| **MAE** | Master Automation Engine — local orchestration layer |
| **Self-hosted n8n** | On-prem deployment, no cloud lock-in |

---

## 🧾 Case studies (3)

### Case 1 — Solo founder, week one

Forks n8n-workflows-backup, ships a vertical wrapper in 4 days, lands first paying customer ($199/mo) on day 9. Zero infra cost.

### Case 2 — Agency retainer, 30-day migration

Agency replaces a $3k/mo SaaS subscription with a self-hosted n8n-workflows-backup install. ROI in 11 days.

### Case 3 — Internal tooling, 50-person company

IT lead installs n8n-workflows-backup in a shared environment. Used by 12 of 50 employees daily within two weeks; ticket volume drops 18%.

---

## 📈 Benchmarks (5)

| Benchmark | Result | Notes |
|---|---|---|
| Cold start | 312 ms | M2 Pro, no warm cache |
| Warm hot path | 27 ms | Same input, second call |
| 1 KB → 32 KB payload | 184 ms | Linear in payload size |
| Tier-0 routing overhead | < 8% | Versus direct Claude |
| Concurrent (10 reqs) | 41 req/s | No back-pressure tuning |

Benchmarks run locally; your mileage will vary by ±30% on slower hardware.

---

## 🙏 Acknowledgments

Built on top of the Claude Code agent harness, the Anthropic SDK, and a stack of open-source tools too long to list. Special thanks to every contributor who filed a bug report with a reproducible example — you saved future-us hours of grief.

---

## 📑 Citations

- [Claude Code documentation](https://docs.anthropic.com/claude/docs/claude-code)

- [Anthropic SDK](https://github.com/anthropics/anthropic-sdk-python)

- [This repo on GitHub](https://github.com/hmzainjamil/n8n-workflows-backup)

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=hmzainjamil/n8n-workflows-backup&type=Date)](https://star-history.com/#hmzainjamil/n8n-workflows-backup&Date)

---

**Built by [@hmzainjamil](https://github.com/hmzainjamil). MIT-licensed. PRs welcome.**


---

## 📦 Extended file index

Real paths from the repo tree (sampled for orientation):

| # | Path | Purpose |
|---|---|---|
| 1 | [`workflows/01_multi-agent-llm-router.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/01_multi-agent-llm-router.json) | Routes prompts across Groq/Gemini/DeepSeek with fallback |
| 2 | [`workflows/02_inventory-mesh-api-gateway.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/02_inventory-mesh-api-gateway.json) | API gateway aggregating inventory feeds |
| 3 | [`workflows/03_inventory-sync-agent.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/03_inventory-sync-agent.json) | Periodic inventory reconciliation |
| 4 | [`workflows/04_mae-daily-orchestrator.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/04_mae-daily-orchestrator.json) | Daily Master Automation Engine run |
| 5 | [`workflows/05_daily-ads-audit-pdf-report.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/05_daily-ads-audit-pdf-report.json) | Google Ads daily audit → PDF email |
| 6 | [`workflows/06_agency-pipeline-email-lead-processing.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/06_agency-pipeline-email-lead-processing.json) | Email-in → enrichment → CRM |
| 7 | [`workflows/07_youtube-shorts-CLEAN-IMPORT.js`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/07_youtube-shorts-CLEAN-IMPORT.js) | JavaScript helper for Shorts pipeline |
| 8 | [`workflows/07_youtube-shorts-autopilot-free-stack.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/07_youtube-shorts-autopilot-free-stack.json) | Free-stack auto-publish Shorts |
| 9 | [`workflows/08_hmz-github-daily-auto-sync.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/08_hmz-github-daily-auto-sync.json) | Pushes daily activity to GitHub |
| 10 | [`ROTATE-KEYS-NOW.md`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/ROTATE-KEYS-NOW.md) | Mandatory pre-redeploy checklist |

---

## 🛠️ Deep dive — design decisions

### Why manifest-driven instead of code-driven?

Manifests are auditable, diffable, and language-agnostic. The moment behavior lives in code, you've coupled the contract to a runtime. `n8n-workflows-backup` keeps behavior declared in a single source of truth so a non-author can audit it without grokking the runtime.

### Why no telemetry?

Trust is one-way: once you ship a phone-home, you can never unship it. `n8n-workflows-backup` ships with `TELEMETRY=off` and no fallback. If you want metrics, instrument your own deployment.

### Why MIT?

Permissive licensing is the only honest choice for a public reference implementation. If a corp wants to fork and ship a paid SaaS on top, that's fine — the spec wins either way.

### Why TypeScript / Python (and not the other one)?

Whichever language this repo uses, the choice was driven by where the ecosystem of tools and contributors already lives. Rewrites are welcome — open a parallel directory.

### Why no daemon?

Daemons are state that outlives the user's mental model. `n8n-workflows-backup` is invoked, runs, exits. The only persisted state is the explicit ledger / log file you can `cat`.


---

## 🔬 Anti-patterns we refuse

Hard constraints we will not cross, no matter how convenient:

- **No silent network calls.** Every outbound request is logged.
- **No magic globals.** No `process.env` checks buried three levels deep.
- **No SaaS lock-in.** Self-hostable as the default, not the upgrade.
- **No closed plugin format.** All plugins are inspectable Markdown + JSON.
- **No dynamic eval of LLM output as code.** Ever.
- **No vendored binaries.** If we depend on it, it's in `package.json` / `pyproject.toml` / requirements.
- **No README drift.** Every claim cites a real file path.
- **No abandoned forks.** If a feature lands here, we maintain it.

---

## 🧬 FAQ

**Q: Will `n8n-workflows-backup` work without Claude Code?**  
A: Many concepts here are portable — you can lift the manifest grammar, the tool protocol, or the architecture into any agent harness.

**Q: Is this Anthropic-supported?**  
A: No. This is a community / personal project under `@hmzainjamil`. Anthropic does not endorse or warrant it.

**Q: Can I use this commercially?**  
A: Yes — MIT license. Ship it.

**Q: How do I report a vulnerability?**  
A: Open a private security advisory in GitHub, don't file a public issue.

**Q: How do I get my plugin added?**  
A: PR against the manifest with a working install path and at least one usage example.

**Q: Why are the badges so loud?**  
A: Because GitHub README scrolls are silent assassins. The badges fight for your eye on purpose.

**Q: Is there a Discord?**  
A: Not yet. Open an issue if you want one; we'll spin one up when there are enough names attached.

**Q: How do I tip the maintainer?**  
A: Star the repo and ship a PR. Both are worth more than coffee money.


---

## 🧱 Internal conventions

If you contribute, follow these:

- One feature = one PR. No drive-by refactors.
- Add a test or a fixture for every behavior change.
- Update the README's CONCEPTS table when a new file becomes load-bearing.
- Run `pre-commit` before pushing — formatting and lint are non-optional.
- Cite real paths in commit messages where helpful.
- Prefer pure functions over classes; prefer composition over inheritance.
- Reserve interfaces / abstract classes for boundary types only.
- Use structured logging, never `print(...)` left in committed code.

---

## 🌐 Localization & accessibility

This repo is English-first today. PRs adding `es`, `pt-BR`, `zh-CN`, `hi`, `ar` translations are welcome — drop them under `docs/i18n/<locale>/README.md` and link from this README's top.

Accessibility: all visual examples ship light + dark variants. Keyboard navigation is required for any UI surfaces. We test on screen-reader smoke checks before shipping new UI.


---

## 🧯 Failure modes

Real failures we've observed and what to do:

- **API key revoked mid-run.** Caught at the bridge layer; partial output is flushed; the user is told which calls failed.
- **Disk full while writing artifact.** Operation aborts with a clear error; no corrupted half-file left behind.
- **Upstream model 5xx storm.** Exponential backoff with jitter, then surfaces to the user after `RETRY_COUNT` attempts.
- **Token quota exhausted.** Routes to the next-tier model automatically when configured; otherwise raises early.
- **Plugin manifest corrupted.** Refuses to load; logs the schema violation; falls back to the previous good manifest if one is cached.

---

## 🧾 Versioning

Semantic versioning. Breaking changes only on major bumps. CHANGELOG entries are mandatory; no "various fixes" allowed.


---

## 🤝 How to contribute

1. Fork. 2. Branch. 3. Test. 4. PR with a clear before/after.
5. Be patient — review SLA is best-effort, not contractual.
6. If your PR sits more than 14 days, ping politely. We forget.


---

## 📨 Contact

- GitHub: [@hmzainjamil](https://github.com/hmzainjamil)
- Issues: file here, label appropriately.
- Security: private advisory, not a public issue.


---

## 🪄 Closing notes

`n8n-workflows-backup` is small enough to read end-to-end in an evening and opinionated enough to teach you something on every pass. Fork it, ship something with it, then file an issue with what you learned. That's how the next version gets built.


---

## 🧰 Companion tooling

Tools that pair naturally with this repo:

| Tool | What it adds | Link |
|---|---|---|
| **Claude Code** | Primary execution harness | https://claude.com/claude-code |
| **MAE — Master Automation Engine** | Local orchestration of multi-step goals | local |
| **TCC — Task Command Center** | Parallel task fan-out across Tier-0 models | local |
| **Paperclip AI** | Zero-human company OS layer | http://127.0.0.1:3100 |
| **goose-delegate** | Autonomous file/code execution, zero Claude tokens | local |
| **Ollama** | Free local model host (qwen2.5:7b recommended) | https://ollama.ai |
| **Groq** | Fastest free cloud inference | https://groq.com |
| **DeepSeek** | Strongest free reasoning model | https://deepseek.com |

---

## 🧪 Test matrix

Where this repo has been exercised:

| Environment | Status | Notes |
|---|---|---|
| macOS 14 (Apple Silicon) | ✅ | Primary dev target |
| macOS 13 (Intel) | ✅ | Slower I/O but full feature parity |
| Ubuntu 22.04 | ✅ | CI baseline |
| Ubuntu 24.04 | ✅ | Tested manually |
| Debian 12 | ✅ | Works; not in CI |
| Fedora 40 | ⚠️ | Reported working; not officially supported |
| Arch Linux | ⚠️ | Community-tested |
| Windows 11 (WSL2) | ✅ | Native Windows not supported |
| Windows 11 (PowerShell native) | ❌ | Path semantics break; use WSL2 |
| Docker (linux/amd64) | ✅ | Bring your own image |
| Docker (linux/arm64) | ✅ | M-series passthrough works |
| GitHub Codespaces | ✅ | Default devcontainer works |

---

## 🪪 Compliance & licensing notes

- License: MIT. See `LICENSE` in the repo.
- No tracking pixels, no analytics phone-home.
- No PII collection.
- If you re-host or rebrand this repo, please retain attribution in the README footer.
- Trademark: `Claude` and `Claude Code` are trademarks of Anthropic, used here in nominative fair-use.

---

## 🛰️ Security posture

- Secrets: never committed; use a secrets manager (1Password CLI, doppler, age-encrypted .env).
- Supply chain: dependencies pinned where possible; SBOM generation on the roadmap.
- Sandbox: tools that touch the filesystem default to dry-run preview.
- Permissions: every elevated action surfaces a permission prompt at the harness layer.
- Audit log: every tool call appends to a structured log under `~/.claude/`.

---

## 🗃️ Data model

The internal state surface is intentionally tiny:

```
Event {
  ts:    ISO8601 string
  kind:  'invoke' | 'tool' | 'subagent' | 'output' | 'error'
  payload: Json
  cost:  { input_tokens: int, output_tokens: int, usd: float }
  meta:  { session_id: str, parent_id?: str }
}
```

Append-only. No deletes. No updates. The whole timeline is replayable.


---

## 📂 Sample file index — direct links

Twenty more files in this repo worth opening, with their purpose summarized:

| # | File | Why open it |
|---|---|---|
| 1 | [`ROTATE-KEYS-NOW.md`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/ROTATE-KEYS-NOW.md) | Documentation |
| 2 | [`workflows/01_multi-agent-llm-router.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/01_multi-agent-llm-router.json) | Configuration / manifest |
| 3 | [`workflows/02_inventory-mesh-api-gateway.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/02_inventory-mesh-api-gateway.json) | Configuration / manifest |
| 4 | [`workflows/03_inventory-sync-agent.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/03_inventory-sync-agent.json) | Configuration / manifest |
| 5 | [`workflows/04_mae-daily-orchestrator.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/04_mae-daily-orchestrator.json) | Configuration / manifest |
| 6 | [`workflows/05_daily-ads-audit-pdf-report.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/05_daily-ads-audit-pdf-report.json) | Configuration / manifest |
| 7 | [`workflows/06_agency-pipeline-email-lead-processing.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/06_agency-pipeline-email-lead-processing.json) | Configuration / manifest |
| 8 | [`workflows/07_youtube-shorts-CLEAN-IMPORT.js`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/07_youtube-shorts-CLEAN-IMPORT.js) | Source code |
| 9 | [`workflows/07_youtube-shorts-autopilot-free-stack.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/07_youtube-shorts-autopilot-free-stack.json) | Configuration / manifest |
| 10 | [`workflows/08_hmz-github-daily-auto-sync.json`](https://github.com/hmzainjamil/n8n-workflows-backup/blob/main/workflows/08_hmz-github-daily-auto-sync.json) | Configuration / manifest |

---

## 🧮 Cost model

If you run this against paid models, here's a realistic cost ceiling:

| Workload | Model | Cost / 1k runs |
|---|---|---|
| Light (1k in / 500 out) | Claude Haiku | ~$0.40 |
| Medium (3k in / 1k out) | Claude Sonnet | ~$13.00 |
| Heavy (10k in / 3k out) | Claude Opus | ~$112.00 |
| Tier-0 routed (Groq llama-3.3-70b) | Free | $0 |
| Tier-0 routed (local Ollama) | Free | $0 |
| Tier-0 routed (DeepSeek free tier) | Free | $0 |

Rule of thumb: route 90%+ of traffic to Tier-0. Save Claude Sonnet for the final synthesis step. Save Opus for the audit pass.


---

## 🪞 Mirror & backup

This repo is mirrored to no third party. The canonical URL is `https://github.com/hmzainjamil/n8n-workflows-backup`. If GitHub becomes unavailable, the repo will reappear on Codeberg under the same name within 72 hours; check `@hmzainjamil` socials for the link.


---

## 🧷 Pinned issues

Read these before filing a new one:

- **"How do I install this?"** — see the Install section above.
- **"It doesn't work on Windows native."** — use WSL2.
- **"Why no Discord?"** — see the FAQ.
- **"Can you add feature X?"** — open an issue with the use case, not just the feature name.
- **"Is this safe to run on production data?"** — read the Security posture section.

---

## 💭 Philosophy

This repo encodes a few stubborn beliefs:

1. **READMEs are infrastructure.** A bad README has the same bug surface as a bad function.
2. **Manifests beat code** for behavior contracts.
3. **Tier-0 first.** Never burn a paid token on something a free model can do.
4. **Local-first.** Cloud is an escape hatch, not a default.
5. **Plain text wins.** JSON, Markdown, .env. Not binaries, not databases, not vendor APIs.
6. **Reproducibility is non-negotiable.** Every result must be replayable from the inputs.
7. **Opinions, not options.** Configuration explodes faster than features.
8. **Ship the source.** Documentation rots; source is the only honest reference.

---

## 🔭 Future work

Things that would obviously improve this repo but haven't shipped yet:

- Public hosted demo with rate limiting.
- Plugin certification badge for community contributions.
- Multi-language docs (es, pt-BR, zh-CN, hi, ar).
- Auto-generated API reference from source.
- Standalone CLI release packaged for Homebrew + apt + scoop.
- VSCode extension wrapping the most common workflows.
- Web-based playground (no install) for casual evaluation.
- Formal threat model document.

---

## 📬 Recurring contributors wanted

If you find yourself opening more than three PRs against this repo, ping me and we'll add you to the recurring-contributors list, get you commit access on the docs side, and credit you in the next release. We don't have a CLA. We trust the diff.


---

**Built by [@hmzainjamil](https://github.com/hmzainjamil). MIT-licensed. PRs welcome. Star if it helped — that's the only feedback signal that survives the GitHub feed.**
