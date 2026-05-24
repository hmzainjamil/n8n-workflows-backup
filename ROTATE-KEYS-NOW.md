# Key Rotation Checklist — URGENT
Exposed in n8n workflow 07 old version history. Rotate all 3.

## 1. Groq — gsk_OhzRrlOV2...
- URL: https://console.groq.com/keys
- Action: Delete old key → Create new → Set in n8n as GROQ_API_KEY env var

## 2. Dashscope (Alibaba WAN) — sk-40238e5d...
- URL: https://dashscope.console.aliyun.com/apiKey
- Action: Delete old key → Create new → Set in n8n as WAN_API_KEY env var

## 3. Shotstack Stage — bd18lTNU...
- URL: https://dashboard.shotstack.io/account/api-keys
- Action: Regenerate stage key → Set in n8n as SHOTSTACK_API_KEY env var

## n8n Env Vars to Set (Settings → Variables)
| Key | Value |
|-----|-------|
| GROQ_API_KEY | new key |
| WAN_API_KEY | new dashscope key |
| SHOTSTACK_API_KEY | new shotstack key |
| YOUTUBE_OAUTH_TOKEN | existing |
| GOOGLE_SHEET_ID | existing |
| GOOGLE_OAUTH_TOKEN | existing |
| TELEGRAM_BOT_TOKEN | existing |
| TELEGRAM_CHAT_ID | existing |

## After rotation: push clean workflow
When n8n cloud is reachable, use Claude Code MCP:
update_workflow(workflowId='VfwJVsxihSgOqxoZ', code=<07_youtube-shorts-CLEAN-IMPORT.js>)
