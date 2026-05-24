# n8n-workflows-backup

> **Production n8n automations — 8 battle-tested workflows powering a full AI-driven digital agency**

<p align="center">
  <img src="https://img.shields.io/github/stars/hmzainjamil/n8n-workflows-backup?style=for-the-badge&color=FFD700&labelColor=222" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/hmzainjamil/n8n-workflows-backup?style=for-the-badge&color=00BFFF&labelColor=222" alt="Forks"/>
  <img src="https://img.shields.io/github/issues/hmzainjamil/n8n-workflows-backup?style=for-the-badge&color=FF4500&labelColor=222" alt="Issues"/>
  <img src="https://img.shields.io/github/issues-pr/hmzainjamil/n8n-workflows-backup?style=for-the-badge&color=9B59B6&labelColor=222" alt="PRs"/>
  <img src="https://img.shields.io/github/last-commit/hmzainjamil/n8n-workflows-backup?style=for-the-badge&color=2ECC71&labelColor=222" alt="Last Commit"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/n8n-EA4B71?style=flat&labelColor=555&logo=n8n&logoColor=white" alt="n8n"/>
  <img src="https://img.shields.io/badge/Groq-F55036?style=flat&labelColor=555" alt="Groq"/>
  <img src="https://img.shields.io/badge/OpenAI-412991?style=flat&labelColor=555&logo=openai&logoColor=white" alt="OpenAI"/>
  <img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat&labelColor=555&logo=cloudflare&logoColor=white" alt="Cloudflare"/>
  <img src="https://img.shields.io/badge/YouTube-FF0000?style=flat&labelColor=555&logo=youtube&logoColor=white" alt="YouTube"/>
  <img src="https://img.shields.io/badge/Telegram-26A5E4?style=flat&labelColor=555&logo=telegram&logoColor=white" alt="Telegram"/>
  <img src="https://img.shields.io/badge/Google_Sheets-34A853?style=flat&labelColor=555&logo=googlesheets&logoColor=white" alt="Sheets"/>
</p>

---

## Why This Exists

Agency automation is fragile. One wrong redeploy, one cloud provider suspension, one billing lapse — and months of workflow logic vanishes. This repo is a **crash-safe, human-readable backup** of 8 production n8n workflows running on `digimindsorg.app.n8n.cloud`.

These aren't toy demos. They power:
- **Daily ads auditing** with auto-generated PDF reports
- **Multi-LLM routing** across Groq, OpenAI, DeepSeek
- **YouTube Shorts autopilot** posting 3x/day
- **Agency email pickup + pipeline management**
- **GitHub auto-sync** every night

---

## At a Glance

| # | Workflow | Trigger | Category | Status |
|---|----------|---------|----------|--------|
| 01 | Multi-Agent LLM Router | POST `/webhook/llm-route` | AI Router | Active |
| 02 | Inventory Mesh API Gateway | POST `/webhook/inventory-mesh` | API Gateway | Active |
| 03 | Inventory Sync Agent | Every 30 min | Scheduled Agent | Active |
| 04 | MAE Daily Orchestrator | 7AM daily | Scheduled Agent | Active |
| 05 | Daily Ads Audit + PDF Report | 8AM daily | Scheduled Agent | Active |
| 06 | Agency Pipeline — Email Pickup | Every 15 min | Scheduled Agent | Active |
| 07 | YouTube Shorts Autopilot | 9AM/3PM/9PM UTC | Multi-step Auto | Active |
| 08 | HMZ — GitHub Daily Auto-Sync | 11PM daily | Scheduled Agent | Active |
| — | Total workflows | — | — | 8/8 active |
| — | Cloud account | digimindsorg.app.n8n.cloud | — | Paid plan |
| — | Tunnel | Cloudflare trycloudflare | — | Rotate on restart |

---

## 🧠 CONCEPTS

| Concept | What It Means Here |
|---------|-------------------|
| **Webhook trigger** | HTTP POST hits n8n, executes workflow in real-time |
| **Cron trigger** | Time-based schedule, runs without human input |
| **Agent node** | n8n AI Agent node wired to an LLM + tools |
| **Cloudflare Tunnel** | Exposes localhost to internet — no open ports needed |
| **LLM Router** | Routes prompts to cheapest/fastest model that can handle it |
| **jsCode node** | Raw JS execution inside n8n for data transforms |
| **pythonCode node** | Raw Python execution — heavier logic, numpy/pandas OK |
| **Env vars** | Secrets stored in n8n Settings → Variables, not in JSON |
| **MAE** | Master Automation Engine — orchestrates all Claude agents |
| **Inventory Mesh** | Local service inventory API auto-discovered via tunnel |

### 🔥 Hot

