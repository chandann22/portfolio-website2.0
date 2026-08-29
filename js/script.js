// ===========================================================
// CHANDAN SINGH — PORTFOLIO SCRIPT
// -----------------------------------------------------------
// Sections below: theme toggle | mobile nav | scroll reveal |
// copy email | hero network animation
// ===========================================================

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- THEME TOGGLE ---------------- */
const themeToggle = document.getElementById('themeToggle');
const root = document.body;
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else {
  // default follows the visitor's OS preference, falls back to dark
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  root.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
}

/* Swap external GitHub/LeetCode stat-card images to match the active theme */
function updateStatImages(theme) {
  document.querySelectorAll('.stat-img').forEach(img => {
    const src = theme === 'light' ? img.dataset.srcLight : img.dataset.srcDark;
    if (src && img.src !== src) img.src = src;
  });
}
updateStatImages(root.getAttribute('data-theme'));

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateStatImages(next);
});

/* ---------------- MOBILE NAV ---------------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------------- SCROLL REVEAL ---------------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

/* ---------------- COPY EMAIL ---------------- */
const copyBtn = document.getElementById('copyEmailBtn');
const copyNote = document.getElementById('copyNote');
const email = 'chandansinghatwork22@gmail.com';

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyNote.textContent = 'Copied to clipboard ✓';
    setTimeout(() => (copyNote.textContent = email), 2000);
  } catch {
    copyNote.textContent = email; // clipboard API unavailable, just show it
  }
});

/* ---------------- SCREENSHOT GALLERY MODAL ---------------- */
const galleryModal = document.getElementById('galleryModal');
const galleryTrack = document.getElementById('galleryTrack');
const galleryDots = document.getElementById('galleryDots');
const galleryTitle = document.getElementById('galleryTitle');
const galleryClose = document.getElementById('galleryClose');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

if (galleryModal && galleryTrack && galleryDots) {
  let galleryImages = [];
  let galleryIndex = 0;

  function renderGalleryPosition() {
    galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
    galleryDots.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === galleryIndex);
    });
  }

  function openGallery(images, title) {
    if (!images.length) return;
    galleryImages = images;
    galleryIndex = 0;
    galleryTitle.textContent = title || '';

    galleryTrack.innerHTML = images
      .map((src, i) => `<img src="${src}" alt="${title || 'Project'} screenshot ${i + 1}" loading="lazy">`)
      .join('');

    galleryDots.innerHTML = images
      .map((_, i) => `<span class="gallery-dot${i === 0 ? ' active' : ''}" data-i="${i}"></span>`)
      .join('');

    // hide nav arrows/dots entirely when there's only one image
    const multi = images.length > 1;
    galleryPrev.style.display = multi ? 'flex' : 'none';
    galleryNext.style.display = multi ? 'flex' : 'none';
    galleryDots.style.display = multi ? 'flex' : 'none';

    renderGalleryPosition();
    galleryModal.classList.add('open');
    galleryModal.setAttribute('aria-hidden', 'false');
  }

  function closeGallery() {
    galleryModal.classList.remove('open');
    galleryModal.setAttribute('aria-hidden', 'true');
  }

  function stepGallery(dir) {
    galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
    renderGalleryPosition();
  }

  document.querySelectorAll('.gallery-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let images = [];
      try { images = JSON.parse(btn.dataset.images || '[]'); } catch { images = []; }
      openGallery(images, btn.dataset.project);
    });
  });

  galleryClose.addEventListener('click', closeGallery);
  galleryPrev.addEventListener('click', () => stepGallery(-1));
  galleryNext.addEventListener('click', () => stepGallery(1));

  galleryDots.addEventListener('click', (e) => {
    if (!e.target.classList.contains('gallery-dot')) return;
    galleryIndex = parseInt(e.target.dataset.i, 10) || 0;
    renderGalleryPosition();
  });

  // close when clicking the dark backdrop (outside the sliding window)
  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) closeGallery();
  });

  document.addEventListener('keydown', (e) => {
    if (!galleryModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') stepGallery(-1);
    if (e.key === 'ArrowRight') stepGallery(1);
  });
}

/* ---------------- HERO NETWORK ANIMATION ----------------
   Signature element: a sparse, slowly drifting node graph in
   the hero background — a nod to graphs/backend architecture.
   Respects prefers-reduced-motion (canvas is hidden via CSS). */
const canvas = document.getElementById('hero-canvas');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduceMotion) {
  const ctx = canvas.getContext('2d');
  let width, height, nodes;
  const NODE_COUNT = 42;
  const LINK_DIST = 140;

  function isDark() {
    return document.body.getAttribute('data-theme') === 'dark';
  }

  function resize() {
    width = canvas.width = canvas.offsetWidth * devicePixelRatio;
    height = canvas.height = canvas.offsetHeight * devicePixelRatio;
  }

  function makeNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: (Math.random() * 1.6 + 1) * devicePixelRatio
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    const lineColor = isDark() ? '34,211,238' : '15,118,110';
    const nodeColor = isDark() ? '45,212,191' : '6,182,212';

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DIST * devicePixelRatio) {
          const alpha = 1 - dist / (LINK_DIST * devicePixelRatio);
          ctx.strokeStyle = `rgba(${lineColor},${alpha * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.fillStyle = `rgba(${nodeColor},0.8)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  makeNodes();
  step();
  window.addEventListener('resize', () => { resize(); makeNodes(); });
}
