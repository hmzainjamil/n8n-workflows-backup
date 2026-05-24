# n8n Cloud Backup — digimindsorg.app.n8n.cloud
Exported: 2026-05-24 | Account: info@digiminds.org | Project: personal

## Workflows (8 total, all active)

| # | Name | Trigger | Type | Key Env Vars |
|---|------|---------|------|--------------|
| 01 | Multi-Agent LLM Router | POST /webhook/llm-route | Agent/Router | GROQ_API_KEY, OPENAI_API_KEY |
| 02 | Inventory Mesh API Gateway | POST /webhook/inventory-mesh | API Gateway | — (Cloudflare tunnel) |
| 03 | Inventory Sync Agent | Every 30min | Scheduled Agent | — |
| 04 | MAE Daily Orchestrator | 7AM daily (cron 0 7 * * *) | Scheduled Agent | — |
| 05 | Daily Ads Audit + PDF Report | 8AM daily (cron 0 8 * * *) | Scheduled Agent | — |
| 06 | Agency Pipeline — Email Pickup | Every 15min | Scheduled Agent | — |
| 07 | YouTube Shorts Autopilot | 9AM/3PM/9PM UTC | Automation | GROQ, WAN, SHOTSTACK, YT, SHEETS, TELEGRAM |
| 08 | HMZ — GitHub Daily Auto-Sync | 11PM daily | Scheduled Agent | — |

## Cloudflare Tunnel
All local-exec workflows proxy through: `https://opposed-sheep-advances-mesh.trycloudflare.com`
**Update this URL when tunnel restarts.**

## Actions Mapping (what each workflow triggers locally)
| action | script |
|--------|--------|
| refresh | inventory-scan.py |
| mae-daily | mae daily + tcc-dashboard |
| ads-audit | /Users/mc/.claude/bin/daily-ads-audit.py |
| agency-run | /Users/mc/.claude/bin/agency-run |
| register | inventory mesh register |

## Key Code Snippets
See individual JSON files — all `jsCode`/`pythonCode` blocks preserved verbatim.

## Re-import to n8n
1. n8n UI → Workflows → Import from file
2. OR use n8n CLI: `n8n import:workflow --input=<file>.json`
3. Update Cloudflare tunnel URL in nodes 02/03/04/05/06
4. Set env vars in n8n Settings → Variables

## ⚠️ Security Note
`07_youtube-shorts-autopilot` old version had hardcoded API keys (Groq, Dashscope, Shotstack). Active version uses env vars. Keys documented in file for reference — rotate if exposed.
