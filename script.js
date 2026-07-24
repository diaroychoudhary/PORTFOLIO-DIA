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
    skills: [
      { label:'Java', cat:'lang' },
      { label:'Python', cat:'lang' },
      { label:'JavaScript', cat:'lang' },
      { label:'HTML', cat:'web' },
      { label:'CSS', cat:'web' },
      { label:'Artificial Intelligence', cat:'ai' },
      { label:'Machine Learning', cat:'ai' },
      { label:'Responsible AI', cat:'ai' },
      { label:'Social Media Marketing', cat:'other' },
      { label:'Content Writing', cat:'other' },
      { label:'Problem Solving', cat:'other' },
      { label:'Leadership', cat:'soft' },
      { label:'Communication', cat:'soft' },
      { label:'Teamwork & Collaboration', cat:'soft' },
      { label:'Critical / Higher-Order Thinking', cat:'soft' },
      { label:'Creativity & Creative Writing', cat:'soft' },
      { label:'Public Speaking & Debate', cat:'soft' },
      { label:'Event Organization & Coordination', cat:'soft' },
      { label:'Adaptability & Versatility', cat:'soft' },
      { label:'Time Management & Initiative', cat:'soft' },
      { label:'Interpersonal Skills', cat:'soft' },
      { label:'Willingness to Learn', cat:'soft' },
      { label:'Presentation Skills', cat:'soft' }
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

  /* ---------- SKILL ICONS ---------- */
  const skillIcons = {
    lang: '<path d="M8 4L3 12l5 8"/><path d="M16 4l5 8-5 8"/>',
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6.5" r=".6" fill="currentColor" stroke="none"/><circle cx="9" cy="6.5" r=".6" fill="currentColor" stroke="none"/>',
    ai: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
    other: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z"/>',
    soft: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.6"/><path d="M15 20a5 5 0 0 1 8 0"/>'
  };
  const catLabel = { lang:'Programming Language', web:'Web Development', ai:'AI / ML', other:'Other Skill', soft:'Soft Skill' };

  function svgIcon(cat){
    return `<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${skillIcons[cat]}</svg>`;
  }

  /* ---------- BUILD SKILL CARDS ---------- */
  const skillsGrid = document.getElementById('skillsGrid');
  DATA.skills.forEach(s=>{
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.dataset.cat = s.cat;
    card.innerHTML = `
      <div class="skill-icon">${svgIcon(s.cat)}</div>
      <div>
        <div class="skill-name">${s.label}</div>
        <div class="skill-cat">${catLabel[s.cat]}</div>
      </div>
    `;
    skillsGrid.appendChild(card);
  });

  const skillCardObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry,i)=>{
      if (entry.isIntersecting){
        setTimeout(()=>entry.target.classList.add('show'), i*35);
        skillCardObserver.unobserve(entry.target);
      }
    });
  }, { threshold:.2 });
  document.querySelectorAll('.skill-card').forEach(c=>skillCardObserver.observe(c));

  /* ---------- SKILL FILTER CHIPS ---------- */
  document.querySelectorAll('.chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      document.querySelectorAll('.skill-card').forEach(card=>{
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden-card', !match);
        if (match) card.classList.add('show');
      });
    });
  });

});
