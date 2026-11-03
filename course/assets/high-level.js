/* The high level on the home page: the Journey road with its nine signs, the Council medallion, and the centre line. Needs CF from course.js. */
(function(){
const D=id=>document.getElementById(id), esc=CF.esc;
D('ns-btn').onclick=()=>CF.openProblem('northstar');
D('f-more').onclick=()=>CF.openProblem('foundation');
/* 2. the road: the trail traced on the photo, turned to climb toward the star, then stretched edge to edge */
const PTS=[[0,382],[90,378],[180,355],[270,318],[350,280],[420,270],[470,290],[520,350],[560,440],[600,500],[660,532],[730,530],[790,490],[850,400],[910,320],[960,280],[1024,262]];
const X0=0, X1=1024, Y0=120, Y1=660; /* the slice of the illustration that shows */
function smooth(p){let d='M'+p[0];for(let i=0;i<p.length-1;i++){const a=p[i-1]||p[i],b=p[i],c=p[i+1],e=p[i+2]||c;
  d+=' C'+(b[0]+(c[0]-a[0])/6)+','+(b[1]+(c[1]-a[1])/6)+' '+(c[0]-(e[0]-b[0])/6)+','+(c[1]-(e[1]-b[1])/6)+' '+c}return d}
const NS='http://www.w3.org/2000/svg';
const el=(t,a)=>{const n=document.createElementNS(NS,t);for(const k in a)n.setAttribute(k,a[k]);return n};
const TILT=[-5,3,-2,4,-3,2,-4,3,-2];
const svg=D('roadsvg'), trail=D('trail'), signs=D('signs');
STAGES.forEach(s=>{const li=document.createElement('li');li.innerHTML='<button type="button"><span>'+s.n+'</span>'+esc(s.title)+'</button>';li.firstChild.onclick=()=>showStage(s);D('stagelist').appendChild(li)});
let lastW=0;
function layout(){
  const W=Math.round(svg.getBoundingClientRect().width); if(!W||W===lastW)return; lastW=W;
  const small=W<1180, tiny=W<640; /* below 1180px the names collide, so signs show numbers and the list below names them */
  D('stagelist').classList.toggle('show',small);
  const H=Math.round(Math.min(560,Math.max(tiny?260:320,W*0.42)));
  const TOP=tiny?52:104, sx=W/(X1-X0), sy=H/(Y1-Y0);
  svg.setAttribute('viewBox','0 0 '+W+' '+(TOP+H)); svg.setAttribute('height',TOP+H);
  const img=D('roadimg'); img.setAttribute('x',-X0*sx); img.setAttribute('y',TOP+(190-Y0)*sy); img.setAttribute('width',1024*sx); img.setAttribute('height',430*sy); /* road-only.webp is rows 190 to 620 of the illustration, the road alone */
  const m=D('mrect'); m.setAttribute('x',0); m.setAttribute('y',TOP); m.setAttribute('width',W); m.setAttribute('height',H);
  trail.setAttribute('d',smooth(PTS.map(([x,y])=>[+((x-X0)*sx).toFixed(1),+(TOP+(y-Y0)*sy).toFixed(1)])));
  const L=trail.getTotalLength(); signs.textContent='';
  STAGES.forEach((s,i)=>{
    const p=trail.getPointAtLength(L*(0.06+i*(0.88/8)));
    const h=tiny?(i%2?36:18):small?(i%2?54:28):(i%2?74:40);
    const k=1; /* far signs are smaller */
    const g=el('g',{class:'sign',transform:'translate('+p.x.toFixed(1)+','+p.y.toFixed(1)+') scale('+k.toFixed(2)+')',tabindex:small?'-1':'0',role:'button','aria-label':'Stage '+s.n+', '+s.title});
    if(small)g.setAttribute('aria-hidden','true'); /* the list below is the one screen readers hear */
    g.appendChild(el('ellipse',{class:'foot',cx:0,cy:0,rx:small?4:7,ry:small?2:3}));
    const inner=el('g',{class:'g'});
    inner.appendChild(el('line',{class:'post',x1:0,y1:0,x2:0,y2:-h}));
    if(small){
      const z=tiny?1:1.35, b=el('g',{transform:'translate(0,'+(-h-15*z)+') rotate('+TILT[i]+') scale('+z+')'});
      b.appendChild(el('rect',{class:'board',x:-15,y:-15,width:30,height:30,rx:3}));
      const big=el('text',{class:'big',x:0,y:1});big.textContent=s.n; b.appendChild(big); inner.appendChild(b);
    }else{
      const w=Math.max(116,s.title.length*12+36);
      const z=Math.min(1,W/1300), b=el('g',{transform:'translate(0,'+(-h-26*z)+') rotate('+TILT[i]+') scale('+z.toFixed(3)+')'}); /* boards shrink a little on narrower laptops so neighbours never touch */
      b.appendChild(el('rect',{class:'board',x:-w/2,y:-26,width:w,height:52,rx:3}));
      const no=el('text',{class:'no',x:0,y:-11});no.textContent=s.n;
      const nm=el('text',{class:'nm',x:0,y:8});nm.textContent=s.title;
      b.append(no,nm); inner.appendChild(b);
    }
    g.appendChild(inner); signs.appendChild(g);
    const go=()=>showStage(s); g.addEventListener('click',go); g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
  });
}
layout(); addEventListener('resize',layout);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{lastW=0;layout()});
function showStage(s){CF.openStage(s.n)}

/* 3. the Council medallion */
const stage=D('stage'), ring=D('ring'), lines=D('lines');
const ORDER=['witness','questioner','merchant','artisan','architect','groundskeeper','medium','responder','longgame'];
lines.appendChild(el('circle',{cx:0,cy:0,r:330}));
ORDER.forEach((id,i)=>{
  const v=VOICES[id]; const a=i*360/ORDER.length; const rad=(a-90)*Math.PI/180;
  lines.appendChild(el('line',{x1:0,y1:0,x2:(Math.cos(rad)*330).toFixed(1),y2:(Math.sin(rad)*330).toFixed(1)}));
  const b=document.createElement('button'); b.type='button'; b.className='node'; b.style.setProperty('--a',a+'deg'); b.tabIndex=-1;
  b.setAttribute('aria-label',v.name+', '+v.council);
  b.innerHTML='<span class="disc" style="background-image:url('+CF.THUMB(id)+')"></span><span class="lbl">'+esc(v.name.replace(/^The /,''))+'<small>'+esc(v.council.replace(/ Council$/,''))+'</small></span>';
  b.onclick=e=>{e.stopPropagation();CF.openVoice(id)};
  ring.appendChild(b);
});
const hub=D('hub');
function setOpen(on){stage.classList.toggle('open',on);
  /* closed, the ring is one button; open, it is a group holding the nine voice buttons and the hub */
  if(on){ring.setAttribute('role','group');ring.removeAttribute('aria-expanded');ring.setAttribute('aria-label','The Council');ring.tabIndex=-1}
  else{ring.setAttribute('role','button');ring.setAttribute('aria-expanded','false');ring.setAttribute('aria-label','Open the Council');ring.tabIndex=0}
  ring.querySelectorAll('.node').forEach(n=>n.tabIndex=on?0:-1); hub.tabIndex=on?0:-1}
hub.tabIndex=-1;
stage.addEventListener('keydown',e=>{if(e.key==='Escape'&&stage.classList.contains('open')&&!document.querySelector('.drawer.open,[aria-modal=true]:not([hidden])')){setOpen(false);ring.focus()}});
ring.addEventListener('click',()=>{if(!stage.classList.contains('open'))setOpen(true)});
ring.addEventListener('keydown',e=>{if(e.target===ring&&(e.key==='Enter'||e.key===' ')){e.preventDefault();setOpen(!stage.classList.contains('open'))}});
D('hub').onclick=e=>{e.stopPropagation();setOpen(false);ring.focus()};

/* the line runs from the star's centre to the top of the map */
function placeLine(){
  const hl=D('hl'), b=hl.querySelector('.beam'), H=hl.getBoundingClientRect();
  const s=D('ns-btn').getBoundingClientRect(), a=D('atlas').getBoundingClientRect();
  const top=s.top+s.height/2-H.top, bot=a.top-H.top+20;
  b.style.top=top+'px'; b.style.height=Math.max(0,bot-top)+'px';
}
placeLine(); addEventListener('resize',placeLine);
if(window.ResizeObserver)new ResizeObserver(placeLine).observe(D('hl'));

})();
