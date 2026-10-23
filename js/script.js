const skillData = [
  {symbol:'Tm',name:'Trade Marketing',group:'Trade & Retail',note:'Leading nationwide retail visibility, merchandising guidelines, and channel partner engagement across Pakistan.'},
  {symbol:'Mt',name:'Modern Trade',group:'Trade & Retail',note:'Strategic display placement and key account relationships with Carrefour, Metro, Imtiaz, Naheed, Al-Fatah, and CSD.'},
  {symbol:'Dn',name:'Dealer Branding',group:'Trade & Retail',note:'Managing dealership fascia, structural signages, and showroom presence across 14 regional distributor markets.'},
  {symbol:'Po',name:'POS & Displays',group:'Trade & Retail',note:'Custom floor-standing display units (FSUs), counter units, and illuminated island displays that drive consumer conversion.'},
  {symbol:'Vm',name:'Visual Merch.',group:'Trade & Retail',note:'Planogram compliance, brand zoning, and category dominance for Kenwood appliances and Homage power products.'},

  {symbol:'Oh',name:'Outdoor Media',group:'Media & OOH',note:'Planning and executing large-scale billboard, bridge panel, and SMD campaigns nationwide across key transit arteries.'},
  {symbol:'Mp',name:'Media Planning',group:'Media & OOH',note:'Prime site sourcing, visual angle assessment, vehicular traffic evaluation, and regional sales site selection.'},
  {symbol:'Pr',name:'Skin Printing',group:'Media & OOH',note:'Large-format flex, vinyl, and backlit printing oversight across multiple vendors with strict color and UV tolerances.'},
  {symbol:'Iv',name:'Site Verification',group:'Media & OOH',note:'On-ground photographic audit, installation checklist verification with regional teams, and execution reporting.'},
  {symbol:'Cm',name:'Multi-City Blitz',group:'Media & OOH',note:'Simultaneous 25+ site campaign deployments across Karachi, Lahore, Islamabad, Multan, Faisalabad, and Peshawar.'},

  {symbol:'Bt',name:'BTL Activations',group:'BTL & Events',note:'Conceptualizing and supervising consumer experiential roadshows, mall pop-ups, and targeted product demonstrations.'},
  {symbol:'Ex',name:'Trade Expos',group:'BTL & Events',note:'Corporate exhibition pavilions and industry trade shows, from venue evaluation through fabrication and setup.'},
  {symbol:'Sc',name:'Sales Summits',group:'BTL & Events',note:'Orchestrating national sales conferences, dealer recognition galas, and executive presentations.'},
  {symbol:'Pl',name:'Product Launches',group:'BTL & Events',note:'Unveiling new Kenwood inverter air conditioners, luxury refrigerators, and Homage solar inverters.'},
  {symbol:'St',name:'Stall Fabrication',group:'BTL & Events',note:'3D stall architectural design assessment, vendor briefing, carpentry and acrylic fabrication, and safety QA.'},

  {symbol:'Bg',name:'Budget Planning',group:'Commercial & Ops',note:'Activity-level budget allocation, comparative quotation analysis, and continuous monitoring against approved budgets.'},
  {symbol:'Vn',name:'Rate Negotiation',group:'Commercial & Ops',note:'Commercial negotiations with media owners, print houses, and fabrication contractors for maximum ROI.'},
  {symbol:'Lg',name:'Nationwide Logistics',group:'Commercial & Ops',note:'Coordinating skin dispatches, freight transport, and installation timelines across 14 nationwide territories.'},
  {symbol:'In',name:'Invoicing & Audit',group:'Commercial & Ops',note:'Rigorous vendor invoice reconciliation, milestone proof-of-performance, and financial audit documentation.'},
  {symbol:'Rk',name:'Risk Governance',group:'Commercial & Ops',note:'Foundational risk assessment and financial compliance discipline developed as Team Leader Retail Risk at RBS and Faysal Bank.'},

  {symbol:'Tl',name:'Team Leadership',group:'Tools & Team',note:'Guiding two direct marketing reports and cross-functional alignment between sales, agencies, and vendors.'},
  {symbol:'Wd',name:'MS Word',group:'Tools & Team',note:'Drafting detailed creative agency briefs, vendor contracts, corporate memos, and operational SOPs.'},
  {symbol:'Pt',name:'MS PowerPoint',group:'Tools & Team',note:'High-impact campaign reviews, management pitch decks, and nationwide installation audit presentations.'},
  {symbol:'Xl',name:'MS Excel',group:'Tools & Team',note:'Comprehensive marketing budget spreadsheets, media rate comparison matrices, and logistics tracking sheets.'}
];

