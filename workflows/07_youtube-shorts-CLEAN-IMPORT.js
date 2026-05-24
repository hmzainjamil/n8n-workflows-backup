// CLEAN VERSION — all hardcoded keys replaced with $env vars
// Validated: 21 nodes, valid SDK ✓
// To import: n8n UI → Workflows → Import OR use n8n MCP update_workflow when cloud is back
// workflowId: VfwJVsxihSgOqxoZ

import { workflow, node, trigger } from '@n8n/workflow-sdk';

const sched9am = trigger({
  type: 'n8n-nodes-base.scheduleTrigger',
  version: 1.3,
  config: { name: 'Schedule 9am UTC', parameters: { rule: { interval: [{ field: 'cronExpression', expression: '0 9 * * *' }] } }, position: [0, 0] },
  output: [{}]
});

const sched3pm = trigger({
  type: 'n8n-nodes-base.scheduleTrigger',
  version: 1.3,
  config: { name: 'Schedule 3pm UTC', parameters: { rule: { interval: [{ field: 'cronExpression', expression: '0 15 * * *' }] } }, position: [0, 192] },
  output: [{}]
});

const sched9pm = trigger({
  type: 'n8n-nodes-base.scheduleTrigger',
  version: 1.3,
  config: { name: 'Schedule 9pm UTC', parameters: { rule: { interval: [{ field: 'cronExpression', expression: '0 21 * * *' }] } }, position: [0, 384] },
  output: [{}]
});

const fetchTrends = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Fetch Google Trends RSS', parameters: { method: 'GET', url: 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=US', options: { timeout: 30000 } }, position: [224, 192] },
  output: [{ data: '<rss/>' }]
});

const parseTopic = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Parse Trending Topic', parameters: { jsCode: "const xml=$input.first().json.data||'';const m=xml.match(/<title><!\\[CDATA\\[([^\\]]+)\\]\\]><\\/title>/g)||xml.match(/<title>([^<]+)<\\/title>/g)||[];const topics=m.map(t=>t.replace(/<title>|<\\/title>|<!\\[CDATA\\[|\\]\\]>/g,'').trim()).filter(t=>t.length>3&&!t.includes('Google Trends'));const topic=topics[Math.floor(Math.random()*Math.min(topics.length||1,5))]||'AI tools and technology 2024';return[{json:{topic}}];" }, position: [448, 192] },
  output: [{ topic: 'AI tools' }]
});

const generateScript = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Generate Script via Groq',
    parameters: {
      method: 'POST',
      url: 'https://api.groq.com/openai/v1/chat/completions',
      sendHeaders: true,
      headerParameters: { parameters: [
        { name: 'Authorization', value: "={{ 'Bearer ' + $env.GROQ_API_KEY }}" },
        { name: 'Content-Type', value: 'application/json' }
      ]},
      sendBody: true,
      contentType: 'raw',
      body: "={{ JSON.stringify({model:'llama3-70b-8192',messages:[{role:'system',content:'Respond ONLY with valid JSON no markdown. Fields: title(max 60 chars), description(max 280 chars), narration(65-80 words punchy TTS), hashtags(array 5 strings with #)'},{role:'user',content:'YouTube Shorts script about: '+$('Parse Trending Topic').first().json.topic}],temperature:0.8,max_tokens:500}) }}"
    },
    position: [672, 192]
  },
  output: [{ choices: [{ message: { content: '{}' } }] }]
});

const parseScript = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Parse Script JSON', parameters: { jsCode: "const raw=$input.first().json.choices[0].message.content;const cleaned=raw.trim().replace(/^```json\\n?|^```\\n?|```$/g,'').trim();const s=JSON.parse(cleaned);return[{json:{title:(s.title||'AI Today').substring(0,60),description:s.description||'Trending AI tools.',narration:s.narration||'AI is changing everything.',hashtags:Array.isArray(s.hashtags)?s.hashtags.join(' '):String(s.hashtags||'#AI #Tech #Shorts')}}];" }, position: [896, 192] },
  output: [{}]
});

