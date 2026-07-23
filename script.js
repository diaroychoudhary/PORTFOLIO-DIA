/* ============================================================
   DIA ROY CHOUDHARY — PORTFOLIO SCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- DATA ---------- */
  const DATA = {
    roles: [
      'Aspiring Software Engineer',
      'AI / ML Enthusiast',
      'Web Developer',
      'Debater & Storyteller',
      'Bharatanatyam Dancer'
    ],
    experience: [
      {
        org: 'InAmigos Foundation', period: '2025',
        role: 'Content Writing Intern',
        points: [
          'Completed an internship focused on content writing and awareness campaigns.',
          'Worked on Project Jeev, an animal welfare and compassion initiative.',
          'Created awareness content and creative campaigns related to animal welfare.',
          'Developed skills in creative writing, communication, social awareness, and digital content creation.'
        ]
      },
      {
        org: 'InAmigos Foundation', period: '2025',
        role: 'Web Development Intern',
        points: ['Completed an internship in web development.']
      },
      {
        org: 'City Montessori School', period: 'Class 11',
        role: 'Social Media Marketing Intern',
        points: [
          'Completed a one-year Social Media Marketing Internship during Class 11.',
          'Gained practical experience in social media marketing and digital content.',
          'Received recognition from the School Manager, Ms. Gita Gandhi Kingdon, for good performance.'
        ]
      }
    ],
    awards: [
      'Talent Star Award — JPS Talent Stars Hub',
      'Bal Awadh Ratna Award — 2018',
      "Second Consolation — International Odyssey's Competition",
      'Progress Award — Class 9',
      'Awarded for Proficiency in Spoken English',
      'Awarded for Classical Dance (Bharatanatyam)',
      'Recognition for good performance in Social Media Marketing Internship',
      'Won multiple debate competitions',
      'Multiple appreciations in Spell Bee Championships (primary school)'
    ],
    certs: [
      { name: 'HTML Coding Course', source: 'SoloLearn' },
      { name: 'Python Coding Course', source: 'Udemy' },
      { name: 'Responsible AI Course', source: 'Simplilearn / Google Cloud' },
      { name: 'Proficiency in Spoken English', source: 'Awarded certification' },
      { name: 'Classical Dance — Bharatanatyam', source: 'Awarded certification' }
    ],
    impact: [
      'Participated in school-level plantation drives.',
      'Participated in school-level cleanliness drives.',
      'Visited an old age home and an NGO as part of social outreach activities.',
      'Participated in initiatives to spread happiness and support people in care, including cancer patients.',
      'Tied Rakhis on the wrists of Army officers as a gesture of respect and gratitude.'
    ],
    interests: [
      'Coding & Web Development', 'AI & Machine Learning', 'Learning New Programming Languages',
      'Creative Writing & Reading Novels', 'Dancing / Bharatanatyam', 'Social Media & Digital Marketing'
    ],
    softSkills: [
      'Leadership','Communication','Teamwork & Collaboration','Critical / Higher-Order Thinking',
      'Creativity & Creative Writing','Public Speaking & Debate','Event Organization & Coordination',
      'Adaptability & Versatility','Time Management & Initiative','Interpersonal Skills',
      'Willingness to Learn','Presentation Skills'
    ],
    skillNodes: [
      { id:'java', label:'Java', cat:'lang', r:26 },
      { id:'python', label:'Python', cat:'lang', r:28 },
      { id:'js', label:'JavaScript', cat:'lang', r:27 },
      { id:'html', label:'HTML', cat:'web', r:24 },
      { id:'css', label:'CSS', cat:'web', r:24 },
      { id:'ai', label:'Artificial Intelligence', cat:'ai', r:32 },
      { id:'ml', label:'Machine Learning', cat:'ai', r:30 },
      { id:'rai', label:'Responsible AI', cat:'ai', r:24 },
      { id:'social', label:'Social Media Marketing', cat:'other', r:26 },
      { id:'content', label:'Content Writing', cat:'other', r:24 },
      { id:'problem', label:'Problem Solving', cat:'other', r:22 },
      { id:'lead', label:'Leadership', cat:'soft', r:22 },
      { id:'comm', label:'Communication', cat:'soft', r:22 },
      { id:'debate', label:'Public Speaking', cat:'soft', r:22 }
    ],
    skillLinks: [
      ['java','problem'],['python','ai'],['python','ml'],['js','html'],['js','css'],
      ['html','css'],['ai','ml'],['ai','rai'],['ml','rai'],['social','content'],
      ['content','comm'],['lead','comm'],['comm','debate'],['problem','ai'],['debate','lead'],
      ['python','problem']
    ]
  };

  /* ---------- THEME TOGGLE ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('drc-theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme','dark');

  themeToggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('drc-theme', isDark ? 'light' : 'dark');
  });

  /* ---------- CUSTOM CURSOR ---------- */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('has-fine-pointer');
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let rx=0, ry=0, dx=0, dy=0;
    window.addEventListener('mousemove', e=>{
      dot.style.left = e.clientX+'px'; dot.style.top = e.clientY+'px';
      rx = e.clientX; ry = e.clientY;
    });
    (function loop(){
      dx += (rx-dx)*0.18; dy += (ry-dy)*0.18;
      ring.style.left = dx+'px'; ring.style.top = dy+'px';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a,button,.chip,.tab-btn,.interest-tag').forEach(el=>{
      el.addEventListener('mouseenter', ()=>ring.classList.add('hovered'));
      el.addEventListener('mouseleave', ()=>ring.classList.remove('hovered'));
    });
  }

  /* ---------- NAV SCROLL STATE + PROGRESS BAR ---------- */
  const nav = document.getElementById('nav');
  const progressFill = document.getElementById('progressFill');
  const navAnchors = document.querySelectorAll('[data-nav]');
  const sections = document.querySelectorAll('section[id]');

  function onScroll(){
    nav.classList.toggle('scrolled', window.scrollY > 40);
    const h = document.documentElement;
    const scrollPct = (h.scrollTop || document.body.scrollTop) / ((h.scrollHeight||document.body.scrollHeight) - h.clientHeight);
    progressFill.style.width = Math.min(scrollPct*100,100)+'%';

    let current = '';
    sections.forEach(sec=>{
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navAnchors.forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href') === '#'+current);
    });
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* ---------- MOBILE MENU ---------- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', ()=>{
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    burger.classList.remove('open'); mobileMenu.classList.remove('open');
  }));

  /* ---------- TYPED ROLE ---------- */
  const typedEl = document.getElementById('typedRole');
  let roleIdx = 0, charIdx = 0, deleting = false;
  function typeLoop(){
    const full = DATA.roles[roleIdx];
    if (!deleting){
      charIdx++;
      typedEl.textContent = full.slice(0, charIdx);
      if (charIdx === full.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      charIdx--;
      typedEl.textContent = full.slice(0, charIdx);
      if (charIdx === 0){ deleting = false; roleIdx = (roleIdx+1) % DATA.roles.length; }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  /* ---------- HERO STAT COUNTERS ---------- */
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        const el = entry.target;
        const target = +el.dataset.count;
        let cur = 0;
        const step = Math.max(1, Math.round(target/30));
        const tick = ()=>{
          cur += step;
          if (cur >= target){ el.textContent = target; return; }
          el.textContent = cur;
          requestAnimationFrame(tick);
        };
        tick();
        statObserver.unobserve(el);
      }
    });
  }, { threshold: .6 });
  statNums.forEach(el=>statObserver.observe(el));

  /* ---------- SCROLL REVEAL ---------- */
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .15 });

  function makeReveal(el){ el.classList.add('reveal'); revealObserver.observe(el); }

  /* ---------- LANGUAGE BARS ---------- */
  const langBarObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){ entry.target.classList.add('in'); langBarObserver.unobserve(entry.target); }
    });
  }, { threshold:.4 });
  document.querySelectorAll('.lang-bar').forEach(el=>langBarObserver.observe(el));

  /* ---------- BUILD TIMELINE ---------- */
  const timelineEl = document.getElementById('timeline');
  DATA.experience.forEach(job=>{
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.innerHTML = `
      <div class="tl-org">${job.org} — ${job.period}</div>
      <h3 class="tl-role">${job.role}</h3>
      <ul>${job.points.map(p=>`<li>${p}</li>`).join('')}</ul>
    `;
    timelineEl.appendChild(item);
    makeReveal(item);
  });
  // separately observe for the dot fill-in state
  const tlDotObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold:.5 });
  document.querySelectorAll('.tl-item').forEach(el=>tlDotObserver.observe(el));

  /* ---------- BUILD AWARDS ---------- */
  const awardGrid = document.getElementById('awardGrid');
  DATA.awards.forEach((a,i)=>{
    const card = document.createElement('div');
    card.className = 'award-card';
    card.innerHTML = `<span class="award-icon">AWD / ${String(i+1).padStart(2,'0')}</span><p>${a}</p>`;
    awardGrid.appendChild(card);
    makeReveal(card);
  });

  /* ---------- BUILD CERTS ---------- */
  const certList = document.getElementById('certList');
  DATA.certs.forEach(c=>{
    const row = document.createElement('div');
    row.className = 'cert-row';
    row.innerHTML = `<span class="cert-name">${c.name}</span><span class="cert-source">${c.source}</span>`;
    certList.appendChild(row);
  });

  /* ---------- ACHIEVEMENT TABS ---------- */
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
    });
  });

  /* ---------- BUILD IMPACT ---------- */
  const impactRow = document.getElementById('impactRow');
  DATA.impact.forEach((p,i)=>{
    const item = document.createElement('div');
    item.className = 'impact-item';
    item.innerHTML = `<span class="impact-num">${String(i+1).padStart(2,'0')}</span><p>${p}</p>`;
    impactRow.appendChild(item);
    makeReveal(item);
  });

  /* ---------- BUILD INTERESTS ---------- */
  const interestCloud = document.getElementById('interestCloud');
  DATA.interests.forEach(t=>{
    const tag = document.createElement('span');
    tag.className = 'interest-tag';
    tag.textContent = t;
    interestCloud.appendChild(tag);
  });

  /* ---------- BUILD SOFT SKILLS ---------- */
  const softGrid = document.getElementById('softSkillsGrid');
  DATA.softSkills.forEach(s=>{
    const pill = document.createElement('div');
    pill.className = 'soft-pill';
    pill.innerHTML = `<i></i>${s}`;
    softGrid.appendChild(pill);
  });

  /* ---------- COPY EMAIL ---------- */
  const copyBtn = document.getElementById('copyEmail');
  const toast = document.createElement('div');
  toast.className = 'toast';
  document.body.appendChild(toast);
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), 2400);
  }
  copyBtn.addEventListener('click', async ()=>{
    const val = copyBtn.dataset.value;
    try{
      await navigator.clipboard.writeText(val);
      showToast('Email copied to clipboard');
    }catch(e){
      showToast(val);
    }
  });

  /* ---------- CONTACT FORM (demo) ---------- */
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    showToast('Thanks! This demo form doesn\u2019t send messages — email her directly.');
    form.reset();
  });

  /* ---------- BACK TO TOP ---------- */
  document.getElementById('toTop').addEventListener('click', ()=>{
    window.scrollTo({ top:0, behavior:'smooth' });
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- HERO MESH CANVAS (ambient network) ---------- */
  const meshCanvas = document.getElementById('meshCanvas');
  const mctx = meshCanvas.getContext('2d');
  let mW, mH, meshPoints = [];

  function resizeMesh(){
    const hero = document.querySelector('.hero');
    mW = meshCanvas.width = hero.offsetWidth * devicePixelRatio;
    mH = meshCanvas.height = hero.offsetHeight * devicePixelRatio;
    meshCanvas.style.width = hero.offsetWidth+'px';
    meshCanvas.style.height = hero.offsetHeight+'px';
    const count = Math.round((hero.offsetWidth * hero.offsetHeight) / 32000);
    meshPoints = Array.from({length: count}, ()=>({
      x: Math.random()*mW, y: Math.random()*mH,
      vx: (Math.random()-.5)*0.25*devicePixelRatio, vy: (Math.random()-.5)*0.25*devicePixelRatio
    }));
  }
  function isDark(){ return root.getAttribute('data-theme') === 'dark'; }
  function drawMesh(){
    mctx.clearRect(0,0,mW,mH);
    const lineColor = isDark() ? '255,255,255' : '30,29,27';
    meshPoints.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > mW) p.vx *= -1;
      if (p.y < 0 || p.y > mH) p.vy *= -1;
    });
    for (let i=0;i<meshPoints.length;i++){
      for (let j=i+1;j<meshPoints.length;j++){
        const a = meshPoints[i], b = meshPoints[j];
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        const maxD = 140*devicePixelRatio;
        if (d < maxD){
          mctx.strokeStyle = `rgba(${lineColor},${(1-d/maxD)*0.18})`;
          mctx.lineWidth = 1;
          mctx.beginPath(); mctx.moveTo(a.x,a.y); mctx.lineTo(b.x,b.y); mctx.stroke();
        }
      }
      mctx.fillStyle = `rgba(${lineColor},0.35)`;
      mctx.beginPath(); mctx.arc(meshPoints[i].x, meshPoints[i].y, 1.6*devicePixelRatio, 0, Math.PI*2); mctx.fill();
    }
    requestAnimationFrame(drawMesh);
  }
  resizeMesh();
  requestAnimationFrame(drawMesh);
  window.addEventListener('resize', resizeMesh);

  /* ---------- SKILLS NETWORK GRAPH ---------- */
  const sc = document.getElementById('skillsCanvas');
  const sctx = sc.getContext('2d');
  const tooltip = document.getElementById('skillsTooltip');
  const wrap = document.querySelector('.skills-canvas-wrap');
  let sW, sH;
  let nodes = [];
  let links = DATA.skillLinks;
  let activeFilter = 'all';
  let dragNode = null, hoverNode = null;

  const catColor = {
    lang:  { light:'#1E1D1B', dark:'#F3F1EC' },
    web:   { light:'#55534E', dark:'#C7C5C0' },
    ai:    { light:'#1E1D1B', dark:'#F3F1EC' },
    other: { light:'#8E8C86', dark:'#8E8C86' },
    soft:  { light:'#A9A6A0', dark:'#6f6d67' }
  };

  function resizeSkills(){
    sW = sc.width = wrap.clientWidth * devicePixelRatio;
    sH = sc.height = wrap.clientHeight * devicePixelRatio;
    sc.style.width = wrap.clientWidth+'px';
    sc.style.height = wrap.clientHeight+'px';
  }
  function initNodes(){
    nodes = DATA.skillNodes.map(n=>({
      ...n,
      x: Math.random()*sW*0.8 + sW*0.1,
      y: Math.random()*sH*0.8 + sH*0.1,
      vx: 0, vy: 0
    }));
  }
  resizeSkills();
  initNodes();

  function visible(n){ return activeFilter==='all' || n.cat===activeFilter; }

  function physicsStep(){
    // gentle repulsion + link attraction + center pull
    const cx = sW/2, cy = sH/2;
    nodes.forEach(n=>{
      if (n === dragNode) return;
      let fx=0, fy=0;
      nodes.forEach(o=>{
        if (o===n) return;
        const dx = n.x-o.x, dy = n.y-o.y;
        const d2 = dx*dx+dy*dy || 1;
        const d = Math.sqrt(d2);
        const minD = (n.r+o.r+30)*devicePixelRatio;
        if (d < minD){
          const f = (minD-d)/minD * 0.6;
          fx += (dx/d)*f; fy += (dy/d)*f;
        }
      });
      links.forEach(([a,b])=>{
        let other = null;
        if (a===n.id) other = nodes.find(x=>x.id===b);
        else if (b===n.id) other = nodes.find(x=>x.id===a);
        if (other){
          const dx = other.x-n.x, dy = other.y-n.y;
          fx += dx*0.0025; fy += dy*0.0025;
        }
      });
      fx += (cx-n.x)*0.0012; fy += (cy-n.y)*0.0012;
      n.vx = (n.vx+fx)*0.82; n.vy = (n.vy+fy)*0.82;
      n.x += n.vx; n.y += n.vy;
      const pad = n.r*devicePixelRatio;
      n.x = Math.max(pad, Math.min(sW-pad, n.x));
      n.y = Math.max(pad, Math.min(sH-pad, n.y));
    });
  }

  function drawSkills(){
    sctx.clearRect(0,0,sW,sH);
    const dark = isDark();
    const lineColor = dark ? '255,255,255' : '30,29,27';

    links.forEach(([a,b])=>{
      const na = nodes.find(n=>n.id===a), nb = nodes.find(n=>n.id===b);
      if (!na || !nb) return;
      const fade = (visible(na) && visible(nb)) ? 0.28 : 0.05;
      sctx.strokeStyle = `rgba(${lineColor},${fade})`;
      sctx.lineWidth = devicePixelRatio;
      sctx.beginPath(); sctx.moveTo(na.x,na.y); sctx.lineTo(nb.x,nb.y); sctx.stroke();
    });

    nodes.forEach(n=>{
      const on = visible(n);
      const col = catColor[n.cat][dark?'dark':'light'];
      sctx.globalAlpha = on ? 1 : 0.12;
      sctx.beginPath();
      sctx.arc(n.x, n.y, n.r*devicePixelRatio*(n===hoverNode?1.12:1), 0, Math.PI*2);
      sctx.fillStyle = dark ? '#1c1b18' : '#ffffff';
      sctx.fill();
      sctx.lineWidth = (n===hoverNode?2:1.2)*devicePixelRatio;
      sctx.strokeStyle = col;
      sctx.stroke();

      sctx.fillStyle = col;
      sctx.font = `${(n.cat==='lang'||n.cat==='ai'?11:10)*devicePixelRatio}px 'JetBrains Mono', monospace`;
      sctx.textAlign = 'center'; sctx.textBaseline = 'middle';
      // wrap long labels
      const words = n.label.split(' ');
      if (words.length > 1 && n.label.length > 10){
        sctx.fillText(words[0], n.x, n.y - 6*devicePixelRatio);
        sctx.fillText(words.slice(1).join(' '), n.x, n.y + 6*devicePixelRatio);
      } else {
        sctx.fillText(n.label, n.x, n.y);
      }
      sctx.globalAlpha = 1;
    });
  }

  function loopSkills(){
    physicsStep();
    drawSkills();
    requestAnimationFrame(loopSkills);
  }
  requestAnimationFrame(loopSkills);
  window.addEventListener('resize', ()=>{ resizeSkills(); });

  function getPos(e){
    const rect = sc.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x:(clientX-rect.left)*devicePixelRatio, y:(clientY-rect.top)*devicePixelRatio };
  }
  function nodeAt(pos){
    return nodes.find(n=> visible(n) && Math.hypot(n.x-pos.x, n.y-pos.y) < n.r*devicePixelRatio);
  }
  sc.addEventListener('mousemove', e=>{
    const pos = getPos(e);
    if (dragNode){
      dragNode.x = pos.x; dragNode.y = pos.y; dragNode.vx=0; dragNode.vy=0;
      tooltip.style.left = e.clientX - wrap.getBoundingClientRect().left + 'px';
      tooltip.style.top = e.clientY - wrap.getBoundingClientRect().top + 'px';
      return;
    }
    const hit = nodeAt(pos);
    hoverNode = hit || null;
    if (hit){
      tooltip.textContent = hit.label;
      tooltip.classList.add('show');
      tooltip.style.left = e.clientX - wrap.getBoundingClientRect().left + 'px';
      tooltip.style.top = e.clientY - wrap.getBoundingClientRect().top + 'px';
      sc.style.cursor = 'grab';
    } else {
      tooltip.classList.remove('show');
      sc.style.cursor = 'default';
    }
  });
  sc.addEventListener('mousedown', e=>{
    const pos = getPos(e);
    const hit = nodeAt(pos);
    if (hit){ dragNode = hit; sc.style.cursor='grabbing'; }
  });
  window.addEventListener('mouseup', ()=>{ dragNode = null; });
  sc.addEventListener('mouseleave', ()=>{ tooltip.classList.remove('show'); hoverNode=null; });

  // touch support
  sc.addEventListener('touchstart', e=>{
    const pos = getPos(e);
    const hit = nodeAt(pos);
    if (hit) dragNode = hit;
  }, { passive:true });
  sc.addEventListener('touchmove', e=>{
    if (dragNode){ const pos = getPos(e); dragNode.x = pos.x; dragNode.y = pos.y; dragNode.vx=0; dragNode.vy=0; }
  }, { passive:true });
  sc.addEventListener('touchend', ()=>{ dragNode = null; });

  /* ---------- SKILL FILTER CHIPS ---------- */
  document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
    });
  });

});