const projects = [
  {
    name:'Kenwood OOH Blitz',
    type:'01 / NATIONWIDE OUTDOOR MEDIA · KENWOOD',
    title:'Dominating urban skylines across 6 metropolitan hubs.',
    description:'Orchestrated high-impact billboard and mega-structure campaigns for Kenwood Inverter Air Conditioners and luxury refrigerators across 25+ prime urban transit corridors.',
    points:[
      'Sourced and secured premier billboard locations in Karachi, Lahore, Islamabad, Multan, Faisalabad, and Peshawar',
      'Managed large-format skin printing, quality control, and nationwide freight dispatch across print partners',
      'Conducted real-time installation verification with regional sales teams and delivered board-level audit decks'
    ],
    tags:['Outdoor Media','Kenwood','25+ Sites','Multi-City','Vendor Management'],
    brand:'KENWOOD',
    mock:'Pure Cool.<br><em>Maximum Luxury.</em>',
    tone:'blue'
  },
  {
    name:'Modern Trade Takeover',
    type:'02 / RETAIL BRANDING & TRADE MARKETING',
    title:'Commanding retail visibility in top-tier hypermarkets.',
    description:'Transformed brand presence and point-of-sale customer journeys across premier modern trade chains including Carrefour, Metro, Imtiaz, Naheed, Al-Fatah, and CSD.',
    points:[
      'Secured prime end-cap displays, illuminated branded backdrops, and high-conversion floor units',
      'Tailored luxury product display staging for Kenwood kitchen appliances and Homage solar inverters',
      'Cultivated strong relationships with retail category managers, expanding shelf presence nationwide'
    ],
    tags:['Modern Trade','Carrefour & Metro','In-Store Displays','Key Accounts'],
    brand:'HOMAGE & KENWOOD',
    mock:'Smarter Living.<br><em>Modern Stores.</em>',
    tone:'peach'
  },
  {
    name:'14-Market Dealer Branding',
    type:'03 / CHANNEL IDENTITY · 14 REGIONAL MARKETS',
    title:'Standardizing showroom fascia across 14 sales territories.',
    description:'Executed end-to-end dealer network signage and retail identity revamp covering primary and secondary distributor showrooms across all 14 regional markets.',
    points:[
      'Coordinated nationwide site surveys, structural evaluations, and technical artwork adaptations with agencies',
      'Supervised fabrication partners for aluminum composite cladding, 3D acrylic signage, and illuminated displays',
      'Resolved regional installation challenges swiftly in coordination with local sales managers'
    ],
    tags:['Dealer Network','14 Markets','Retail Signage','Fabrication QA'],
    brand:'R&I DEALERS',
    mock:'Trusted Across<br><em>Pakistan.</em>',
    tone:'green'
  },
  {
    name:'National Sales Summit',
    type:'04 / CORPORATE EVENTS & BTL ACTIVATION',
    title:'Delivering high-energy dealer summits and product launches.',
    description:'Turnkey planning and execution of marquee annual sales conferences, dealer appreciation galas, and trade exhibition pavilions for new Homage and Kenwood product ranges.',
    points:[
      'Managed end-to-end event logistics: venue selection, 3D stage fabrication, audio-visuals, and stall build',
      'Directed live product unveilings for new inverter models and appliances with executive presentations',
      'Strictly controlled multi-supplier budgets, commercial bidding, and protocol for 500+ attendees'
    ],
    tags:['Corporate Events','Product Launch','BTL Activation','Budget Control'],
    brand:'HOMAGE APPLIANCES',
    mock:'Celebrating Growth.<br><em>Empowering Partners.</em>',
    tone:'lilac'
  }
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

// Draw the skill tiles from marketing competencies dataset
const elementGrid = $('#elementGrid');
skillData.forEach((skill, index) => {
  const tile = document.createElement('button');
  tile.className = 'element';
  tile.type = 'button';
  tile.dataset.group = skill.group;
  tile.style.animationDelay = `${(index % 8) * 35}ms`;
  tile.setAttribute('aria-label', `${skill.name}, ${skill.group}`);
  tile.innerHTML = `<span class="element-index">${String(index + 1).padStart(2, '0')}</span><span class="element-symbol">${skill.symbol}</span><span class="element-name">${skill.name}</span><span class="element-group">${skill.group}</span>`;
  tile.addEventListener('click', () => selectSkill(skill, tile));
  elementGrid.appendChild(tile);
});

function selectSkill(skill, tile) {
  $$('.element').forEach(item => item.classList.toggle('selected', item === tile));
  $('#detailSymbol').textContent = skill.symbol;
  $('#detailCategory').textContent = `${skill.group.toUpperCase()} · ELEMENT ${String(skillData.indexOf(skill) + 1).padStart(2, '0')}`;
  $('#detailName').textContent = skill.name;
  $('#detailDescription').textContent = skill.note;
  $('#detailCount').textContent = String(skillData.length).padStart(2, '0');
  $('#skillDetail').classList.remove('flash');
  requestAnimationFrame(() => $('#skillDetail').classList.add('flash'));
}

$('#skillFilters').addEventListener('click', event => {
  const filter = event.target.closest('.skill-filter');
  if (!filter) return;
  $$('.skill-filter').forEach(item => item.classList.toggle('active', item === filter));
  const group = filter.dataset.filter;
  $$('.element').forEach(tile => { tile.hidden = group !== 'All' && tile.dataset.group !== group; });
  const count = group === 'All' ? skillData.length : skillData.filter(item => item.group === group).length;
  $('#detailCount').textContent = String(count).padStart(2, '0');
  $('#detailCategory').textContent = group === 'All' ? 'CORE COMPETENCIES' : `${group.toUpperCase()} · FILTERED`;
  $('#detailName').textContent = group === 'All' ? 'Marketing leadership, made tangible.' : `${group}, in practice.`;
  $('#detailDescription').textContent = group === 'All' ? 'Select an element above to inspect how each discipline drives market share and brand equity.' : `Displaying ${count} core ${group.toLowerCase()} competencies deployed across 14+ years of campaign delivery.`;
});

// Campaign showcase selector
const projectRail = $('#projectRail');
projects.forEach((project, index) => {
  const button = document.createElement('button');
  button.className = `project-tab${index === 0 ? ' active' : ''}`;
  button.type = 'button';
  button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
  button.innerHTML = `<span class="project-tab-number">0${index + 1}</span><span class="project-tab-name">${project.name}</span><span class="project-tab-arrow">↗</span>`;
  button.addEventListener('click', () => showProject(index));
  projectRail.appendChild(button);
});

function showProject(index) {
  const project = projects[index];
  $$('.project-tab').forEach((button, i) => { button.classList.toggle('active', i === index); button.setAttribute('aria-pressed', i === index ? 'true' : 'false'); });
  $('#projectCopy').innerHTML = `<span class="project-type">${project.type}</span><h3>${project.title}</h3><p>${project.description}</p><ul class="project-points">${project.points.map(point => `<li>${point}</li>`).join('')}</ul><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-links"><a href="#contact">GET IN TOUCH <span>↗</span></a><a href="https://pk.linkedin.com/in/tanzila-farhat-82b704ab" target="_blank" rel="noopener">LINKEDIN PROFILE <span>↗</span></a></div>`;
  $('#mockBrand').textContent = project.brand;
  $('#mockTitle').innerHTML = project.mock;
  $('#projectArt').dataset.tone = project.tone;
  $('#projectCopy').animate([{opacity:.25,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}], {duration:330,easing:'ease-out'});
}

// Initial display setup
showProject(0);

// ID card interactive 3D flip
const idCard = $('#idCard');
function flipId() { idCard.classList.toggle('flipped'); }
idCard.addEventListener('click', flipId);
idCard.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flipId(); } });
$('#idPeek').addEventListener('click', () => { $('#about').scrollIntoView({behavior:'smooth'}); window.setTimeout(() => idCard.classList.add('flipped'), 500); });

