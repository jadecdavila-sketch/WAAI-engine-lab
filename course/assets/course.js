/* Counterpoint Foundations: shared chrome, drawer, state, exercise helpers. */
(function(){
  'use strict';
  const $ = (s, r) => (r||document).querySelector(s);
  const $$ = (s, r) => [...(r||document).querySelectorAll(s)];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const h = (tag, attrs, ...kids) => {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) e.setAttribute(k, attrs[k]);
    }
    for (const k of kids.flat()) { if (k === null || k === undefined || k === false) continue; e.append(k.nodeType ? k : document.createTextNode(String(k))); }
    return e;
  };
  const ORDER = ['architect','responder','witness','questioner','groundskeeper','longgame','artisan','medium','merchant'];
  const MODE_CLS = {'human-only':'ho','human-leads':'hl','human-ai-collaborate':'hc','ai-leads':'al'};
  const MODES = ['human-only','human-leads','human-ai-collaborate','ai-leads'];
  const IMG = k => 'assets/img/voice-' + k + '.jpg';
  const THUMB = k => 'assets/img/thumb-' + k + '.jpg';

  /* ---- state ---- */
  const KEY = 'counterpoint-foundations-v2';
  let state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { state = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };
  const mark = (k, v) => { state[k] = v; save(); paintScore(); };
  const MODULES = [
    { id:'home', href:'index.html', label:'Start', title:'Start' },
    { id:'council', href:'council.html', label:'Council', title:'Module 1, The Council', done: s => ORDER.every(k => s.voices && s.voices[k]), left: s => { const n = ORDER.filter(k => !(s.voices && s.voices[k])).length; return n ? [n + (n === 1 ? ' voice check' : ' voice checks')] : []; } },
    { id:'ns', href:'north-star.html', label:'North Star', title:'Module 2, The North Star', done: s => !!s.drift, left: s => [!s.drift && 'the North Star exercise'].filter(Boolean) },
    { id:'journey', href:'journey.html', label:'Journey', title:'Module 3, The Journey', done: s => !!s.modes && !!s.gates, left: s => [!s.modes && 'Pick the mode', !s.gates && 'Hold the gate'].filter(Boolean) },
    { id:'quiz', href:'quiz.html', label:'Quiz', title:'The quiz', done: s => !!s.passed }
  ];
  const isDone = m => !!(m.done && m.done(state));
  /* LINEAR = true locks each module until the one before it is finished. false leaves every module open. */
  const LINEAR = false;
  /* facilitator switch: add ?open to any page URL, or use the footer link, to open every module on this device */
  let openAll = !LINEAR;
  try { if (/[?&]open\b/.test(location.search)) localStorage.setItem('cf-open', '1'); if (/[?&]lock\b/.test(location.search)) localStorage.removeItem('cf-open'); openAll = !LINEAR || localStorage.getItem('cf-open') === '1'; } catch (e) {}
  const isOpen = m => { if (openAll) return true; const i = MODULES.indexOf(m); return i <= 1 || isDone(MODULES[i - 1]); };
  const current = () => MODULES.find(m => m.id === document.body.dataset.page);
  const nextToDo = () => MODULES.find(m => m.id !== 'home' && isOpen(m) && !isDone(m)) || null;

  /* ---- chrome: the score line, which is also the nav ---- */
  function paintScore(){
    const here = document.body.dataset.page;
    const box = $('#score'); if (!box) return;
    const W = 520, H = 44, n = MODULES.length, pad = 22, step = (W - pad*2) / (n - 1), cy = 18;
    let svg = `<svg viewBox="0 0 ${W} ${H}" role="list" aria-label="Course modules">`;
    for (let i = 0; i < n - 1; i++) {
      const x1 = pad + i*step, x2 = pad + (i+1)*step, cls = isDone(MODULES[i]) ? 'line on' : 'line';
      svg += `<path class="${cls}" d="M${x1} ${cy} C ${x1+step*.5} ${cy-9}, ${x2-step*.5} ${cy+9}, ${x2} ${cy}"/>`;
      svg += `<path class="${cls}" d="M${x1} ${cy} C ${x1+step*.5} ${cy+9}, ${x2-step*.5} ${cy-9}, ${x2} ${cy}"/>`;
    }
    MODULES.forEach((m, i) => {
      const x = pad + i*step, on = isDone(m), cur = m.id === here, open = isOpen(m);
      const node = `<circle class="node${on?' on':''}${cur?' here':''}${open?'':' locked'}" cx="${x}" cy="${cy}" r="${i===0||i===n-1?5:6.5}"/><text class="${on||cur?'on':''}${open?'':' locked'}" x="${x}" y="${H-3}">${m.label}</text>`;
      const prev = MODULES[i-1];
      const label = open ? m.title + (on ? ', finished' : cur ? ', you are here' : '') : m.title + ', opens when you finish ' + (prev ? prev.title : '');
      svg += open ? `<a href="${m.href}" role="listitem" aria-label="${label}" aria-current="${cur?'page':'false'}">${node}</a>` : `<g role="listitem" aria-label="${label}">${node}<title>${label}</title></g>`;
    });
    svg += '</svg>';
    box.innerHTML = svg;
    paintCoda(); paintBegin();
  }
  /* the coda's next step opens when this module is finished */
  function paintCoda(){
    const a = $('.coda .next:not([data-own])'); if (!a) return;
    const m = current(); if (!m) return;
    const i = MODULES.indexOf(m), nxt = MODULES[i+1];
    if (!nxt) return;
    if (isDone(m) || openAll) { a.classList.remove('locked'); a.removeAttribute('aria-disabled'); a.href = nxt.href; a.innerHTML = a.dataset.label + '<small>' + a.dataset.small + '</small>'; }
    else { const left = m.left ? m.left(state) : []; a.classList.add('locked'); a.setAttribute('aria-disabled', 'true'); a.removeAttribute('href'); a.innerHTML = 'Finish this module to continue<small>' + (left.length ? 'Still to do: ' + left.join(' and ') : '') + '</small>'; }
  }
  /* the start page's one button */
  function paintBegin(){
    const b = $('#begin'); if (!b) return;
    const m = nextToDo();
    if (!m) { b.innerHTML = '<a class="btn teal" href="quiz.html">You have finished. See your code again</a>'; return; }
    const started = Object.keys(state).length > 0;
    const first = m.id === 'council' && !started;
    b.innerHTML = `<a class="btn" href="${m.href}">${first ? 'Begin with Module 1, The Council' : (m.id === 'quiz' ? 'Take the quiz' : 'Continue: ' + m.title)}</a>`;
  }
  /* a locked page sends you to the module that opens it */
  function gate(){
    const m = current(); if (!m || isOpen(m)) return false;
    const to = nextToDo() || MODULES[1];
    try { sessionStorage.setItem('cf-locked', m.title); } catch (e) {}
    location.replace(to.href + '#top'); return true;
  }
  function lockedNotice(){
    let t = null; try { t = sessionStorage.getItem('cf-locked'); sessionStorage.removeItem('cf-locked'); } catch (e) {}
    if (!t) return;
    const m = current(); if (!m) return;
    const n = h('div', {class:'notice', role:'status'}, h('div', {class:'wrap'}, h('b', null, t + ' opens when you finish this module. '), 'The course runs in order so each part has what it needs from the one before.'));
    const hero = $('header.hero'); if (hero) hero.after(n); else document.body.prepend(n);
  }

  /* ---- drawer, as on the leadership site ---- */
  let drawer, scrim, art, lastFocus = null;
  function ensureDrawer(){
    if (drawer) return;
    scrim = h('div', {class:'scrim', id:'scrim'});
    drawer = h('aside', {class:'drawer', id:'drawer', 'aria-hidden':'true', role:'dialog', 'aria-labelledby':'drawer-title'});
    drawer.innerHTML = '<div class="art" id="drawer-art" hidden></div><div class="inner"><button class="close" id="drawer-close" type="button">Close</button><p class="kicker" id="drawer-kicker"></p><h3 id="drawer-title"></h3><p class="ask" id="drawer-ask"></p><dl id="drawer-facts"></dl><div class="body" id="drawer-body"></div></div>';
    document.body.append(scrim, drawer);
    art = $('#drawer-art');
    $('#drawer-close').addEventListener('click', closeDrawer);
    scrim.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('on')) closeDrawer(); });
  }
  function show(kicker, title, ask, facts, body, img, wide){
    ensureDrawer();
    drawer.classList.toggle('wide', !!wide);
    $('#drawer-kicker').textContent = kicker;
    $('#drawer-title').textContent = title;
    $('#drawer-ask').textContent = ask;
    $('#drawer-facts').innerHTML = facts.map(f => `<dt>${f[0]}</dt><dd>${esc(f[1])}</dd>`).join('');
    $('#drawer-body').innerHTML = body;
    if (img) { art.style.backgroundImage = `url(${img})`; art.hidden = false; } else { art.hidden = true; }
    lastFocus = document.activeElement;
    void drawer.offsetWidth;
    drawer.classList.add('on'); scrim.classList.add('on'); drawer.setAttribute('aria-hidden', 'false');
    drawer.scrollTop = 0; document.body.style.overflow = 'hidden'; $('#drawer-close').focus();
  }
  function closeDrawer(){ if (!drawer) return; drawer.classList.remove('on'); scrim.classList.remove('on'); drawer.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  function openVoice(id){ const v = VOICES[id]; if (!v) return;
    const members = v.members.map(m => `<li><b>${esc(m.name)}</b><i>${esc(m.pillar)}</i>${esc(m.who)}<em>Asks: ${esc(m.asks)}</em></li>`).join('');
    const body = `<h4>Personality</h4><p>${esc(v.personality)}</p>
      <h4>In their words</h4><blockquote><p>${esc(v.quote)}</p></blockquote>
      <h4>The council speaks</h4><p class="speaks">${esc(v.speaks)}</p>
      <h4>The members of this council</h4><p class="hint" style="margin-bottom:8px">One per pillar. Teach the voice; use the members as the reference layer and as the prompts behind the AI critics.</p><ul class="members">${members}</ul>`;
    show(v.council, v.name, v.ask, [["Pillars", v.pillars], ["Cares about", v.cares], ["Loudest at", v.loudest], ["Lab roles", v.roles]], body, IMG(id));
  }
  function openStage(n){ const st = STAGES.find(x => x.n == n); if (!st) return;
    const roster = st.voices.map(x => { const id = NAMES[x.voice]; const v = VOICES[id] || {};
      return `<li><div class="th" style="background-image:url(${THUMB(id)})"></div><div><b><a href="voice.html?v=${id}">${esc(x.voice)}</a>${x.primary ? '<span>PRIMARY</span>' : '<span style="color:#5F5A52">PRESENT</span>'}</b><i>${esc(v.council || '')} ${v.roles ? '&middot; ' + esc(v.roles) : ''}</i><p>${esc(x.text)}</p></div></li>`; }).join('');
    const list = (ACTS[n] || []).map((a, i) => `<div class="act"><div class="ah"><b>${i+1}. ${esc(a.name)}</b><span class="tag ${MODE_CLS[a.mode] || ''}">${a.mode}</span></div><div class="role">${esc(a.role)}</div><dl>
      <dt>What it is</dt><dd>${esc(a.desc)}</dd>
      <dt>AI can do</dt><dd>${esc(a.ai)}</dd>
      <dt>Human must own</dt><dd>${esc(a.human)}</dd>
      <dt>Watch for</dt><dd>${esc(a.pitfalls)}</dd>
      <dt>Tools</dt><dd class="tools">${esc(a.tools)}</dd>
      <dt>Done right when</dt><dd class="check">${esc(a.check)}</dd></dl></div>`).join('');
    const body = `<p class="desc">${esc(st.desc)}</p>
      <div class="done"><h4 style="margin-top:0">What done looks like</h4><p>${esc(st.done)}</p></div>
      <h4>The Council at this stage</h4><ul class="roster">${roster}</ul>
      <h4>The work of this stage: ${(ACTS[n] || []).length} activities</h4>
      <p class="modekey">The tag on each activity says who drives: <span class="tag ho">human-only</span> <span class="tag hl">human-leads</span> <span class="tag hc">human-ai-collaborate</span> <span class="tag al">ai-leads</span>. In every mode a person confirms the work passed its check.</p>
      ${list}`;
    show("Stage " + st.n + " of 10", st.title, st.q, [], body, null, true);
  }
  function openProblem(id){ const p = PROB[id]; if (!p) return; show('The problem this solves', p.title, '', [], p.paras.map(x => `<p>${x}</p>`).join(''), null); }
  function wire(){
    $$('[data-voice]').forEach(el => { const go = () => openVoice(el.dataset.voice); el.addEventListener('click', go); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    $$('[data-stage]').forEach(el => { const go = () => openStage(el.dataset.stage); el.addEventListener('click', go); el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    $$('[data-problem]').forEach(el => el.addEventListener('click', () => openProblem(el.dataset.problem)));
  }

  /* ---- exercise frame and the tally ---- */
  function frame(id, kicker, title, intro, total){
    const ex = $(id); ex.innerHTML = '';
    const tally = h('div', {class:'tally', 'aria-hidden':'true'});
    for (let i = 0; i < total; i++) tally.append(h('i'));
    ex.append(h('div', {class:'exh'}, h('div', null, h('p', {class:'kicker'}, kicker), h('h3', null, title), h('p', null, intro)), tally));
    const body = h('div', {class:'exb'}); ex.append(body);
    const foot = h('div', {class:'exf'}); ex.append(foot);
    const tick = (i, ok) => { const d = tally.children[i]; if (d) { d.className = ok ? 'ok' : 'miss'; } };
    return {ex, body, foot, tick};
  }
  function footer(foot, right, total, extra){
    foot.innerHTML = '';
    if (right === null) { foot.append(h('p', {class:'hint'}, `Answer all ${total} to see how you did.`)); return; }
    foot.append(h('p', {class:'score'}, `${right} of ${total}`));
    if (extra) foot.append(h('p', null, extra));
  }
  /* choice exercise: shared labels (cfg.options + it.answer) or per item options (it.options[].correct) */
  function choiceExercise(id, kicker, cfg, renderItem, stateKey, onDone){
    const {body, foot, tick} = frame(id, kicker, cfg.title, cfg.intro, cfg.items.length);
    let answered = 0, right = 0;
    cfg.items.forEach((it, idx) => {
      const item = h('div', {class:'item'});
      renderItem(item, it);
      const opts = h('div', {class:'opts' + (cfg.stack ? ' stack' : '')});
      const why = h('div', {class:'why'});
      const labels = cfg.options || it.options.map(o => o.text);
      const correctIdx = cfg.options ? it.answer : it.options.findIndex(o => o.correct);
      labels.forEach((label, oi) => {
        const b = h('button', {class:'opt', type:'button'}, label);
        b.addEventListener('click', () => {
          const ok = oi === correctIdx;
          $$('.opt', opts).forEach((x, xi) => { x.disabled = true; if (xi === correctIdx) x.classList.add('right'); else if (xi === oi) x.classList.add('wrong'); else x.classList.add('dim'); });
          const text = cfg.options ? it.why : it.options[oi].why;
          const lead = ok ? 'Right. ' : (cfg.options ? `The answer is "${labels[correctIdx]}". ` : 'Not this one. ');
          why.className = 'why on' + (ok ? '' : ' miss');
          why.innerHTML = '<b>' + esc(lead) + '</b>' + esc(text) + (ok || cfg.options ? '' : '<br><br><b>What the framework asks for:</b> ' + esc(it.options[correctIdx].why));
          answered++; if (ok) right++; tick(idx, ok);
          if (onDone) onDone(item, it, ok);
          if (answered === cfg.items.length) { footer(foot, right, cfg.items.length, cfg.close || ''); mark(stateKey, {right, total: cfg.items.length}); }
        });
        opts.append(b);
      });
      item.append(opts, why);
      body.append(item);
    });
    footer(foot, null, cfg.items.length);
  }

  /* ---- completion code ---- */
  const SALT = 'counterpoint-foundations-2026-waai-engine-lab';
  const ALPHA = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const norm = n => n.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
  function cyrb53(str, seed){
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return [h1 >>> 0, h2 >>> 0];
  }
  function makeCode(name){
    const n = norm(name);
    const [a, b] = cyrb53(SALT + '|' + n, 7), [c, d] = cyrb53(n + '|' + SALT, 11);
    let x = (BigInt(a) << 32n) | BigInt(b), y = (BigInt(c) << 32n) | BigInt(d), s = '';
    for (let i = 0; i < 4; i++) { s += ALPHA[Number(x % 31n)]; x /= 31n; }
    for (let i = 0; i < 4; i++) { s += ALPHA[Number(y % 31n)]; y /= 31n; }
    return 'CP-' + s.slice(0, 4) + '-' + s.slice(4);
  }

  window.CF = { $, $$, esc, h, ORDER, MODE_CLS, MODES, IMG, THUMB, state, save, mark, MODULES, isDone, isOpen, nextToDo, show, openVoice, openStage, openProblem, frame, footer, choiceExercise, makeCode, paintScore };
  if (gate()) return;
  document.addEventListener('DOMContentLoaded', () => {
    ensureDrawer(); wire(); paintScore(); lockedNotice();
    const r = $('#reset'); if (r) r.addEventListener('click', () => { for (const k in state) delete state[k]; save(); location.reload(); });
    const o = $('#openall'); if (o && !LINEAR) o.remove(); else if (o) { o.textContent = openAll ? 'Lock the modules again' : 'Open all modules on this device (for facilitators)'; o.addEventListener('click', () => { try { if (openAll) localStorage.removeItem('cf-open'); else localStorage.setItem('cf-open', '1'); } catch (e) {} location.reload(); }); }
    if (openAll && LINEAR) { const w = $('.top .where'); if (w) w.innerHTML = '<b>All modules open</b> for testing'; }
  });
})();
