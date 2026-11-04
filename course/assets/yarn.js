/* The strand of yarn that joins the framework on the home page (Jade, Nov 4).
   It is drawn here as one SVG so that, while the framework is hovered, the whole
   string can sway gently. The twists ride along with the string; they never slide
   along it (sliding twists strobed). Still for anyone who prefers reduced motion.
   If this script does not run, the still yarn in course.css shows instead. */
(function(){
  const hl=document.getElementById('hl'), beam=hl&&hl.querySelector('.beam');
  if(!beam||!window.requestAnimationFrame)return;
  const NS='http://www.w3.org/2000/svg', W=40, C=W/2;
  const svg=document.createElementNS(NS,'svg'), body=document.createElementNS(NS,'path'),
        lite=document.createElementNS(NS,'path'), dark=document.createElementNS(NS,'path');
  svg.setAttribute('aria-hidden','true'); svg.setAttribute('focusable','false');
  body.setAttribute('fill','none'); body.setAttribute('stroke','#74A29D'); body.setAttribute('stroke-width','4.6');
  body.setAttribute('stroke-linecap','round'); body.setAttribute('stroke-linejoin','round');
  lite.setAttribute('fill','none'); lite.setAttribute('stroke','#BFDAD5'); lite.setAttribute('stroke-width','1.15'); lite.setAttribute('stroke-linecap','round');
  dark.setAttribute('fill','none'); dark.setAttribute('stroke','#3F726D'); dark.setAttribute('stroke-width','.8'); dark.setAttribute('stroke-linecap','round'); dark.setAttribute('opacity','.5');
  svg.append(body,lite,dark); beam.appendChild(svg); beam.classList.add('yarn-live');

  const TAU=Math.PI*2, SPEED=TAU/2.8;
  let H=0, amp=0, goal=0, t=0, last=0, running=false;
  /* the resting shape matches the still tile in course.css */
  const rest=y=>3.2*Math.sin(TAU*y/192)+0.9*Math.sin(TAU*3*y/192+0.7);
  const sway=y=>amp*(3.4*Math.sin(Math.PI*y/260)*Math.sin(t*SPEED)+1.8*Math.sin(TAU*y/520-0.6*t*SPEED));
  const X=y=>C+rest(y)+(amp?sway(y):0);
  function draw(){
    let b='', l='', d='';
    for(let y=0;y<=H;y+=2) b+=(y?'L':'M')+X(y).toFixed(2)+','+y;
    for(let y=2;y<H;y+=4){
      const x=X(y), s=X(y+1)-X(y-1);
      l+='M'+(x-2).toFixed(2)+','+(y+1.9-s).toFixed(2)+'Q'+x.toFixed(2)+','+(y+.5)+' '+(x+2).toFixed(2)+','+(y-1.9+s).toFixed(2);
      d+='M'+(x-2).toFixed(2)+','+(y+3.6-s).toFixed(2)+'Q'+x.toFixed(2)+','+(y+2.4)+' '+(x+2).toFixed(2)+','+(y+.4+s).toFixed(2);
    }
    body.setAttribute('d',b); lite.setAttribute('d',l); dark.setAttribute('d',d);
  }
  function size(){
    const h=Math.round(beam.getBoundingClientRect().height);
    if(h===H)return; H=h; svg.setAttribute('width',W); svg.setAttribute('height',H); svg.setAttribute('viewBox','0 0 '+W+' '+H); draw();
  }
  function frame(now){
    const dt=Math.min(.05,(now-(last||now))/1000); last=now; t+=dt;
    amp+=(goal-amp)*Math.min(1,dt*2.2);
    if(goal===0&&amp<.003){amp=0;draw();running=false;last=0;return}
    draw(); requestAnimationFrame(frame);
  }
  function start(){ if(!running){running=true;requestAnimationFrame(frame)} }
  size();
  if(window.ResizeObserver)new ResizeObserver(size).observe(beam); else addEventListener('resize',size);
  const still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)');
  /* only a real mouse sets it swaying: a tap on a phone would leave it running */
  hl.addEventListener('pointerenter',e=>{ if(e.pointerType!=='mouse'||(still&&still.matches))return; goal=1; start(); });
  hl.addEventListener('pointerleave',()=>{ goal=0; });
})();
