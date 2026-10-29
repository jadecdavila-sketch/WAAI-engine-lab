/* The Foundation as a road atlas. Ported from the Counterpoint portfolio (src/components/Foundation.tsx).
   Towns are systems, INDEX.md is the router, the signpost is the keyword routers, the district is the AI
   layer, side roads are direct dependencies, potholes are gotchas, construction is a [REVIEW NEEDED] flag,
   the junction is CROSS_SYSTEM_DEPENDENCIES.md, and the tollgate is the pre push hook.
   Atlas.mount(svgHost, detailHost) draws it; hover, focus, or tap a marker to read it. */
const Atlas = (function(){
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const ROADS = [
    { id: 'entry', d: 'M100,360 C140,358 172,361 200,360', major: true },
    { id: 'toEmail', d: 'M230,350 C300,312 372,282 426,270' },
    { id: 'toCal', d: 'M232,352 C340,322 472,272 558,256' },
    { id: 'toNotif', d: 'M232,356 C372,344 552,304 670,290' },
    { id: 'toVault', d: 'M230,372 C296,408 376,436 448,444', stale: true },
    { id: 'toGifts', d: 'M232,372 C372,428 506,450 608,453' },
    { id: 'emailX', d: 'M462,274 C556,304 668,332 752,352' },
    { id: 'calX', d: 'M596,262 C652,290 706,318 756,344' },
    { id: 'notifX', d: 'M704,300 C724,316 742,332 758,346' },
    { id: 'vaultX', d: 'M488,442 C580,418 680,388 754,366' },
    { id: 'giftsX', d: 'M646,444 C688,422 726,396 758,372' },
    { id: 'exit', d: 'M794,360 C812,360 830,360 842,360', major: true },
    { id: 'push', d: 'M892,360 C906,360 918,360 926,360', major: true },
    { id: 'aiEmailSafety', d: 'M436,246 C414,204 394,160 380,132' },
    { id: 'aiEmailGemini', d: 'M456,248 C488,204 520,158 544,132' },
    { id: 'aiSafetyGemini', d: 'M392,114 C440,108 488,108 534,114' },
    { id: 'aiGeminiClaude', d: 'M572,114 C620,120 668,120 704,114' },
    { id: 'aiNotifClaude', d: 'M694,268 C706,224 714,172 720,134' },
    { id: 'ripEmailCal', d: 'M462,260 C500,252 538,251 560,253', ripple: true },
    { id: 'ripCalNotif', d: 'M592,260 C624,270 652,280 674,285', ripple: true },
    { id: 'ripEmailGifts', d: 'M450,282 C486,344 548,408 612,444', ripple: true }
  ];
  const roadD = id => (ROADS.find(r => r.id === id) || {}).d || '';

  const FEATURES = [
    { id: 'index', kind: 'index', x: 214, y: 360, name: 'INDEX.md', kicker: 'Router', title: 'INDEX.md, the router',
      body: 'A short index: every system, its keywords, its last reviewed date, a pointer to its sub document. Every agent reads it first to find which way to go.',
      roads: ['entry','toEmail','toCal','toNotif','toVault','toGifts'] },
    { id: 'signpost', kind: 'signpost', x: 322, y: 336, name: 'keyword routers', kicker: 'Signpost', title: 'Keyword routers',
      body: 'Each sub document carries keyword fields. Match the task against them and they point to exactly which documents to load in full.',
      roads: ['toEmail','toCal','toNotif','toVault','toGifts'] },
    { id: 'email', kind: 'system', x: 444, y: 264, name: 'Email Pipeline', file: '11-email-pipeline.md', kicker: 'Domain feature', title: 'Email Pipeline',
      body: 'Filter, urgency gate, defer or parse, sanitize, model, validate, store. The most connected system in the codebase. It touches seven others.',
      keywords: ['gmail','pushHandler','parseEmail','email_metadata'], reviewed: '2026-05-08',
      roads: ['toEmail','emailX','aiEmailSafety','aiEmailGemini','ripEmailCal','ripEmailGifts'] },
    { id: 'calendar', kind: 'system', x: 576, y: 252, name: 'Calendar Sync', file: '12-google-calendar-sync.md', kicker: 'Domain feature', title: 'Google Calendar Sync',
      body: 'Webhook plus scheduled sync plus writer. The client and the server each carry a copy of the routing rules, and they must stay in lock step.',
      keywords: ['google calendar','calendarRouting','events','deduplicateEvents'], reviewed: '2026-05-07',
      roads: ['toCal','calX','ripEmailCal','ripCalNotif'] },
    { id: 'notifications', kind: 'system', x: 690, y: 286, name: 'Notifications', file: '14-notifications.md', kicker: 'Domain feature', title: 'Notifications',
      body: 'An hourly cron and a real time trigger, every line of copy routed through one voice chokepoint. The SCHEDULE table is the single source of the daily cadence.',
      keywords: ['hourlyNotifier','realTimeAlert','FCM','SCHEDULE'], reviewed: '2026-05-07',
      roads: ['toNotif','notifX','aiNotifClaude','ripCalNotif'] },
    { id: 'vault', kind: 'system', x: 468, y: 446, name: 'Document Vault', file: '13-document-vault.md', kicker: 'Domain feature', title: 'Document Vault',
      body: 'A sidecar store. The documents stay in the user’s own Drive, only the metadata in Firestore. This doc has not been touched in weeks; the faded road says read it, but verify against current code.',
      keywords: ['vault','sidecar','drive.file','vault_documents'], reviewed: '2026-04-28', stale: true,
      roads: ['toVault','vaultX'] },
    { id: 'gifts', kind: 'system', x: 628, y: 452, name: 'Gifts', file: '15-gifts.md', kicker: 'Domain feature', title: 'Gifts',
      body: 'Birthday lead and email detected gift opportunities, carried through a model chat and a curation pass before anything reaches her.',
      keywords: ['gifts','birthday','gift_conversations','giftCuration'], reviewed: '2026-05-06',
      roads: ['toGifts','giftsX','ripEmailGifts'] },
    { id: 'safety', kind: 'system', x: 374, y: 114, name: 'AI Safety', labelAbove: true, file: '09-ai-safety-pipeline.md', kicker: 'AI layer', title: 'AI Safety Pipeline',
      body: 'A three layer defense: sanitize the input, run the model, validate the output. It wraps every untrusted string before a model ever sees it.',
      keywords: ['email-sanitizer','output-validator','prompt injection','PHI'], reviewed: '2026-05-01',
      roads: ['aiEmailSafety','aiSafetyGemini'] },
    { id: 'gemini', kind: 'system', x: 552, y: 114, name: 'Gemini', labelAbove: true, file: '07-gemini-integration.md', kicker: 'AI layer', title: 'Gemini Integration',
      body: 'Parsing, prompt cache, Vision OCR and narrative. parseEmail is the central call. Most of the codebase reaches a model through here.',
      keywords: ['gemini','parseEmail','prompt cache','Vision OCR'], reviewed: '2026-05-07',
      roads: ['aiEmailGemini','aiSafetyGemini','aiGeminiClaude'] },
    { id: 'claude', kind: 'system', x: 724, y: 114, name: 'Claude Voice', labelAbove: true, file: '08-claude-voice-engine.md', kicker: 'AI layer', title: 'Claude Voice Engine',
      body: 'The single chokepoint every notification surface speaks through. One hard rules file sets the voice for all of them at once.',
      keywords: ['claude','larkinClaude','hard rules','prompt caching'], reviewed: '2026-05-07',
      roads: ['aiNotifClaude','aiGeminiClaude'] },
    { id: 'pothole-docid', kind: 'pothole', x: 340, y: 298, name: 'pothole', kicker: 'Pothole, a gotcha', title: 'The doc ID recipe',
      body: 'email_metadata uses a SHA-256 doc ID recipe to stop duplicate writes. The recipe is repeated in three files. Change it in one and you orphan every existing doc.',
      roads: ['toEmail'] },
    { id: 'pothole-oauth', kind: 'pothole', x: 360, y: 310, name: 'pothole', kicker: 'Pothole, a gotcha', title: 'Shared OAuth scope',
      body: 'One Google OAuth grant is shared across email, calendar and vault. Narrow the scope for one feature and you quietly break the others.',
      roads: ['toCal'] },
    { id: 'pothole-dual', kind: 'pothole', x: 640, y: 118, name: 'pothole', kicker: 'Pothole, a gotcha', title: 'The dual model seam',
      body: 'Two models share the work. Gemini parses, Claude speaks, and one dispatcher routes between them. Treat the seam as a single model and the voice tears.',
      roads: ['aiGeminiClaude'] },
    { id: 'pothole-rtalert', kind: 'pothole', x: 528, y: 376, name: 'pothole', kicker: 'Pothole, a gotcha', title: 'The realTimeAlert trigger',
      body: 'realTimeAlert fires on every email_metadata write, and quietly creates gift conversation stubs. Touch the trigger and the ripple reaches gifts.',
      roads: ['ripEmailGifts'] },
    { id: 'construction', kind: 'construction', x: 468, y: 502, name: '[REVIEW NEEDED]', kicker: 'Construction zone', title: '[REVIEW NEEDED]',
      body: 'A flag marking state that is known imperfect and waiting on a fix. Agents working nearby tread carefully, and resolve the flag atomically when the fix lands.',
      roads: ['toVault'] },
    { id: 'cross', kind: 'junction', x: 772, y: 360, name: 'CROSS-SYSTEM', file: 'CROSS_SYSTEM_DEPENDENCIES.md', kicker: 'Intersection', title: 'Cross system dependencies',
      body: 'Where systems connect: which are foundational, and where a change in one ripples to the others. Foundational work routes through here before any code is written.',
      roads: ['emailX','calX','notifX','vaultX','giftsX','exit'] },
    { id: 'tollgate', kind: 'tollgate', x: 868, y: 360, name: 'pre-push hook', kicker: 'Tollgate', title: 'The pre push hook',
      body: 'A git hook blocks any push that changes source without touching the architecture docs. “This change is small, I’ll skip the review” is exactly when ripples get missed.',
      roads: ['exit','push'] }
  ];

  const AGENTS = [
    { road: 'entry', dur: '4.5s', begin: '0s' },
    { road: 'toEmail', dur: '8s', begin: '1.4s' },
    { road: 'toNotif', dur: '7s', begin: '0.6s' },
    { road: 'calX', dur: '5s', begin: '0.3s' },
    { road: 'aiNotifClaude', dur: '6.5s', begin: '2.1s' },
    { road: 'ripEmailGifts', dur: '9s', begin: '1.8s' },
    { road: 'exit', dur: '3.4s', begin: '0s' }
  ];

  const WORKFLOW = [
    { n: '01', label: 'Before', text: 'Read INDEX.md. Match the task to the keywords, load the sub documents in full, and state the ripple before writing code.' },
    { n: '02', label: 'After', text: 'Update interfaces, gotchas and cross system dependencies. Bump last reviewed dates. Resolve [REVIEW NEEDED] flags atomically.' },
    { n: '03', label: 'The hook', text: 'A pre push hook blocks any push that changes source without touching the docs. The workflow is binding, not advisory.' }
  ];

  /* tiny svg builder */
  const s = (tag, attrs, ...kids) => {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) if (attrs[k] !== null && attrs[k] !== undefined) e.setAttribute(k, attrs[k]);
    for (const k of kids.flat()) if (k !== null && k !== undefined) e.append(k.nodeType ? k : document.createTextNode(String(k)));
    return e;
  };
  const h = (tag, attrs, ...kids) => {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) if (k === 'class') e.className = attrs[k]; else e.setAttribute(k, attrs[k]);
    for (const k of kids.flat()) if (k !== null && k !== undefined) e.append(k.nodeType ? k : document.createTextNode(String(k)));
    return e;
  };

  function mark(f){
    const label = (y, text, extra) => s('text', {y, class: 'atlas-label' + (extra ? ' ' + extra : ''), 'text-anchor': 'middle'}, text);
    switch (f.kind) {
      case 'index': return [
        ...[0,60,120,180,240,300].map(deg => s('line', {x1:0, y1:-21, x2:0, y2:-28, class:'atlas-index-tick', transform:`rotate(${deg})`})),
        s('circle', {r:21, class:'atlas-town-ring'}), s('circle', {r:14, class:'atlas-town-disc'}), s('circle', {r:3.6, class:'atlas-town-core'}),
        label(44, 'INDEX.md')];
      case 'system': return [
        s('circle', {r:15, class:'atlas-town-ring'}), s('circle', {r:10, class:'atlas-town-disc'}), s('circle', {r:3, class:'atlas-town-core'}),
        label(f.labelAbove ? -26 : 34, f.name)];
      case 'junction': return [
        s('circle', {r:25, class:'atlas-town-ring'}), s('circle', {r:15, class:'atlas-junction-inner'}),
        ...[0,90,180,270].map(deg => s('circle', {cx:0, cy:-20, r:2.6, class:'atlas-town-core', transform:`rotate(${deg})`})),
        label(48, 'CROSS-SYSTEM')];
      case 'signpost': return [
        s('line', {x1:0, y1:22, x2:0, y2:-26, class:'atlas-post'}),
        ...[-22,-9,4].map(y => s('path', {d:`M-3,${y-5} L17,${y-5} L23,${y} L17,${y+5} L-3,${y+5} Z`, class:'atlas-fingerboard'})),
        label(44, 'routers')];
      case 'pothole': return [
        s('circle', {r:13, class:'atlas-pothole-ring'}),
        s('ellipse', {cx:-2, cy:1, rx:5.4, ry:3.4, class:'atlas-pothole-blob'}),
        s('ellipse', {cx:4, cy:-2.5, rx:3.4, ry:2.4, class:'atlas-pothole-blob'}),
        s('ellipse', {cx:3, cy:4, rx:3, ry:2, class:'atlas-pothole-blob'})];
      case 'construction': return [
        s('g', {transform:'rotate(-6)'},
          s('line', {x1:-34, y1:9, x2:-28, y2:-7, class:'atlas-barrier-leg'}), s('line', {x1:34, y1:9, x2:28, y2:-7, class:'atlas-barrier-leg'}),
          s('rect', {x:-42, y:-8, width:84, height:13, rx:2, fill:'url(#atlas-hatch)', class:'atlas-barrier-plank'})),
        label(34, '[REVIEW NEEDED]', 'atlas-label--flag')];
      case 'tollgate': return [
        s('line', {x1:-24, y1:16, x2:-24, y2:-20, class:'atlas-post'}), s('line', {x1:24, y1:16, x2:24, y2:-20, class:'atlas-post'}),
        s('g', {transform:'rotate(-15)'}, s('rect', {x:-24, y:-3, width:58, height:9, rx:2, fill:'url(#atlas-hatch)', class:'atlas-barrier-plank'})),
        s('circle', {cx:-24, cy:-20, r:4.5, class:'atlas-town-core'}),
        label(40, 'pre-push hook')];
    }
    return [];
  }

  function mount(host, detailHost){
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const svg = s('svg', {class:'atlas-svg', viewBox:'0 0 1000 560', role:'img', 'aria-label':'A road atlas of the living architecture documentation'});
    const defs = s('defs', null,
      s('radialGradient', {id:'atlas-paper', cx:'42%', cy:'36%', r:'78%'},
        s('stop', {offset:'0%', 'stop-color':'#FFFDF8'}), s('stop', {offset:'70%', 'stop-color':'#F5EFE3'}), s('stop', {offset:'100%', 'stop-color':'#E7DFCB'})),
      s('pattern', {id:'atlas-hatch', width:11, height:11, patternUnits:'userSpaceOnUse', patternTransform:'rotate(45)'},
        s('rect', {width:11, height:11, fill:'#FFFDF8'}), s('rect', {width:5.5, height:11, class:'atlas-hatch-bar'})));
    svg.append(defs,
      s('rect', {x:0, y:0, width:1000, height:560, fill:'url(#atlas-paper)'}),
      s('rect', {x:11, y:11, width:978, height:538, class:'atlas-frame-outer'}),
      s('rect', {x:18, y:18, width:964, height:524, class:'atlas-frame-inner'}),
      s('g', null, s('rect', {x:34, y:34, width:196, height:34, class:'atlas-cartouche'}), s('text', {x:132, y:56, class:'atlas-cartouche-text', 'text-anchor':'middle'}, 'codebase map')),
      s('g', {transform:'translate(912 88)'},
        s('circle', {r:33, class:'atlas-compass-ring'}), s('circle', {r:24, class:'atlas-compass-ring'}),
        ...[0,45,90,135,180,225,270,315].map(deg => s('line', {x1:0, y1:-24, x2:0, y2: deg % 90 === 0 ? -31 : -28, class:'atlas-compass-tick', transform:`rotate(${deg})`})),
        s('path', {d:'M0,-22 L6,0 L0,6 Z', class:'atlas-compass-n'}), s('path', {d:'M0,22 L-6,0 L0,6 Z', class:'atlas-compass-s'}),
        s('text', {x:0, y:-38, class:'atlas-compass-letter', 'text-anchor':'middle'}, 'N')),
      s('g', {'aria-hidden':'true'}, s('rect', {x:274, y:52, width:552, height:120, rx:8, class:'atlas-district'}), s('text', {x:550, y:66, 'text-anchor':'middle', class:'atlas-district-label'}, 'the AI layer')));

    const roadEls = {};
    const roads = s('g');
    ROADS.forEach(r => {
      const g = s('g', {class:'atlas-road-g'});
      if (!r.ripple) g.append(s('path', {d:r.d, class:'atlas-road-casing'}));
      g.append(s('path', {d:r.d, class:'atlas-road' + (r.major ? ' atlas-road--major' : '') + (r.stale ? ' atlas-road--stale' : '') + (r.ripple ? ' atlas-road--ripple' : '')}));
      roadEls[r.id] = g; roads.append(g);
    });
    svg.append(roads);

    if (motionOk) {
      const ag = s('g', {class:'atlas-agents', 'aria-hidden':'true'});
      AGENTS.forEach(a => { const c = s('circle', {r:3.4, class:'atlas-agent'}); c.append(s('animateMotion', {dur:a.dur, begin:a.begin, repeatCount:'indefinite', path:roadD(a.road)})); ag.append(c); });
      svg.append(ag);
    }

    svg.append(
      s('g', {class:'atlas-endpoint'}, s('circle', {cx:100, cy:360, r:5}), s('text', {x:100, y:338, 'text-anchor':'middle', class:'atlas-endpoint-label'}, 'agents enter')),
      s('g', {class:'atlas-endpoint'}, s('path', {d:'M926,360 l14,0 m-6,-5 l6,5 l-6,5', class:'atlas-endpoint-arrow'}), s('text', {x:933, y:338, 'text-anchor':'middle', class:'atlas-endpoint-label'}, 'git push')));

    const nodeEls = {};
    let activeId = null;
    const setActive = id => {
      activeId = id;
      FEATURES.forEach(f => { const el = nodeEls[f.id]; el.classList.toggle('is-active', id === f.id); el.classList.toggle('is-dimmed', id !== null && id !== f.id); });
      const lit = new Set(id ? FEATURES.find(f => f.id === id).roads : []);
      for (const k in roadEls) roadEls[k].classList.toggle('is-lit', lit.has(k));
      paintDetail();
    };
    FEATURES.forEach(f => {
      const g = s('g', {class:'atlas-node atlas-node--' + f.kind + (f.stale ? ' is-stale' : ''), transform:`translate(${f.x} ${f.y})`, tabindex:0, role:'button', 'aria-label': f.kicker + ': ' + f.title});
      g.append(s('title', null, f.title), ...mark(f), s('circle', {class:'atlas-hit', r:30}));
      g.addEventListener('mouseenter', () => setActive(f.id));
      g.addEventListener('mouseleave', () => setActive(null));
      g.addEventListener('focus', () => setActive(f.id));
      g.addEventListener('blur', () => setActive(null));
      g.addEventListener('click', e => { e.preventDefault(); setActive(activeId === f.id ? null : f.id); });
      nodeEls[f.id] = g; svg.append(g);
    });
    host.append(svg);

    function paintDetail(){
      detailHost.innerHTML = '';
      const f = activeId ? FEATURES.find(x => x.id === activeId) : null;
      const card = h('div', {class:'atlas-detail-card'});
      if (f) {
        card.append(h('div', {class:'atlas-detail-kicker'}, f.kicker), h('h3', {class:'atlas-detail-title'}, f.title), h('p', {class:'atlas-detail-body'}, f.body));
        if (f.file || f.keywords || f.reviewed) {
          const meta = h('div', {class:'atlas-detail-meta'});
          if (f.file) meta.append(h('span', {class:'atlas-file'}, f.file));
          if (f.keywords) meta.append(h('span', {class:'atlas-keywords'}, f.keywords.map(k => h('span', {class:'kw'}, k))));
          if (f.reviewed) meta.append(h('span', {class:'atlas-stamp' + (f.stale ? ' is-stale' : '')}, 'last reviewed ' + f.reviewed + (f.stale ? ', verify' : '')));
          card.append(meta);
        }
      } else {
        card.append(h('div', {class:'atlas-steps'}, WORKFLOW.map(w => h('div', {class:'atlas-step'}, h('span', {class:'atlas-step-n'}, w.n), h('div', null, h('div', {class:'atlas-step-label'}, w.label), h('p', {class:'atlas-step-text'}, w.text))))));
      }
      detailHost.append(card);
    }
    paintDetail();
  }

  return { mount, FEATURES, ROADS };
})();