const buildMeta = node({
  type: 'n8n-nodes-base.set',
  version: 3.4,
  config: { name: 'Build Metadata', parameters: { assignments: { assignments: [
    { id: 'title', name: 'title', value: "={{ $('Parse Script JSON').first().json.title }}", type: 'string' },
    { id: 'description', name: 'description', value: "={{ $('Parse Script JSON').first().json.description + '\\n\\n' + $('Parse Script JSON').first().json.hashtags }}", type: 'string' },
    { id: 'tts_url', name: 'tts_url', value: "={{ 'https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=' + encodeURIComponent($('Parse Script JSON').first().json.narration) }}", type: 'string' },
    { id: 'image_prompt', name: 'image_prompt', value: "={{ 'Cinematic vertical 9:16 YouTube Shorts thumbnail, vibrant neon colors, modern tech aesthetic, bold typography at bottom: ' + $('Parse Script JSON').first().json.title }}", type: 'string' }
  ]}}, position: [1120, 192] },
  output: [{}]
});

const submitImage = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Submit Dashscope Image', parameters: {
    method: 'POST',
    url: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis',
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'Authorization', value: "={{ 'Bearer ' + $env.WAN_API_KEY }}" },
      { name: 'Content-Type', value: 'application/json' },
      { name: 'X-DashScope-Async', value: 'enable' }
    ]},
    sendBody: true,
    contentType: 'raw',
    body: "={{ JSON.stringify({model:'wanx2.1-t2i-turbo',input:{prompt:$('Build Metadata').first().json.image_prompt},parameters:{size:'720*1280',n:1}}) }}"
  }, position: [1344, 192] },
  output: [{}]
});

const wait20 = node({
  type: 'n8n-nodes-base.wait',
  version: 1.1,
  config: { name: 'Wait 20s Image Gen', parameters: { resume: 'timeInterval', unit: 'seconds', value: 20 }, position: [1568, 192] },
  output: [{}]
});

const pollImage = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Poll Dashscope Image', parameters: {
    method: 'GET',
    url: "={{ 'https://dashscope.aliyuncs.com/api/v1/tasks/' + $('Submit Dashscope Image').first().json.output.task_id }}",
    sendHeaders: true,
    headerParameters: { parameters: [{ name: 'Authorization', value: "={{ 'Bearer ' + $env.WAN_API_KEY }}" }]}
  }, position: [1792, 192] },
  output: [{}]
});

const buildShotstack = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Build Shotstack Payload', parameters: { jsCode: "const imageUrl=$('Poll Dashscope Image').first().json.output.results[0].url;const ttsUrl=$('Build Metadata').first().json.tts_url;const titleText=$('Build Metadata').first().json.title.substring(0,50);return[{json:{timeline:{background:'#000000',tracks:[{clips:[{asset:{type:'image',src:imageUrl},start:0,length:30,fit:'cover'}]},{clips:[{asset:{type:'audio',src:ttsUrl,trim:0,volume:1},start:0,length:30}]},{clips:[{asset:{type:'title',text:titleText,style:'future',color:'#ffffff',size:'medium',background:'#000000',position:'bottom',offset:{x:0,y:0.15}},start:0,length:6}]}]},output:{format:'mp4',size:{width:720,height:1280},fps:30,quality:'high'}}}];" }, position: [2016, 192] },
  output: [{}]
});

const submitRender = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Submit Shotstack Render', parameters: {
    method: 'POST',
    url: 'https://api.shotstack.io/stage/render',
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'x-api-key', value: "={{ $env.SHOTSTACK_API_KEY }}" },
      { name: 'Content-Type', value: 'application/json' }
    ]},
    sendBody: true,
    contentType: 'raw',
    body: '={{ JSON.stringify($json) }}'
  }, position: [2240, 192] },
  output: [{}]
});

const wait50 = node({
  type: 'n8n-nodes-base.wait',
  version: 1.1,
  config: { name: 'Wait 50s Render', parameters: { resume: 'timeInterval', unit: 'seconds', value: 50 }, position: [2464, 192] },
  output: [{}]
});

const pollRender = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Poll Shotstack Status', parameters: {
    method: 'GET',
    url: "={{ 'https://api.shotstack.io/stage/render/' + $('Submit Shotstack Render').first().json.response.id }}",
    sendHeaders: true,
    headerParameters: { parameters: [{ name: 'x-api-key', value: "={{ $env.SHOTSTACK_API_KEY }}" }]}
  }, position: [2688, 192] },
  output: [{}]
});

