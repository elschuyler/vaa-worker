const PASSWORD = "QaXg7yuDnh";
const GITHUB_CLIENT_ID = "Ov23liSH2RXEUIiuqlKS";

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Vaa</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{--bg:#0d0d0d;--bg2:#161616;--bg3:#1e1e1e;--bg4:#252525;--border:#2a2a2a;--border2:#333;--text:#e8e8e8;--text2:#999;--text3:#555;--accent:#c96442;--accent2:#a0522d;--blue:#3a7bd5;--green:#2d9e6b;--red:#c94242;--radius:12px;--radius-sm:8px;}
body{background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:100vh;display:flex;flex-direction:column;overflow:hidden}
.gate{position:fixed;inset:0;background:var(--bg);z-index:500;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px}
.gate-card{background:var(--bg2);border:0.5px solid var(--border);border-radius:var(--radius);padding:28px 24px;width:100%;max-width:320px}
.gate-logo{font-size:32px;font-weight:700;color:var(--accent);margin-bottom:4px;letter-spacing:-0.5px}
.gate-sub{font-size:13px;color:var(--text3);margin-bottom:24px}
.gate-label{font-size:12px;color:var(--text2);margin-bottom:6px;font-weight:500}
.gate-input{width:100%;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:11px 13px;color:var(--text);font-size:15px;outline:none;margin-bottom:6px;font-family:inherit;letter-spacing:1px}
.gate-input:focus{border-color:var(--accent)}
.gate-err{font-size:12px;color:var(--red);min-height:18px;margin-bottom:10px}
.gate-btn{width:100%;padding:12px;border-radius:var(--radius-sm);background:var(--accent);border:none;color:#fff;font-size:15px;font-weight:500;cursor:pointer}
.onboard-overlay{position:fixed;inset:0;background:var(--bg);z-index:400;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px}
.onboard-card{background:var(--bg2);border:0.5px solid var(--border);border-radius:var(--radius);padding:24px;width:100%;max-width:340px}
.onboard-logo{font-size:28px;font-weight:700;color:var(--accent);margin-bottom:4px;letter-spacing:-0.5px}
.onboard-sub{font-size:13px;color:var(--text3);margin-bottom:20px}
.onboard-label{font-size:12px;color:var(--text2);margin-bottom:6px;font-weight:500}
.onboard-input{width:100%;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:10px 12px;color:var(--text);font-size:14px;outline:none;margin-bottom:14px;font-family:inherit}
.onboard-input::placeholder{color:var(--text3)}
.step-dots{display:flex;gap:6px;margin-bottom:20px}
.step-dot{width:6px;height:6px;border-radius:50%;background:var(--border2);transition:all 0.2s}
.step-dot.active{background:var(--accent);width:18px;border-radius:3px}
.identity-list{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
.identity-option{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--radius-sm);border:0.5px solid var(--border);background:var(--bg3);cursor:pointer;transition:all 0.15s}
.identity-option.selected{border-color:var(--accent);background:var(--bg4)}
.io-avatar{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0}
.av-you{background:#2d3a5e;color:#7da4f0}.av-a{background:#3a2d1e;color:#f0a050}.av-b{background:#1e3a2d;color:#50f0a0}
.io-info{flex:1}.io-name{font-size:14px;font-weight:500}.io-desc{font-size:11px;color:var(--text3)}
.io-check{width:18px;height:18px;border-radius:50%;border:1.5px solid var(--border2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px}
.identity-option.selected .io-check{background:var(--accent);border-color:var(--accent);color:#fff}
.onboard-btn{width:100%;padding:12px;border-radius:var(--radius-sm);background:var(--accent);border:none;color:#fff;font-size:15px;font-weight:500;cursor:pointer}
.onboard-btn:disabled{background:var(--bg4);color:var(--text3);cursor:not-allowed}
.cancel-btn{background:none;border:0.5px solid var(--border2);border-radius:var(--radius-sm);color:var(--text2);padding:10px 14px;font-size:14px;cursor:pointer}
.device-flow-box{background:var(--bg3);border:0.5px solid var(--border);border-radius:var(--radius-sm);padding:16px;margin-bottom:16px;text-align:center}
.device-code{font-size:26px;font-weight:700;letter-spacing:4px;color:var(--accent);margin:10px 0;font-family:monospace}
.device-url{font-size:13px;color:var(--blue);margin-bottom:4px}
.device-hint{font-size:12px;color:var(--text3);line-height:1.5}
.device-status{font-size:13px;color:var(--text2);margin-top:10px;min-height:20px}
.open-gh-btn{width:100%;padding:11px;border-radius:var(--radius-sm);background:var(--bg4);border:0.5px solid var(--border2);color:var(--text);font-size:14px;cursor:pointer;margin-bottom:10px}
.project-item-ob{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--radius-sm);border:0.5px solid var(--border);background:var(--bg3);cursor:pointer;transition:all 0.15s;margin-bottom:6px}
.project-item-ob.selected{border-color:var(--accent);background:var(--bg4)}
.new-proj-fields{display:flex;flex-direction:column;gap:8px;margin-bottom:10px}
.form-row{display:flex;gap:8px}
.new-project-btn{width:100%;padding:10px;border-radius:var(--radius-sm);border:0.5px dashed var(--border2);background:none;color:var(--text2);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px}
.topbar{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg2);border-bottom:0.5px solid var(--border);flex-shrink:0;min-height:52px}
.menu-btn{background:none;border:none;color:var(--text2);font-size:20px;cursor:pointer;padding:4px;display:flex;align-items:center}
.project-name{flex:1;font-size:15px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.topbar-meta{display:flex;align-items:center;gap:8px;flex-shrink:0}
.token-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:3px}
.token-bar{width:56px;height:4px;background:var(--bg4);border-radius:2px;overflow:hidden}
.token-fill{height:100%;background:var(--accent);border-radius:2px;transition:width 0.3s}
.token-label{font-size:10px;color:var(--text3)}
.timer-badge{font-size:11px;color:var(--text2);background:var(--bg3);border:0.5px solid var(--border);border-radius:6px;padding:2px 7px}
.sync-dot{width:7px;height:7px;border-radius:50%;background:var(--green);flex-shrink:0}
.sync-dot.syncing{background:var(--accent);animation:blink 1s infinite}
.sync-dot.err{background:var(--red)}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
.tabs{display:flex;background:var(--bg2);border-bottom:0.5px solid var(--border);flex-shrink:0}
.tab{flex:1;padding:10px 4px;text-align:center;font-size:13px;color:var(--text2);cursor:pointer;border-bottom:2px solid transparent;transition:all 0.2s;user-select:none}
.tab.active{color:var(--accent);border-bottom-color:var(--accent)}
.sidebar-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:100;display:none}
.sidebar-overlay.open{display:block}
.sidebar{position:fixed;left:0;top:0;bottom:0;width:78%;max-width:300px;background:var(--bg2);border-right:0.5px solid var(--border);z-index:101;transform:translateX(-100%);transition:transform 0.25s ease;display:flex;flex-direction:column}
.sidebar.open{transform:translateX(0)}
.sidebar-header{padding:14px 16px;border-bottom:0.5px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.sidebar-header h2{font-size:16px;font-weight:500}
.close-btn{background:none;border:none;color:var(--text2);font-size:20px;cursor:pointer;padding:4px}
.sidebar-body{flex:1;overflow-y:auto;padding:12px}
.sb-section{margin-bottom:20px}
.sb-section h3{font-size:11px;font-weight:500;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px;padding-left:4px}
.sb-project{padding:10px 12px;border-radius:var(--radius-sm);cursor:pointer;display:flex;align-items:center;gap:10px;transition:background 0.15s}
.sb-project.active{background:var(--bg3)}
.sp-name{font-size:14px;font-weight:500}.sp-repo{font-size:11px;color:var(--text3)}
.sb-link{padding:9px 12px;border-radius:var(--radius-sm);cursor:pointer;font-size:13px;color:var(--text2);display:flex;align-items:center;gap:8px;transition:background 0.15s}
.sb-link:hover{background:var(--bg3);color:var(--text)}
.participant-row{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:var(--radius-sm)}
.avatar{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0}
.p-name{font-size:13px;font-weight:500}.p-role{font-size:11px;color:var(--text3)}
.main{flex:1;overflow:hidden;display:flex;flex-direction:column}
.tab-panel{flex:1;overflow:hidden;display:none;flex-direction:column}
.tab-panel.active{display:flex}
.chat-messages{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:10px}
.chat-messages::-webkit-scrollbar{width:3px}
.chat-messages::-webkit-scrollbar-thumb{background:var(--border2);border-radius:2px}
.msg-row{display:flex;gap:8px;align-items:flex-end}
.msg-row.you{flex-direction:row-reverse}
.msg-avatar{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;flex-shrink:0;margin-bottom:2px}
.msg-body{max-width:78%;display:flex;flex-direction:column;gap:3px}
.msg-row.you .msg-body{align-items:flex-end}
.msg-sender{font-size:10px;color:var(--text3);padding:0 10px}
.msg-bubble{padding:9px 13px;border-radius:16px;font-size:14px;line-height:1.5;word-break:break-word;cursor:text;user-select:text;white-space:pre-wrap}
.msg-row.you .msg-bubble{background:var(--accent);color:#fff;border-bottom-right-radius:4px}
.msg-row.ai-a .msg-bubble{background:var(--bg3);color:var(--text);border-bottom-left-radius:4px;border:0.5px solid var(--border)}
.msg-row.ai-b .msg-bubble{background:#1a2a1a;color:var(--text);border-bottom-left-radius:4px;border:0.5px solid #2a3a2a}
.msg-actions{display:flex;gap:6px;padding:0 10px;margin-top:2px}
.msg-action-btn{background:none;border:none;color:var(--text3);font-size:11px;cursor:pointer;padding:2px 4px;border-radius:4px}
.msg-time{font-size:10px;color:var(--text3);padding:0 10px}
.typing-indicator{display:flex;gap:4px;align-items:center;padding:6px 10px}
.typing-dot{width:6px;height:6px;border-radius:50%;background:var(--text3);animation:typing 1.2s infinite}
.typing-dot:nth-child(2){animation-delay:0.2s}
.typing-dot:nth-child(3){animation-delay:0.4s}
@keyframes typing{0%,100%{opacity:0.3;transform:scale(0.8)}50%{opacity:1;transform:scale(1)}}
.chat-input-wrap{padding:10px 12px;background:var(--bg2);border-top:0.5px solid var(--border);flex-shrink:0}
.target-row{display:flex;gap:6px;margin-bottom:8px;overflow-x:auto;padding-bottom:2px}
.target-row::-webkit-scrollbar{display:none}
.target-pill{padding:4px 10px;border-radius:20px;font-size:12px;border:0.5px solid var(--border2);background:none;color:var(--text2);cursor:pointer;white-space:nowrap;transition:all 0.15s}
.target-pill.active{background:var(--accent);border-color:var(--accent);color:#fff}
.input-row{display:flex;gap:8px;align-items:flex-end}
.chat-textarea{flex:1;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius);padding:10px 12px;color:var(--text);font-size:14px;resize:none;min-height:42px;max-height:120px;font-family:inherit;line-height:1.4;outline:none}
.chat-textarea:focus{border-color:var(--accent)}
.chat-textarea::placeholder{color:var(--text3)}
.attach-btn,.send-btn{width:38px;height:38px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px}
.attach-btn{background:var(--bg3);color:var(--text2);border:0.5px solid var(--border2)}
.send-btn{background:var(--accent);color:#fff}
.send-btn:disabled{background:var(--bg4);color:var(--text3);cursor:not-allowed}
.workspace-wrap{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:10px}
.ws-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:var(--text3);text-align:center;padding:40px}
.ws-icon{font-size:36px;margin-bottom:4px}
.file-card{background:var(--bg3);border:0.5px solid var(--border);border-radius:var(--radius-sm);overflow:hidden}
.file-card-header{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:0.5px solid var(--border)}
.file-name{flex:1;font-size:13px;font-weight:500;font-family:monospace}
.file-badge{font-size:10px;padding:2px 6px;border-radius:4px;background:var(--bg4);color:var(--text3)}
.file-badge.modified{background:#2a1a00;color:#f0a050}
.file-badge.new{background:#0a2a1a;color:#50f0a0}
.file-content{padding:10px 12px;font-family:monospace;font-size:12px;color:var(--text2);line-height:1.6;max-height:200px;overflow-y:auto;white-space:pre-wrap;word-break:break-all}
.file-actions{display:flex;gap:6px;padding:8px 12px;border-top:0.5px solid var(--border)}
.file-action{padding:5px 10px;border-radius:6px;border:0.5px solid var(--border2);background:none;color:var(--text2);font-size:12px;cursor:pointer}
.ws-push-bar{padding:10px 14px;background:var(--bg2);border-top:0.5px solid var(--border);display:flex;gap:10px;flex-shrink:0}
.ws-push-bar input{flex:1;background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:8px 10px;color:var(--text);font-size:13px;outline:none}
.ws-push-bar input::placeholder{color:var(--text3)}
.push-btn{padding:8px 14px;border-radius:var(--radius-sm);background:var(--blue);border:none;color:#fff;font-size:13px;cursor:pointer;white-space:nowrap}
.push-btn:disabled{background:var(--bg4);color:var(--text3);cursor:not-allowed}
.actions-wrap{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:12px}
.action-section h3{font-size:11px;font-weight:500;color:var(--text3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:8px}
.action-item{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--bg3);border-radius:var(--radius-sm);border:0.5px solid var(--border);cursor:pointer;margin-bottom:6px}
.ai-name{font-size:13px;font-weight:500;font-family:monospace;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ai-badge{font-size:10px;padding:2px 6px;border-radius:4px}
.badge-modified{background:#2a1a00;color:#f0a050}.badge-new{background:#0a2a1a;color:#50f0a0}
.ci-card{background:var(--bg3);border-radius:var(--radius-sm);border:0.5px solid var(--border);padding:12px}
.ci-row{display:flex;align-items:center;gap:8px;margin-bottom:4px}
.ci-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.ci-dot.pass{background:var(--green)}.ci-dot.fail{background:var(--red)}.ci-dot.running{background:var(--accent);animation:blink 1s infinite}.ci-dot.unknown{background:var(--text3)}
.ci-name{font-size:13px;font-weight:500;flex:1}
.ci-meta{font-size:11px;color:var(--text3);margin-left:16px}
.ci-refresh{background:none;border:0.5px solid var(--border2);border-radius:6px;color:var(--text2);font-size:11px;padding:3px 8px;cursor:pointer}
.switch-btn{width:100%;padding:10px;border-radius:var(--radius-sm);border:0.5px solid var(--border2);background:none;color:var(--text2);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px}
.logout-btn{width:100%;padding:10px;border-radius:var(--radius-sm);border:0.5px solid #3a1a1a;background:none;color:var(--red);font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;margin-top:6px}
.toast{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--bg3);border:0.5px solid var(--border2);border-radius:var(--radius-sm);padding:8px 16px;font-size:13px;color:var(--text);z-index:300;opacity:0;transition:opacity 0.3s;pointer-events:none;white-space:nowrap;max-width:90vw}
.toast.show{opacity:1}
</style>
</head>
<body>
<div class="gate" id="gate"><div class="gate-card"><div class="gate-logo">Vaa</div><div class="gate-sub">Collaborative AI workspace</div><div class="gate-label">Password</div><input class="gate-input" type="password" id="gate-pw" placeholder="••••••••••" onkeydown="if(event.key==='Enter')checkPassword()" /><div class="gate-err" id="gate-err"></div><button class="gate-btn" onclick="checkPassword()">Unlock</button></div></div>
<div class="onboard-overlay" id="onboard" style="display:none"><div class="onboard-card"><div class="onboard-logo">Vaa</div><div class="onboard-sub">Set up your workspace</div><div class="step-dots"><div class="step-dot active" id="dot0"></div><div class="step-dot" id="dot1"></div><div class="step-dot" id="dot2"></div></div><div id="step0"><div class="onboard-label">Who are you on this device?</div><div class="identity-list"><div class="identity-option" data-id="you" onclick="selectIdentity(this)"><div class="io-avatar av-you">Y</div><div class="io-info"><div class="io-name">You</div><div class="io-desc">Human — elschuyler</div></div><div class="io-check"></div></div><div class="identity-option" data-id="claude-a" onclick="selectIdentity(this)"><div class="io-avatar av-a">A</div><div class="io-info"><div class="io-name">Claude A</div><div class="io-desc">AI — account A</div></div><div class="io-check"></div></div><div class="identity-option" data-id="claude-b" onclick="selectIdentity(this)"><div class="io-avatar av-b">B</div><div class="io-info"><div class="io-name">Claude B</div><div class="io-desc">AI — account B</div></div><div class="io-check"></div></div></div><button class="onboard-btn" id="step0-next" disabled onclick="goStep(1)">Continue</button></div><div id="step1" style="display:none"><div class="onboard-label">Connect GitHub</div><div id="device-waiting"><button class="onboard-btn" onclick="startDeviceFlow()">Connect GitHub account</button><div style="font-size:12px;color:var(--text3);margin-top:10px;text-align:center">One-time setup per device.</div></div><div id="device-active" style="display:none"><div class="device-flow-box"><div style="font-size:13px;color:var(--text2);margin-bottom:6px">Open this URL and enter the code:</div><div class="device-url">github.com/login/device</div><div class="device-code" id="device-code">——————</div><div class="device-hint">Code expires in 15 minutes.</div><div class="device-status" id="device-status">Waiting for approval…</div></div><button class="open-gh-btn" onclick="window.open('https://github.com/login/device','_blank')">Open github.com/login/device ↗</button></div></div><div id="step2" style="display:none"><div class="onboard-label">Open or create a project</div><div id="proj-list" style="margin-bottom:10px;max-height:200px;overflow-y:auto"></div><div id="new-proj-fields" class="new-proj-fields" style="display:none"><input class="onboard-input" id="np-name" placeholder="Project name" style="margin-bottom:0" /><input class="onboard-input" id="np-repo" placeholder="GitHub repo (e.g. Viaboard)" style="margin-bottom:0" /><div class="form-row"><button class="cancel-btn" onclick="hideNewProj()">Cancel</button><button class="onboard-btn" style="flex:1;padding:10px" onclick="createProject()">Create</button></div></div><button class="new-project-btn" id="np-btn" onclick="showNewProj()">＋ New project</button></div></div></div>
<div id="app" style="display:none;flex:1;flex-direction:column;overflow:hidden"><div class="topbar"><button class="menu-btn" onclick="toggleSidebar()">☰</button><div class="project-name" id="project-title">Project</div><div class="topbar-meta"><div class="token-wrap"><div class="token-bar"><div class="token-fill" id="token-fill" style="width:0%"></div></div><div class="token-label" id="token-label">0 / ~90k</div></div><div class="timer-badge" id="timer-badge">—</div><div class="sync-dot" id="sync-dot"></div></div></div><div class="tabs"><div class="tab active" onclick="switchTab('chat',this)">Chat</div><div class="tab" onclick="switchTab('workspace',this)">Workspace</div><div class="tab" onclick="switchTab('actions',this)">Actions</div></div><div class="main"><div class="tab-panel active" id="panel-chat"><div class="chat-messages" id="chat-messages"></div><div class="chat-input-wrap"><div class="target-row"><button class="target-pill active" data-target="both" onclick="selectTarget(this)">@ Both</button><button class="target-pill" data-target="claude-a" onclick="selectTarget(this)">@ Claude A</button><button class="target-pill" data-target="claude-b" onclick="selectTarget(this)">@ Claude B</button></div><div class="input-row"><button class="attach-btn" onclick="document.getElementById('file-input').click()">📎</button><textarea class="chat-textarea" id="msg-input" placeholder="Message…" rows="1" onkeydown="handleKey(event)" oninput="autoResize(this)"></textarea><button class="send-btn" id="send-btn" onclick="sendMessage()">➤</button></div><input type="file" id="file-input" style="display:none" onchange="handleFileAttach(event)" multiple /></div></div><div class="tab-panel" id="panel-workspace"><div class="workspace-wrap" id="workspace-files"><div class="ws-empty"><div class="ws-icon">📂</div><p style="font-size:13px;line-height:1.6;color:var(--text3)">Workspace is empty.<br>Claude writes files here during work.</p></div></div><div class="ws-push-bar"><input type="text" id="commit-msg" placeholder="Commit message…" /><button class="push-btn" id="push-btn" onclick="pushToGitHub()" disabled>Push</button></div></div><div class="tab-panel" id="panel-actions"><div class="actions-wrap"><div class="action-section"><h3>CI status</h3><div class="ci-card"><div class="ci-row"><div class="ci-dot unknown" id="ci-dot"></div><div class="ci-name" id="ci-name">Not checked</div><button class="ci-refresh" onclick="checkCI()">Refresh</button></div><div class="ci-meta" id="ci-meta">—</div></div></div><div class="action-section"><h3>Files changed</h3><div id="changed-files-list"><div style="font-size:13px;color:var(--text3)">No changes yet.</div></div></div><div class="action-section" style="margin-top:auto;padding-top:16px;border-top:0.5px solid var(--border)"><button class="switch-btn" onclick="window.open('https://claude.ai','_blank')">⇄ Switch Claude account</button><button class="logout-btn" onclick="logout()">✕ Disconnect GitHub</button></div></div></div></div></div>
<div class="sidebar-overlay" id="sb-overlay" onclick="closeSidebar()"></div><div class="sidebar" id="sidebar"><div class="sidebar-header"><h2>Vaa</h2><button class="close-btn" onclick="closeSidebar()">✕</button></div><div class="sidebar-body"><div class="sb-section"><h3>Projects</h3><div id="sb-projects"></div></div><div class="sb-section"><h3>Participants</h3><div class="participant-row"><div class="avatar av-you">Y</div><div><div class="p-name">You</div><div class="p-role">Human</div></div></div><div class="participant-row"><div class="avatar av-a">A</div><div><div class="p-name">Claude A</div><div class="p-role">claude-sonnet-4-6</div></div></div><div class="participant-row"><div class="avatar av-b">B</div><div><div class="p-name">Claude B</div><div class="p-role">claude-sonnet-4-6</div></div></div></div><div class="sb-section"><h3>Account</h3><div class="sb-link" onclick="window.open('https://claude.ai','_blank');closeSidebar()">⇄ Switch Claude account</div><div class="sb-link" onclick="logout();closeSidebar()">✕ Disconnect GitHub</div></div></div></div>
<div class="toast" id="toast"></div>
<script>
const ANTHROPIC_API='https://api.anthropic.com/v1/messages';
const MODEL='claude-sonnet-4-6';
const GH_CLIENT_ID='Ov23liSH2RXEUIiuqlKS';
const GH_OWNER='Viabhron-Core-Dev-43';
const DATA_REPO='vaa-data';
const MAX_TOKENS=90000;
const APP_PASSWORD='QaXg7yuDnh';
let S={identity:null,ghToken:null,project:null,messages:[],workspaceFiles:{},changedFiles:[],sessionTokens:0,timerStart:null,sending:false,target:'both',convA:[],convB:[],summary:''};
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function loadState(){if(lsGet('vaa_unlocked')!=='1')return;S.identity=lsGet('vaa_identity');S.ghToken=lsGet('vaa_gh_token');S.project=JSON.parse(lsGet('vaa_project')||'null');}
function saveState(){lsSet('vaa_identity',S.identity||'');lsSet('vaa_project',JSON.stringify(S.project));}
loadState();
function checkPassword(){const pw=document.getElementById('gate-pw').value;const err=document.getElementById('gate-err');if(pw===APP_PASSWORD){lsSet('vaa_unlocked','1');document.getElementById('gate').style.display='none';if(S.ghToken&&S.project&&S.identity){showApp();}else{document.getElementById('onboard').style.display='flex';if(S.ghToken)goStep(2);}}else{err.textContent='Wrong password.';document.getElementById('gate-pw').value='';setTimeout(()=>err.textContent='',2000);}}
if(lsGet('vaa_unlocked')==='1'){document.getElementById('gate').style.display='none';if(S.ghToken&&S.project&&S.identity){showApp();}else{document.getElementById('onboard').style.display='flex';if(S.ghToken)goStep(2);}}
let _identity=null,_step=0,_pollInterval=null;
function selectIdentity(el){document.querySelectorAll('.identity-option').forEach(e=>e.classList.remove('selected'));el.classList.add('selected');_identity=el.dataset.id;document.getElementById('step0-next').disabled=false;}
function goStep(n){document.getElementById('step'+_step).style.display='none';_step=n;document.querySelectorAll('.step-dot').forEach((d,i)=>d.classList.toggle('active',i===n));document.getElementById('step'+n).style.display='block';if(n===2)loadProjectsOnboard();}
async function startDeviceFlow(){document.getElementById('device-waiting').style.display='none';document.getElementById('device-active').style.display='block';try{const r=await fetch('https://github.com/login/device/code',{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({client_id:GH_CLIENT_ID,scope:'repo'})});const d=await r.json();document.getElementById('device-code').textContent=d.user_code;pollForToken(d.device_code,d.interval||5);}catch(e){document.getElementById('device-status').textContent='Error. Try again.';document.getElementById('device-waiting').style.display='block';document.getElementById('device-active').style.display='none';}}
function pollForToken(deviceCode,interval){if(_pollInterval)clearInterval(_pollInterval);_pollInterval=setInterval(async()=>{try{const r=await fetch('https://github.com/login/oauth/access_token',{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({client_id:GH_CLIENT_ID,device_code:deviceCode,grant_type:'urn:ietf:params:oauth:grant-type:device_code'})});const d=await r.json();if(d.access_token){clearInterval(_pollInterval);S.ghToken=d.access_token;lsSet('vaa_gh_token',d.access_token);document.getElementById('device-status').textContent='✓ Connected!';setTimeout(()=>goStep(2),800);}else if(d.error==='expired_token'){clearInterval(_pollInterval);document.getElementById('device-status').textContent='Code expired.';setTimeout(()=>{document.getElementById('device-waiting').style.display='block';document.getElementById('device-active').style.display='none';},2000);}}catch(e){}},interval*1000);}
async function loadProjectsOnboard(){const el=document.getElementById('proj-list');el.innerHTML='<div style="font-size:13px;color:var(--text3);padding:8px;text-align:center">Loading…</div>';try{const items=await ghGet('/repos/'+GH_OWNER+'/'+DATA_REPO+'/contents/projects');el.innerHTML='';const dirs=Array.isArray(items)?items.filter(f=>f.type==='dir'):[];if(!dirs.length){el.innerHTML='<div style="font-size:13px;color:var(--text3);padding:8px;text-align:center">No projects yet.</div>';return;}dirs.forEach(f=>{const d=document.createElement('div');d.className='project-item-ob';d.innerHTML='<span style="font-size:18px">📁</span><div><div style="font-size:14px;font-weight:500">'+f.name+'</div><div style="font-size:11px;color:var(--text3)">tap to open</div></div>';d.onclick=()=>openProject(f.name);el.appendChild(d);});}catch(e){el.innerHTML='<div style="font-size:13px;color:var(--text3);padding:8px;text-align:center">Could not load.</div>';}}
async function openProject(name){try{const raw=await ghGetFile('/repos/'+GH_OWNER+'/'+DATA_REPO+'/contents/projects/'+name+'/thread.json');const data=JSON.parse(raw);S.project={name,repo:data.repo||''};S.messages=data.messages||[];S.summary=data.summary||'';S.identity=_identity||S.identity||'you';saveState();document.getElementById('onboard').style.display='none';showApp();}catch(e){toast('Could not open project');}}
function showNewProj(){document.getElementById('new-proj-fields').style.display='flex';document.getElementById('np-btn').style.display='none';}
function hideNewProj(){document.getElementById('new-proj-fields').style.display='none';document.getElementById('np-btn').style.display='flex';}
async function createProject(){const name=document.getElementById('np-name').value.trim();const repo=document.getElementById('np-repo').value.trim();if(!name){toast('Enter a project name');return;}try{await ghPut('/repos/'+GH_OWNER+'/'+DATA_REPO+'/contents/projects/'+name+'/thread.json',JSON.stringify({messages:[],summary:'',repo}),'init '+name);S.project={name,repo};S.messages=[];S.summary='';S.identity=_identity||S.identity||'you';saveState();document.getElementById('onboard').style.display='none';showApp();}catch(e){toast('Could not create: '+e.message);}}
async function ghGet(path){const r=await fetch('https://api.github.com'+path,{headers:{Authorization:'token '+S.ghToken,Accept:'application/vnd.github.v3+json'}});if(!r.ok)throw new Error(r.status);return r.json();}
async function ghGetFile(path){const f=await ghGet(path);return decodeURIComponent(escape(atob(f.content.replace(/\n/g,''))));}
async function ghPut(path,content,message){let sha;try{const f=await ghGet(path);sha=f.sha;}catch(e){}const body={message,content:btoa(unescape(encodeURIComponent(content)))};if(sha)body.sha=sha;const r=await fetch('https://api.github.com'+path,{method:'PUT',headers:{Authorization:'token '+S.ghToken,Accept:'application/vnd.github.v3+json','Content-Type':'application/json'},body:JSON.stringify(body)});if(!r.ok)throw new Error(r.status);return r.json();}
function showApp(){document.getElementById('app').style.display='flex';document.getElementById('project-title').textContent=S.project.name;renderMessages();renderSidebar();renderWorkspace();startTimerLoop();setInterval(syncThread,15000);}
function startTimerLoop(){setInterval(()=>{if(!S.timerStart){document.getElementById('timer-badge').textContent='—';return;}const left=5*60*60*1000-(Date.now()-S.timerStart);if(left<=0){document.getElementById('timer-badge').textContent='↺ reset';return;}const h=Math.floor(left/3600000),m=Math.floor((left%3600000)/60000);document.getElementById('timer-badge').textContent=h+'h '+m+'m';},10000);}
function updateTokenBar(){const pct=Math.min(100,(S.sessionTokens/MAX_TOKENS)*100);document.getElementById('token-fill').style.width=pct+'%';document.getElementById('token-label').textContent=(S.sessionTokens/1000).toFixed(1)+'k / ~90k';}
function setSyncStatus(s){const d=document.getElementById('sync-dot');d.className='sync-dot'+(s==='syncing'?' syncing':s==='err'?' err':'');}
async function syncThread(){try{const raw=await ghGetFile('/repos/'+GH_OWNER+'/'+DATA_REPO+'/contents/projects/'+S.project.name+'/thread.json');const data=JSON.parse(raw);if(data.messages&&data.messages.length>S.messages.length){S.messages=data.messages;S.summary=data.summary||S.summary;renderMessages();}setSyncStatus('ok');}catch(e){setSyncStatus('err');}}
async function saveThread(){const data={messages:S.messages.slice(-40),summary:S.summary.trim().split('\n').slice(-20).join('\n'),repo:S.project.repo||''};try{setSyncStatus('syncing');await ghPut('/repos/'+GH_OWNER+'/'+DATA_REPO+'/contents/projects/'+S.project.name+'/thread.json',JSON.stringify(data),'thread update');setSyncStatus('ok');}catch(e){setSyncStatus('err');}}
function renderMessages(){const el=document.getElementById('chat-messages');el.innerHTML='';S.messages.forEach(m=>el.appendChild(buildBubble(m)));el.scrollTop=el.scrollHeight;}
function buildBubble(m){const isYou=m.role==='you',isA=m.role==='claude-a';const row=document.createElement('div');row.className='msg-row '+(isYou?'you':isA?'ai-a':'ai-b');const av=isYou?'av-you':isA?'av-a':'av-b',avL=isYou?'Y':isA?'A':'B';const time=new Date(m.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});const esc=m.text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');const textJ=JSON.stringify(m.text);row.innerHTML='<div class="msg-avatar '+av+'">'+avL+'</div><div class="msg-body"><div class="msg-sender">'+m.sender+'</div><div class="msg-bubble">'+esc+'</div><div class="msg-actions"><button class="msg-action-btn" onclick="copyText(this,'+textJ+')">⎘ copy</button></div><div class="msg-time">'+time+'</div></div>';return row;}
function copyText(btn,text){navigator.clipboard.writeText(text).then(()=>{btn.textContent='✓ copied';setTimeout(()=>btn.textContent='⎘ copy',1500);}).catch(()=>toast('Copy failed'));}
function addTyping(who){const el=document.getElementById('chat-messages');const d=document.createElement('div');d.className='msg-row '+(who==='claude-a'?'ai-a':'ai-b');d.id='typing-'+who;d.innerHTML='<div class="msg-avatar '+(who==='claude-a'?'av-a':'av-b')+'">'+(who==='claude-a'?'A':'B')+'</div><div class="msg-body"><div class="msg-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div></div>';el.appendChild(d);el.scrollTop=el.scrollHeight;}
function removeTyping(who){const d=document.getElementById('typing-'+who);if(d)d.remove();}
async function sendMessage(){const input=document.getElementById('msg-input');const text=input.value.trim();if(!text||S.sending)return;S.sending=true;document.getElementById('send-btn').disabled=true;if(!S.timerStart)S.timerStart=Date.now();input.value='';autoResize(input);S.messages.push({role:'you',sender:'You',text,ts:Date.now()});renderMessages();const target=S.target;if(target==='both'||target==='claude-a')addTyping('claude-a');if(target==='both'||target==='claude-b')addTyping('claude-b');const calls=[];if(target==='both'||target==='claude-a')calls.push(callClaude('claude-a',text));if(target==='both'||target==='claude-b')calls.push(callClaude('claude-b',text));await Promise.allSettled(calls);S.sending=false;document.getElementById('send-btn').disabled=false;saveThread();}
async function callClaude(who,userText){const ctxSummary=S.summary?'Context:\n'+S.summary+'\n\n':'';const repoCtx=S.project.repo?'Repo: '+GH_OWNER+'/'+S.project.repo+'. ':'';const system=repoCtx+'You are '+(who==='claude-a'?'Claude A':'Claude B')+', an AI collaborator in Vaa for Android development. '+ctxSummary+'Be concise. To write files use: FILE: filename\n```\ncode\n```';const convKey=who==='claude-a'?'convA':'convB';S[convKey].push({role:'user',content:userText});if(S[convKey].length>20)S[convKey]=S[convKey].slice(-20);try{const r=await fetch(ANTHROPIC_API,{method:'POST',headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01'},body:JSON.stringify({model:MODEL,max_tokens:1000,system,messages:S[convKey]})});const data=await r.json();removeTyping(who);const reply=data.content?.[0]?.text||'(no response)';S[convKey].push({role:'assistant',content:reply});S.sessionTokens+=(data.usage?.input_tokens||0)+(data.usage?.output_tokens||0)||Math.ceil(reply.length/4);updateTokenBar();S.messages.push({role:who,sender:who==='claude-a'?'Claude A':'Claude B',text:reply,ts:Date.now()});renderMessages();parseWorkspaceFiles(reply);generateNote(reply,who);}catch(e){removeTyping(who);S.messages.push({role:who,sender:who==='claude-a'?'Claude A':'Claude B',text:'(error: '+e.message+')',ts:Date.now()});renderMessages();}}
function parseWorkspaceFiles(text){const re=/FILE:\s*(\S+)\s*```[\w]*\n([\s\S]*?)```/g;let m,found=false;while((m=re.exec(text))!==null){S.workspaceFiles[m[1]]={content:m[2],ts:Date.now(),status:'modified'};if(!S.changedFiles.find(f=>f.name===m[1]))S.changedFiles.push({name:m[1],status:'modified'});found=true;}if(found){renderWorkspace();renderChangedFiles();document.getElementById('push-btn').disabled=false;}}
function renderWorkspace(){const el=document.getElementById('workspace-files');const files=Object.entries(S.workspaceFiles);if(!files.length){el.innerHTML='<div class="ws-empty"><div class="ws-icon">📂</div><p style="font-size:13px;line-height:1.6;color:var(--text3)">Workspace is empty.<br>Claude writes files here during work.</p></div>';return;}el.innerHTML='';files.forEach(([name,f])=>{const card=document.createElement('div');card.className='file-card';const esc=f.content.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');card.innerHTML='<div class="file-card-header"><span class="file-name">'+name+'</span><span class="file-badge '+f.status+'">'+f.status+'</span></div><div class="file-content">'+esc+'</div><div class="file-actions"><button class="file-action" onclick="copyFileContent(\''+encodeURIComponent(name)+'\')">Copy</button><button class="file-action" onclick="removeFile(\''+encodeURIComponent(name)+'\')">Remove</button></div>';el.appendChild(card);});}
function copyFileContent(enc){const f=S.workspaceFiles[decodeURIComponent(enc)];if(f)navigator.clipboard.writeText(f.content).then(()=>toast('Copied')).catch(()=>toast('Failed'));}
function removeFile(enc){const name=decodeURIComponent(enc);delete S.workspaceFiles[name];S.changedFiles=S.changedFiles.filter(f=>f.name!==name);renderWorkspace();renderChangedFiles();if(!Object.keys(S.workspaceFiles).length)document.getElementById('push-btn').disabled=true;}
async function pushToGitHub(){const msg=document.getElementById('commit-msg').value.trim()||'Vaa: update';const files=Object.entries(S.workspaceFiles);if(!files.length||!S.project.repo){toast(!S.project.repo?'No repo set':'Nothing to push');return;}document.getElementById('push-btn').disabled=true;document.getElementById('push-btn').textContent='Pushing…';setSyncStatus('syncing');let ok=0;for(const [name,f] of files){try{await ghPut('/repos/'+GH_OWNER+'/'+S.project.repo+'/contents/'+name,f.content,msg);ok++;}catch(e){toast('Failed: '+name);}}document.getElementById('push-btn').textContent='Push';setSyncStatus('ok');toast('Pushed '+ok+' file'+(ok!==1?'s':''));if(ok){S.workspaceFiles={};renderWorkspace();}document.getElementById('push-btn').disabled=!Object.keys(S.workspaceFiles).length;}
function renderChangedFiles(){const el=document.getElementById('changed-files-list');if(!S.changedFiles.length){el.innerHTML='<div style="font-size:13px;color:var(--text3)">No changes yet.</div>';return;}el.innerHTML='';S.changedFiles.forEach(f=>{const d=document.createElement('div');d.className='action-item';d.innerHTML='<span style="font-size:16px">📄</span><div class="ai-name">'+f.name+'</div><span class="ai-badge badge-'+f.status+'">'+f.status+'</span>';d.onclick=()=>{const wf=S.workspaceFiles[f.name];if(wf)navigator.clipboard.writeText(wf.content).then(()=>toast('Copied '+f.name)).catch(()=>toast('Failed'));else toast('Not in workspace');};el.appendChild(d);});}
async function checkCI(){if(!S.project.repo){toast('No repo set');return;}document.getElementById('ci-dot').className='ci-dot running';document.getElementById('ci-name').textContent='Checking…';try{const d=await ghGet('/repos/'+GH_OWNER+'/'+S.project.repo+'/actions/runs?per_page=1');const run=d.workflow_runs?.[0];if(!run){document.getElementById('ci-dot').className='ci-dot unknown';document.getElementById('ci-name').textContent='No runs found';return;}const st=run.conclusion||run.status;document.getElementById('ci-dot').className='ci-dot '+(st==='success'?'pass':st==='failure'?'fail':st==='in_progress'?'running':'unknown');document.getElementById('ci-name').textContent=run.name||'Workflow';document.getElementById('ci-meta').textContent=st+' · '+new Date(run.updated_at).toLocaleString();}catch(e){document.getElementById('ci-dot').className='ci-dot fail';document.getElementById('ci-name').textContent='Error';}}
async function generateNote(reply,who){try{const r=await fetch(ANTHROPIC_API,{method:'POST',headers:{'Content-Type':'application/json','anthropic-version':'2023-06-01'},body:JSON.stringify({model:MODEL,max_tokens:60,messages:[{role:'user',content:'One sentence note on the key action just taken. Reply with ONLY the note.\n\n'+reply.substring(0,400)}]})});const d=await r.json();const note=d.content?.[0]?.text||'';if(note)S.summary=(S.summary+'\n'+new Date().toLocaleDateString()+' '+who+': '+note).trim();}catch(e){}}
function renderSidebar(){const el=document.getElementById('sb-projects');el.innerHTML='';const d=document.createElement('div');d.className='sb-project active';d.innerHTML='<span style="font-size:18px">📁</span><div><div class="sp-name">'+S.project.name+'</div><div class="sp-repo">'+(S.project.repo||'no repo')+'</div></div>';el.appendChild(d);}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('sb-overlay').classList.toggle('open');}
function closeSidebar(){document.getElementById('sidebar').classList.remove('open');document.getElementById('sb-overlay').classList.remove('open');}
function switchTab(name,el){document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));el.classList.add('active');document.getElementById('panel-'+name).classList.add('active');if(name==='actions')renderChangedFiles();}
function selectTarget(el){document.querySelectorAll('.target-pill').forEach(p=>p.classList.remove('active'));el.classList.add('active');S.target=el.dataset.target;}
function handleKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,120)+'px';}
async function handleFileAttach(e){const files=Array.from(e.target.files);for(const f of files){const text=await f.text().catch(()=>null);if(text!==null){S.workspaceFiles[f.name]={content:text,ts:Date.now(),status:'new'};if(!S.changedFiles.find(c=>c.name===f.name))S.changedFiles.push({name:f.name,status:'new'});renderWorkspace();document.getElementById('push-btn').disabled=false;toast('Loaded: '+f.name);}}e.target.value='';}
function logout(){lsSet('vaa_gh_token','');S.ghToken=null;document.getElementById('app').style.display='none';document.getElementById('onboard').style.display='flex';_step=0;['step0','step1','step2'].forEach((s,i)=>{document.getElementById(s).style.display=i===0?'block':'none';});document.querySelectorAll('.step-dot').forEach((d,i)=>d.classList.toggle('active',i===0));toast('Disconnected from GitHub');}
function toast(msg,dur=2200){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),dur);}
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      return new Response(HTML, {
        headers: {'Content-Type':'text/html;charset=UTF-8','Cache-Control':'no-store','X-Frame-Options':'SAMEORIGIN'}
      });
    }
    return new Response('Not found', {status: 404});
  }
};