// Voice & Typewriter Intro
const intro = 'Hello! I’m Tanzila Farhat. I’m a Deputy Manager of Marketing with over 14 years of experience leading nationwide outdoor media, dealer network branding, and modern trade visibility for Kenwood and Homage. Welcome to my interactive portfolio!';
let currentUtterance = null;
let captionTimer = null;
let introStopTimer = null;
let introActive = false;

function startCaption(text) {
  const target = $('#captionText');
  target.textContent = '';
  let position = 0;
  window.clearInterval(captionTimer);
  captionTimer = window.setInterval(() => {
    target.textContent += text[position++] || '';
    if (position >= text.length) window.clearInterval(captionTimer);
  }, 26);
}

function stopSpeaking() {
  introActive = false;
  window.clearTimeout(introStopTimer);
  $('#avatarStage').classList.remove('talking');
  $('#meetButton').classList.remove('is-speaking');
  $('#meetButton').setAttribute('aria-pressed', 'false');
  $('#meetButton').innerHTML = '<span class="sound-icon">◖))</span> Meet Tanzila';
}

$('#meetButton').addEventListener('click', () => {
  if (introActive) {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    currentUtterance = null; stopSpeaking(); return;
  }
  introActive = true;
  startCaption(intro);
  $('#avatarStage').classList.add('talking');
  $('#meetButton').classList.add('is-speaking');
  $('#meetButton').setAttribute('aria-pressed', 'true');
  $('#meetButton').innerHTML = '<span class="sound-icon">Ⅱ</span> Pause intro';
  const duration = Math.max(4500, intro.length * 52);
  introStopTimer = window.setTimeout(stopSpeaking, duration);
  if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
    speechSynthesis.cancel();
    currentUtterance = new SpeechSynthesisUtterance(intro);
    currentUtterance.rate = .93;
    currentUtterance.pitch = 1.05;
    const voices = speechSynthesis.getVoices();
    const femaleRegex = /female|woman|girl|samantha|victoria|karen|moira|tessa|fiona|veena|susan|zira|aria|jenny|hazel|catherine|stephanie|sarah|lisa|emma|anna|alice|eva|amy|michelle|clara|cora|zoe|lucy|kate|natasha|helena|heera|kalpana|priya|neha|aditi|raveena|leila|mary|ruth|amber|beth|claire|joanna|salli|kimberly|kendra|ivy|joan/i;
    const maleRegex = /\b(male|man|boy|david|alex|daniel|fred|george|mark|richard|tom|thomas|james|john|robert|michael|william|charles|paul|steve|brian|guy|oliver|harry|jack|rishi|neil)\b/i;
    const femaleVoice = voices.find(v => (v.gender === 'female' || (femaleRegex.test(v.name) && !maleRegex.test(v.name))) && /^en/i.test(v.lang))
      || voices.find(v => v.gender === 'female' || (femaleRegex.test(v.name) && !maleRegex.test(v.name)))
      || voices.find(v => /^en/i.test(v.lang) && !maleRegex.test(v.name))
      || null;
    if (femaleVoice) currentUtterance.voice = femaleVoice;
    currentUtterance.pitch = 1.15;
    currentUtterance.onend = () => { currentUtterance = null; stopSpeaking(); };
    currentUtterance.onerror = () => { currentUtterance = null; };
    speechSynthesis.speak(currentUtterance);
  }
});

