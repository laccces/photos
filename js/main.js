/* ─── Image Protection ──────────────────────────────────────────── */
document.addEventListener('contextmenu', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

document.addEventListener('dragstart', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

/* ─── Shared Chrome ─────────────────────────────────────────────── */
function injectChrome() {
  const headerMount = document.getElementById('header-mount');
  if (headerMount) {
    headerMount.outerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <div class="site-name"><a href="index.html">Dan Coman</a></div>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="index.html#projects">Projects</a>
        <a href="contact.html">Contact</a>
      </nav>
      <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <a href="index.html#projects">Projects</a>
    <a href="contact.html">Contact</a>
  </nav>`;
  }

  const footerMount = document.getElementById('footer-mount');
  if (footerMount) {
    footerMount.outerHTML = `
  <footer class="site-footer">
    <p>Dan Coman &mdash; &copy; ${new Date().getFullYear()}</p>
  </footer>`;
  }
}

/* ─── Header / Mobile Nav ──────────────────────────────────────── */
function initHeader() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .mobile-nav a').forEach(a => {
    if (a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ─── Hero Carousel ────────────────────────────────────────────── */
function initHeroCarousel() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const track = hero.querySelector('.hero-track');
  const dotsContainer = hero.querySelector('.hero-dots');
  const slides = hero.querySelectorAll('.hero-slide');
  const prevBtn = hero.querySelector('.hero-btn.prev');
  const nextBtn = hero.querySelector('.hero-btn.next');

  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const INTERVAL = 4500;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.hero-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => { goTo(i); startAuto(); });
    dotsContainer.appendChild(dot);
  });

  prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  hero.addEventListener('mouseenter', stopAuto);
  hero.addEventListener('mouseleave', startAuto);

  let touchStartX = 0;
  hero.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { goTo(current + (dx < 0 ? 1 : -1)); startAuto(); }
  });

  goTo(0);
  startAuto();
}

/* ─── Homepage: Build Projects Grid ───────────────────────────── */
function buildProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof CONFIG === 'undefined') return;

  CONFIG.projects.forEach(project => {
    const card = document.createElement('a');
    card.className = 'project-card';
    card.href = `project-${project.id}.html`;

    card.innerHTML = `
      <div class="card-thumb">
        <div class="img-wrap">
          <img src="${project.cover.src}" alt="${project.title}" loading="lazy">
          <div class="img-overlay" aria-hidden="true"></div>
        </div>
      </div>
      <div class="card-info">
        <h2 class="card-title">${project.title}</h2>
        <p class="card-desc">${project.description}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ─── Homepage: Build Hero Slides ──────────────────────────────── */
function buildHeroSlides() {
  const track = document.querySelector('.hero-track');
  if (!track || typeof CONFIG === 'undefined') return;

  CONFIG.projects.filter(p => !p.hideFromCarousel).forEach(project => {
    const slide = document.createElement('div');
    slide.className = 'hero-slide';
    slide.innerHTML = `
      <div class="img-wrap">
        <img src="${project.cover.src}" alt="${project.title}">
        <div class="img-overlay" aria-hidden="true"></div>
      </div>
      <div class="hero-caption">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="project-${project.id}.html">View project</a>
      </div>
    `;
    track.appendChild(slide);
  });
}

/* ─── Project Page ─────────────────────────────────────────────── */
function initProjectPage() {
  const featured = document.getElementById('featured-img');
  if (!featured || typeof CONFIG === 'undefined') return;

  const projectId = document.body.dataset.project;
  const projectIndex = CONFIG.projects.findIndex(p => p.id === projectId);
  if (projectIndex === -1) return;

  const project = CONFIG.projects[projectIndex];

  document.getElementById('project-title').textContent = project.title;
  const descEl = document.getElementById('project-desc');
  if (descEl) descEl.textContent = project.description;

  featured.src = project.images[0].src;
  featured.alt = project.images[0].caption || project.title;

  const captionEl = document.getElementById('featured-caption');

  function setCaption(text) {
    if (!captionEl) return;
    captionEl.textContent = text || '';
    captionEl.hidden = !text;
  }

  setCaption(project.images[0].caption);

  const thumbGrid = document.getElementById('thumb-grid');
  project.images.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'thumb-item img-wrap' + (i === 0 ? ' active' : '');
    item.innerHTML = `
      <img src="${img.src}" alt="${img.caption || (project.title + ' — image ' + (i + 1))}" loading="lazy">
      <div class="img-overlay" aria-hidden="true"></div>
    `;
    item.addEventListener('click', () => selectImage(item, img));
    thumbGrid.appendChild(item);
  });

  function selectImage(item, img) {
    featured.classList.add('fade');
    setTimeout(() => {
      featured.src = img.src;
      featured.alt = img.caption || project.title;
      featured.classList.remove('fade');
    }, 200);
    setCaption(img.caption);
    thumbGrid.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    item.classList.add('active');
  }

  const prevNav = document.getElementById('nav-prev');
  const nextNav = document.getElementById('nav-next');
  const total = CONFIG.projects.length;

  if (prevNav) {
    const prevProject = CONFIG.projects[(projectIndex - 1 + total) % total];
    prevNav.href = `project-${prevProject.id}.html`;
    prevNav.querySelector('span').textContent = prevProject.title;
  }
  if (nextNav) {
    const nextProject = CONFIG.projects[(projectIndex + 1) % total];
    nextNav.href = `project-${nextProject.id}.html`;
    nextNav.querySelector('span').textContent = nextProject.title;
  }
}

/* ─── Init ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectChrome();
  initHeader();
  buildHeroSlides();
  buildProjectsGrid();
  initHeroCarousel();
  initProjectPage();
});