const ytInit = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'YouTube Init Upload', parameters: {
    method: 'POST',
    url: 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status',
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'Authorization', value: "={{ 'Bearer ' + $env.YOUTUBE_OAUTH_TOKEN }}" },
      { name: 'Content-Type', value: 'application/json' },
      { name: 'X-Upload-Content-Type', value: 'video/mp4' }
    ]},
    sendBody: true,
    contentType: 'raw',
    body: "={{ JSON.stringify({snippet:{title:$('Build Metadata').first().json.title,description:$('Build Metadata').first().json.description,categoryId:'28',tags:['AI','Technology','Shorts']},status:{privacyStatus:'public',selfDeclaredMadeForKids:false}}) }}",
    options: { response: { response: { fullResponse: true, responseFormat: 'json' } } }
  }, position: [2912, 192] },
  output: [{}]
});

const extractUrl = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Extract Upload URL', parameters: { jsCode: "const r=$input.first().json;const loc=(r.headers&&(r.headers.location||r.headers.Location))||'';return[{json:{upload_url:loc}}];" }, position: [3136, 192] },
  output: [{}]
});

const downloadVideo = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Download Rendered Video', parameters: {
    method: 'GET',
    url: "={{ $('Poll Shotstack Status').first().json.response.url }}",
    options: { response: { response: { responseFormat: 'file', outputPropertyName: 'data' } } }
  }, position: [3360, 192] },
  output: [{}]
});

const uploadYT = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Upload to YouTube', parameters: {
    method: 'PUT',
    url: "={{ $('Extract Upload URL').first().json.upload_url }}",
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'Authorization', value: "={{ 'Bearer ' + $env.YOUTUBE_OAUTH_TOKEN }}" },
      { name: 'Content-Type', value: 'video/mp4' }
    ]},
    sendBody: true,
    contentType: 'binaryData',
    inputDataFieldName: 'data'
  }, position: [3584, 192] },
  output: [{}]
});

const logSheets = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Log to Google Sheets', parameters: {
    method: 'POST',
    url: "={{ 'https://sheets.googleapis.com/v4/spreadsheets/' + $env.GOOGLE_SHEET_ID + '/values/Sheet1!A:G:append?valueInputOption=USER_ENTERED' }}",
    sendHeaders: true,
    headerParameters: { parameters: [
      { name: 'Authorization', value: "={{ 'Bearer ' + $env.GOOGLE_OAUTH_TOKEN }}" },
      { name: 'Content-Type', value: 'application/json' }
    ]},
    sendBody: true,
    contentType: 'raw',
    body: "={{ JSON.stringify({values:[[new Date().toISOString(),$('Build Metadata').first().json.title,'https://youtu.be/'+$('Upload to YouTube').first().json.id,$('Poll Shotstack Status').first().json.response.url,'published','free-stack']]}) }}"
  }, position: [3808, 192] },
  output: [{}]
});

const telegramNotify = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: { name: 'Telegram Notify', parameters: {
    method: 'POST',
    url: "={{ 'https://api.telegram.org/bot' + $env.TELEGRAM_BOT_TOKEN + '/sendMessage' }}",
    sendBody: true,
    contentType: 'raw',
    body: "={{ JSON.stringify({chat_id:$env.TELEGRAM_CHAT_ID,text:'YouTube Short Published!\\n\\n'+$('Build Metadata').first().json.title+'\\nhttps://youtu.be/'+$('Upload to YouTube').first().json.id+'\\n'+new Date().toISOString()}) }}"
  }, position: [4032, 192] },
  output: [{}]
});

export default workflow('VfwJVsxihSgOqxoZ', 'YouTube Shorts Autopilot — Free Stack')
  .add(sched9am).to(fetchTrends)
  .add(sched3pm).to(fetchTrends)
  .add(sched9pm).to(fetchTrends)
  .add(fetchTrends)
  .to(parseTopic)
  .to(generateScript)
  .to(parseScript)
  .to(buildMeta)
  .to(submitImage)
  .to(wait20)
  .to(pollImage)
  .to(buildShotstack)
  .to(submitRender)
  .to(wait50)
  .to(pollRender)
  .to(ytInit)
  .to(extractUrl)
  .to(downloadVideo)
  .to(uploadYT)
  .to(logSheets)
  .to(telegramNotify);