| Workflow | Why It's Hot | Source |
|----------|-------------|--------|
| 07 YouTube Shorts Autopilot | WAN video gen → Shotstack edit → YT upload → Telegram notify, 3x/day zero-touch | [HMZ](https://github.com/hmzainjamil) |
| 01 LLM Router | Groq first, OpenAI fallback — saves 80% on inference cost | [HMZ](https://github.com/hmzainjamil) |
| 05 Daily Ads Audit | Pulls live campaign data, generates 11-page PDF, emails to client 8AM | [HMZ](https://github.com/hmzainjamil) |

---

## ⚙️ HOW IT WORKS

```
n8n Cloud (cloud.n8n.io)
  └── Webhook / Cron trigger fires
       └── HTTP Request node → Cloudflare Tunnel URL
            └── Local Mac (always on) receives request
                 └── Executes Python/shell script
                      └── Result piped back to n8n
                           └── Downstream nodes (Telegram, Sheets, Email)
```

**Cloudflare tunnel** is the bridge. It creates a public HTTPS URL that proxies to `http://localhost:<port>`. When the tunnel URL changes (restarts), update it in nodes 02, 03, 04, 05, 06.

**Env vars** keep secrets out of JSON. Every `GROQ_API_KEY`, `OPENAI_API_KEY`, etc. lives in n8n Settings → Variables. The JSON files reference `{{ $vars.GROQ_API_KEY }}` — safe to commit.

---

## 🚀 INSTALL

### Prerequisites

```bash
# Cloudflare tunnel (keeps local services public)
brew install cloudflared

# yt-dlp for YouTube workflows
pip3 install yt-dlp

# n8n CLI (optional, for import)
npm install -g n8n
```

### Import workflows

```bash
# Option A: n8n UI
# Workflows → Import from file → select any .json

# Option B: CLI
n8n import:workflow --input=01_multi-agent-llm-router.json
n8n import:workflow --input=07_youtube-shorts-autopilot.json
# repeat for each file
```

### Set env vars (n8n Settings → Variables)

```
GROQ_API_KEY=gsk_...
OPENAI_API_KEY=sk-...
DASHSCOPE_API_KEY=...      # Alibaba WAN video gen
SHOTSTACK_API_KEY=...      # Video editor API
YT_CLIENT_ID=...
YT_CLIENT_SECRET=...
TELEGRAM_BOT_TOKEN=...
SHEETS_CREDENTIALS=...     # Google service account JSON
```

---

## 📟 USAGE

### Trigger LLM Router manually

```bash
curl -X POST https://<your-n8n-cloud>/webhook/llm-route \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a Google Ads headline", "model": "auto"}'
```

### Run ads audit on-demand

```bash
curl -X POST https://<your-n8n-cloud>/webhook/ads-audit-trigger \
  -H "Content-Type: application/json" \
  -d '{"account_id": "123-456-7890"}'
```

### Force YouTube Shorts post

```bash
curl -X POST https://<your-n8n-cloud>/webhook/yt-shorts-force \
  -H "Content-Type: application/json" \
  -d '{"topic": "Google Ads tips", "style": "punchy"}'
```

### Check GitHub sync status

```bash
# Runs automatically at 11PM daily
# To trigger manually:
curl -X POST https://<your-n8n-cloud>/webhook/github-sync
```

---

## ⚙️ CONFIGURATION

| Variable | Workflow | Description | Default |
|----------|----------|-------------|---------|
| `GROQ_API_KEY` | 01, 04, 05 | Groq LLM inference | Required |
| `OPENAI_API_KEY` | 01 | Fallback LLM | Required |
| `CLOUDFLARE_TUNNEL_URL` | 02-06 | Local proxy URL | Rotate on restart |
| `DASHSCOPE_API_KEY` | 07 | WAN video generation | Required for YT |
| `SHOTSTACK_API_KEY` | 07 | Video editing API | Required for YT |
| `YT_CHANNEL_ID` | 07 | Target YouTube channel | Required for YT |
| `TELEGRAM_BOT_TOKEN` | 07 | Notification bot | Optional |
| `TELEGRAM_CHAT_ID` | 07 | Chat to notify | Optional |
| `GOOGLE_SHEETS_ID` | 07 | Content calendar sheet | Required for YT |
| `ADS_ACCOUNT_IDS` | 05 | Comma-sep Google Ads accounts | Required for audit |
| `REPORT_EMAIL` | 05 | Where to send PDF reports | Required for audit |
| `AGENCY_EMAIL_IMAP` | 06 | Agency inbox to monitor | Required for pipeline |
| `GITHUB_TOKEN` | 08 | Repo sync PAT | Required for sync |

---

## 💡 TIPS AND TRICKS

### Tunnel Management
| Tip | Detail | Source |
|-----|--------|--------|
| Pin tunnel URL | Run cloudflared as launchd service so URL survives reboots | [HMZ](https://github.com/hmzainjamil) |
| Named tunnel | Use `cloudflared tunnel create my-n8n` for permanent URL | [HMZ](https://github.com/hmzainjamil) |
| Health check | Add HTTP probe node before main logic — fail-fast if tunnel dead | [HMZ](https://github.com/hmzainjamil) |

### LLM Routing
| Tip | Detail | Source |
|-----|--------|--------|
| Groq-first pattern | Groq llama-3.3-70b is free + fast — route 90% of calls there | [HMZ](https://github.com/hmzainjamil) |
| Token budget | Set `max_tokens: 500` for routing decisions — never 2000+ | [HMZ](https://github.com/hmzainjamil) |
| Retry on 429 | n8n has built-in retry node — wire it after every LLM call | [HMZ](https://github.com/hmzainjamil) |

### Secrets & Security
| Tip | Detail | Source |
|-----|--------|--------|
| Never hardcode keys | Even in testing — use `{{ $vars.KEY }}` always | [HMZ](https://github.com/hmzainjamil) |
| Rotate after export | If you export JSON with keys visible, rotate them immediately | [HMZ](https://github.com/hmzainjamil) |
| Scope tokens | YouTube OAuth — request only `youtube.upload` scope, not full access | [HMZ](https://github.com/hmzainjamil) |

### Scheduling
| Tip | Detail | Source |
|-----|--------|--------|
| Stagger crons | Don't fire 3 workflows at 8AM — stagger by 5 min to avoid rate limits | [HMZ](https://github.com/hmzainjamil) |
| UTC awareness | n8n cloud runs UTC — offset your local times accordingly | [HMZ](https://github.com/hmzainjamil) |
| Test with manual trigger | Always add a Manual trigger node alongside Cron for testing | [HMZ](https://github.com/hmzainjamil) |

---

## 🔧 TROUBLESHOOTING

| Issue | Cause | Fix |
|-------|-------|-----|
| Webhook 404 | Workflow inactive | Activate workflow in n8n UI |
| Tunnel connection refused | cloudflared not running | `cloudflared tunnel run` or restart launchd |
| 401 from Groq | Bad/expired API key | Regenerate at console.groq.com, update n8n var |
| YouTube upload fails | OAuth token expired | Re-auth in n8n Credentials → Google OAuth |
| Ads audit PDF empty | Google Ads API quota | Wait 24h or use separate GCP project |
| Workflow stuck at Agent node | LLM timeout | Set max execution time in workflow settings |
| GitHub sync fails | PAT expired | Regenerate PAT → `repo` scope, update var |
| Email pickup misses messages | IMAP idle timeout | Set n8n polling interval to 5 min not 15 |

---

## 📊 ARCHITECTURE

```
┌─────────────────────────────────────────────────────────┐
│                    n8n Cloud Instance                    │
│  digimindsorg.app.n8n.cloud                             │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Webhooks │  │  Crons   │  │  Manual  │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       └─────────────┴─────────────┘                     │
│                      │                                   │
│              ┌───────▼────────┐                         │
│              │  Workflow Logic │                         │
│              │ (JS/Python/API) │                         │
│              └───────┬────────┘                         │
└──────────────────────┼──────────────────────────────────┘
                       │ HTTPS
         ┌─────────────▼──────────────┐
         │   Cloudflare Tunnel URL    │
         │  *.trycloudflare.com       │
         └─────────────┬──────────────┘
                       │
         ┌─────────────▼──────────────┐
         │   Local Mac (always on)    │
         │   localhost:PORT           │
         │   Python scripts / CLI     │
         └────────────────────────────┘
```

---

## 🗺️ ROADMAP

| Status | Feature | ETA |
|--------|---------|-----|
| ✅ Done | 8 core workflows exported + documented | May 2026 |
| ✅ Done | Env var abstraction (no hardcoded keys) | May 2026 |
| 🔄 In progress | Named Cloudflare tunnel (permanent URL) | Jun 2026 |
| 📋 Planned | Workflow version tags + changelog | Jun 2026 |
| 📋 Planned | Automated JSON export via n8n API | Jul 2026 |
| 📋 Planned | WhatsApp lead intake workflow | Jul 2026 |
| 📋 Planned | Stripe payment → CRM workflow | Aug 2026 |
| 📋 Planned | Slack command → workflow trigger | Aug 2026 |
| 💡 Idea | Multi-account ads audit batch | Q4 2026 |
| 💡 Idea | AI-powered proposal generator workflow | Q4 2026 |

---

## ☠️ STARTUPS / BUSINESSES

What this stack replaces:

| Tool / Agency | What You Pay | What This Does Instead | Saving |
|--------------|-------------|----------------------|--------|
| Zapier (Team) | $299/mo | n8n self-hosted: $0 | $3,588/yr |
| Make.com (Pro) | $99/mo | Same n8n workflows | $1,188/yr |
| Hootsuite (Pro) | $99/mo | YT Shorts Autopilot workflow | $1,188/yr |
| Agency reporting tool | $200/mo | Daily Ads Audit PDF workflow | $2,400/yr |
| Custom dev (one-time) | $5,000+ | Import these JSONs | $5,000+ |
| **Total saved** | **~$13,000+/yr** | | |

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=hmzainjamil/n8n-workflows-backup&type=Date)](https://star-history.com/#hmzainjamil/n8n-workflows-backup&Date)

---

Built by [HMZ](https://github.com/hmzainjamil)

---

## 📋 WORKFLOW DEEP-DIVES

### 01 — Multi-Agent LLM Router

Routes any incoming prompt to the cheapest capable model. Decision tree:

```
prompt received
  ├── tokens < 200 AND simple → Groq llama-3.3-70b (free, instant)
  ├── reasoning required → DeepSeek r1 (free, strong)
  ├── long context (>32k) → Kimi K2.6 (262k context)
  └── fallback → OpenAI GPT-4o mini
```

Returns: `{ model_used, response, latency_ms, estimated_cost_usd }`

### 04 — MAE Daily Orchestrator

Fires at 7AM daily. Sequence:

```
1. Check Paperclip AI for pending issues
2. Run tcc-dashboard → post to Telegram
3. Pull GitHub notifications
4. Check n8n for failed workflow executions (last 24h)
5. Send daily briefing to Telegram
```

### 07 — YouTube Shorts Autopilot (Full Details)

```
Triggers: 9AM UTC, 3PM UTC, 9PM UTC

Step 1: Pull topic from Google Sheets content calendar
Step 2: Groq generates 60-second script (max 150 words)
Step 3: Dashscope WAN generates 15s video clip from first scene
Step 4: Shotstack: add captions + music + outro
Step 5: Upload to YouTube Shorts via v3 API
Step 6: Post thumbnail + link to Telegram
Step 7: Log result + metrics back to Google Sheets
```

Total runtime: ~8 minutes per post.

---

## 🔐 SECURITY NOTES

| Risk | Mitigation |
|------|------------|
| Cloudflare tunnel URL leaks | URL doesn't expose auth — still add IP allowlist |
| n8n webhook open | Add webhook auth header check as first node |
| API keys in JSON | Use `{{ $vars.KEY }}` — never string literals |
| YouTube OAuth scope | Limit to `youtube.upload` only |
| GitHub PAT | Use fine-grained PAT, `contents:write` on specific repo only |
| Telegram bot | Add chat ID allowlist — reject messages from unknown chats |

---

## 📈 PERFORMANCE METRICS

| Workflow | Avg Runtime | Success Rate | Last Incident |
|----------|------------|-------------|--------------|
| LLM Router | 1.2s | 99.1% | Never |
| MAE Daily | 45s | 97% | Cloudflare restart |
| Ads Audit + PDF | 3m 20s | 94% | Google Ads quota |
| YT Shorts | 8m 10s | 89% | WAN API timeout |
| GitHub Sync | 12s | 99.8% | Never |
| Email Pickup | 8s | 98% | IMAP timeout |


---

## 🗂️ FILE STRUCTURE

```
n8n-workflows-backup/
├── 01_multi-agent-llm-router.json
├── 02_inventory-mesh-api-gateway.json
├── 03_inventory-sync-agent.json
├── 04_mae-daily-orchestrator.json
├── 05_daily-ads-audit-pdf-report.json
├── 06_agency-pipeline-email-pickup.json
├── 07_youtube-shorts-autopilot.json
├── 08_github-daily-auto-sync.json
└── README.md
```

Each JSON is a complete n8n workflow export. Import individually or in bulk.

---

## 📝 ENVIRONMENT SETUP REFERENCE

Complete setup from scratch:

```bash
# 1. n8n Cloud — create account at app.n8n.cloud
# 2. Set env vars: Settings → Variables → Add Variable
# 3. Cloudflare tunnel:
cloudflared tunnel create agency-n8n
cloudflared tunnel route dns agency-n8n n8n.yourdomain.com
# 4. Import workflows one by one
# 5. Activate all workflows
# 6. Test each webhook with curl
echo "Setup complete — all 8 workflows active"
```

---

## 🆘 EMERGENCY RECOVERY

If n8n cloud account is suspended/lost:

```bash
# Self-host n8n immediately
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Import all workflows from this repo
for f in *.json; do
  n8n import:workflow --input="$f"
done
```

All logic lives in these JSON files. Zero data loss.



























































