/* The Counterpoint mark, drifting, on cream. Ported from the logo sketch's first motion study (A, the web holds):
   ten voices on a ring, each tied to every other. The lines stretch and slacken; the web never breaks.
   Dots in the Holding Up the House colours plus olive. Line tones are deep teal blended for the cream ground. */
const CPMark = (function(){
  const NS = 'http://www.w3.org/2000/svg', C = 200, R = 148, N = 10;
  const NODES = ['#C0652F','#1C3536','#ECB978','#6E8E90','#A9472A','#1C3536','#ECB978','#6E8E90','#C0652F','#7A7A3A'];
  const CHORD = 'rgba(28,53,54,.42)';          /* the sketch's deep teal line on cream */
  const SPAN_OPACITY = [0,1,.75,.55,.42,.32];   /* lines that cross the middle run fainter, as in the sketch */
  const BEAD = '#1C3536';                        /* deep teal: the still mark's cream beads would vanish on cream */
  const el = (t, a, p) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; };
  const seat = i => { const a = -Math.PI/2 + i*2*Math.PI/N; return [C + R*Math.cos(a), C + R*Math.sin(a)]; };
  const pairs = []; for (let i = 0; i < N; i++) for (let j = i+1; j < N; j++) pairs.push([i, j]);
  function mount(host, {stroke = 2, nodeR = 24, amp = 11} = {}){
    const svg = el('svg', {viewBox:'0 0 400 400', role:'img', 'aria-label':'The Counterpoint mark: ten council voices on a ring, each joined to every other'}, host);
    const gl = el('g', {}, svg), gn = el('g', {}, svg);
    const lines = pairs.map(([i, j]) => { const s = Math.min(j-i, N-(j-i)); return el('line', {stroke: CHORD, 'stroke-width': stroke, 'stroke-linecap':'round', 'stroke-opacity': SPAN_OPACITY[s]}, gl); });
    /* beads where three or more lines meet, as on the final still mark. Found once at rest; each frame
       a bead sits at the average crossing of its own lines, so it rides along as the web stretches. */
    const gb = el('g', {}, svg); svg.insertBefore(gb, gn);
    const seg = pos => pairs.map(([i, j]) => [pos[i], pos[j]]);
    const cross = (a, b) => {
      const [[x1,y1],[x2,y2]] = a, [[x3,y3],[x4,y4]] = b, d = (x1-x2)*(y3-y4) - (y1-y2)*(x3-x4);
      if (Math.abs(d) < 1e-9) return null;
      const t = ((x1-x3)*(y3-y4) - (y1-y3)*(x3-x4)) / d, u = -((x1-x2)*(y1-y3) - (y1-y2)*(x1-x3)) / d;
      if (t <= .02 || t >= .98 || u <= .02 || u >= .98) return null;
      return [x1 + t*(x2-x1), y1 + t*(y2-y1)];
    };
    const meets = (() => {
      const S = seg(NODES.map((_, i) => seat(i))), found = [];
      for (let a = 0; a < S.length; a++) for (let b = a+1; b < S.length; b++) {
        const p = cross(S[a], S[b]); if (!p) continue;
        let m = found.find(f => Math.hypot(f.p[0]-p[0], f.p[1]-p[1]) < .6);
        if (!m) { m = {p, lines: new Set()}; found.push(m); }
        m.lines.add(a); m.lines.add(b);
      }
      return found.filter(f => f.lines.size >= 3).map(f => ({lines: [...f.lines], big: f.lines.size > 3}));
    })();
    const beads = meets.map(m => el('circle', {r: m.big ? 4.6 : 3.4, fill: BEAD}, gb));
    const nodes = NODES.map(c => el('circle', {r: nodeR, fill: c}, gn));
    const place = pos => {
      pairs.forEach(([i, j], n) => { const l = lines[n]; l.setAttribute('x1', pos[i][0]); l.setAttribute('y1', pos[i][1]); l.setAttribute('x2', pos[j][0]); l.setAttribute('y2', pos[j][1]); });
      nodes.forEach((g, i) => { g.setAttribute('cx', pos[i][0]); g.setAttribute('cy', pos[i][1]); });
      const S = seg(pos);
      meets.forEach((m, k) => {
        let x = 0, y = 0, n = 0;
        for (let a = 0; a < m.lines.length; a++) for (let b = a+1; b < m.lines.length; b++) {
          const p = cross(S[m.lines[a]], S[m.lines[b]]); if (p) { x += p[0]; y += p[1]; n++; }
        }
        if (n) { beads[k].setAttribute('cx', x/n); beads[k].setAttribute('cy', y/n); }
      });
    };
    const base = () => NODES.map((_, i) => seat(i));
    const drift = t => NODES.map((_, i) => { const [x, y] = seat(i); return [x + amp*Math.sin(t*.0007*(1+i*.13) + i*1.7), y + amp*Math.cos(t*.0006*(1+i*.11) + i*2.3)]; });
    place(base());
    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return svg;
    (function f(t){ place(drift(t)); requestAnimationFrame(f); })(0);
    return svg;
  }
  return { mount };
})();