// Moments carousel & progress track
const momentsTrack = $('#momentsTrack');
function updateMomentProgress() {
  const max = momentsTrack.scrollWidth - momentsTrack.clientWidth;
  const progress = max <= 0 ? 100 : 18 + (momentsTrack.scrollLeft / max) * 82;
  $('#momentProgress').style.width = `${progress}%`;
}
$('#momNext').addEventListener('click', () => momentsTrack.scrollBy({left: Math.min(310, momentsTrack.clientWidth * .78), behavior:'smooth'}));
$('#momPrev').addEventListener('click', () => momentsTrack.scrollBy({left: -Math.min(310, momentsTrack.clientWidth * .78), behavior:'smooth'}));
momentsTrack.addEventListener('scroll', updateMomentProgress, {passive:true});
window.addEventListener('resize', updateMomentProgress);

// Toast & Copy Functionality
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2400);
}

$('#copyMail').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('03323616054');
    showToast('Contact number (0332 3616054) copied ✳');
  } catch {
    showToast('Phone: 0332 3616054');
  }
});

// Mobile menu toggle
const menuToggle = $('#menuToggle');
const mainNav = $('#mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});
$$('#mainNav a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}));

// Back to top
const backTop = $('#backTop');
backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Scroll reveals
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
}), {threshold:.12,rootMargin:'0px 0px -24px 0px'});
$$('.reveal,.reveal-up,.reveal-right,.reveal-zoom').forEach(el => revealObserver.observe(el));

// Stats counter animation
let counted = false;
const statsObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting || counted) return;
  counted = true;
  $$('[data-count]').forEach(el => {
    const end = Number(el.dataset.count);
    const start = performance.now();
    const duration = 950;
    function tick(now) {
      const t = Math.min(1, (now-start)/duration);
      el.textContent = String(Math.round(end * (1 - Math.pow(1-t,3))));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
  statsObserver.disconnect();
}), {threshold:.4});
statsObserver.observe($('.about-stats'));

// Active nav section tracking
const trackedSections = $$('main section[id]');
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  $$('.main-nav a[href^="#"]').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
}), {rootMargin:'-35% 0px -58% 0px'});
trackedSections.forEach(section => navObserver.observe(section));

// Scroll progress bar
function onScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  $('#scrollProgress').style.width = `${maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0}%`;
  backTop.classList.toggle('visible', window.scrollY > 700);
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches && window.innerWidth > 700) {
    const art = $('.hero-visual');
    if (art && window.scrollY < window.innerHeight) art.style.transform = `translateY(${window.scrollY * .045}px)`;
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
updateMomentProgress();
