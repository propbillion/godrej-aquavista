// Google Ads Conversion Tracking - Godrej Aqua Vista Keshav Nagar
// IMPORTANT: create 2 NEW conversion actions for Aqua Vista in Google Ads and paste their labels below
// (kept separate from other projects so reporting stays clean)
var AW_ID = 'AW-18582289500';
var CONV_WHATSAPP = 'OKP1CKTUzcAdENz43JxF'; // every wa.me button + both forms
var CONV_CALL     = 'SmCRCKfUzcAdENz43JxF';     // every tel: button (floating call + sticky bar)
function trackConv(label) {
  if (typeof gtag !== 'function' || !label || label.indexOf('REPLACE_') === 0) return;
  gtag('event', 'conversion', { 'send_to': AW_ID + '/' + label });
}
document.addEventListener('click', function (e) {
  if (e.target.closest('a[href*="wa.me"]')) {
    trackConv(CONV_WHATSAPP);
  } else if (e.target.closest('a[href^="tel:"]')) {
    trackConv(CONV_CALL);
  }
});

/* ============================================
   GODREJ AQUA VISTA KESHAV NAGAR - Production JS
   Performance-optimized, no framework dependencies
   ============================================ */

(function () {
  'use strict';

  // ---------- Reveal on Scroll (lightweight) ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---------- Header elevation on scroll ----------
  const header = document.querySelector('.header');
  const heroBg = document.querySelector('.hero-bg');
  let ticking = false;

  if (header || heroBg) {
    // Activate parallax class once (avoids transition on initial paint)
    if (heroBg) {
      requestAnimationFrame(() => heroBg.classList.add('parallax-on'));
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;

          if (header) {
            if (y > 24) {
              header.style.boxShadow = '0 2px 18px -8px rgba(0,0,0,0.08)';
            } else {
              header.style.boxShadow = 'none';
            }
          }

          // Cinematic hero parallax: image rises slowly as user scrolls
          // Only active while hero is in view (first 100vh)
          if (heroBg && y < window.innerHeight) {
            // Image translates up at 0.35x scroll speed - subtle, premium
            const translateY = -y * 0.35;
            // Slight scale to prevent edge gaps from showing
            const scale = 1 + (y / window.innerHeight) * 0.06;
            heroBg.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Smooth Scroll for Hash Links ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 116; // header + action bar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Pre-Register Form (bottom) ----------
  const form = document.getElementById('preForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = document.getElementById('f_name');
      const mobEl = document.getElementById('f_mob');

      const name = (nameEl.value || '').trim();
      const mob = (mobEl.value || '').trim().replace(/\D/g, '');

      let ok = true;
      if (!name) {
        nameEl.style.borderBottomColor = '#a8444a';
        nameEl.focus();
        ok = false;
      } else {
        nameEl.style.borderBottomColor = '';
      }

      if (mob.length < 10) {
        mobEl.style.borderBottomColor = '#a8444a';
        if (ok) mobEl.focus();
        ok = false;
      } else {
        mobEl.style.borderBottomColor = '';
      }

      if (!ok) return;

      const message =
        'Hi%2C+I+want+the+Best+Price+and+Cost+Sheet+for+GODREJ+AQUA+VISTA+KESHAV+NAGAR.%0A%0A' +
        'Name%3A+' + encodeURIComponent(name) + '%0A' +
        'Mobile%3A+%2B91+' + encodeURIComponent(mob);

      trackConv(CONV_WHATSAPP);
      window.open('https://wa.me/918055709079?text=' + message, '_blank');

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Redirecting to WhatsApp...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
          form.reset();
        }, 2400);
      }
    });
  }

  // ---------- Hero Form (above the fold) ----------
  const heroForm = document.getElementById('heroForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = document.getElementById('hf_name');
      const mobEl = document.getElementById('hf_mob');

      const name = (nameEl.value || '').trim();
      const mob = (mobEl.value || '').trim().replace(/\D/g, '');

      let ok = true;
      if (!name) {
        nameEl.classList.add('hf-error');
        nameEl.focus();
        ok = false;
      } else {
        nameEl.classList.remove('hf-error');
      }

      if (mob.length < 10) {
        mobEl.classList.add('hf-error');
        if (ok) mobEl.focus();
        ok = false;
      } else {
        mobEl.classList.remove('hf-error');
      }

      if (!ok) return;

      const message =
        'Hi%2C+I+want+the+GODREJ+AQUA+VISTA+KESHAV+NAGAR+best+price+and+launch+offers.%0A%0A' +
        'Name%3A+' + encodeURIComponent(name) + '%0A' +
        'Mobile%3A+%2B91+' + encodeURIComponent(mob);

      trackConv(CONV_WHATSAPP);
      window.open('https://wa.me/918055709079?text=' + message, '_blank');

      const btn = heroForm.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Redirecting to WhatsApp...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
          heroForm.reset();
        }, 2400);
      }
    });
  }

  // ---------- Lazy image fallback for older browsers ----------
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const imgIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            imgIO.unobserve(img);
          }
        });
      });
      lazyImgs.forEach((img) => imgIO.observe(img));
    }
  }

})();

/* ============================================
   V5 - Auto-sliding galleries (gentle, pauses on interaction)
   ============================================ */
(function () {
  'use strict';

  const galleries = document.querySelectorAll('[data-autoslide="true"]');
  if (!galleries.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  galleries.forEach((gallery) => {
    const track = gallery.querySelector('[data-track]');
    if (!track) return;

    let paused = false;
    let resumeTimer = null;
    const SLIDE_INTERVAL = 4500; // 4.5s per advance - slow, premium

    const advance = () => {
      if (paused) return;
      const slide = track.querySelector('.ag-slide');
      if (!slide) return;
      const slideWidth = slide.getBoundingClientRect().width + 16; // approx gap
      const maxScroll = track.scrollWidth - track.clientWidth;

      // If we're near the end, loop back to start
      if (track.scrollLeft + slideWidth > maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: slideWidth, behavior: 'smooth' });
      }
    };

    const pause = (durationMs = 7000) => {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, durationMs);
    };

    // Pause on user interaction
    track.addEventListener('touchstart', () => pause(8000), { passive: true });
    track.addEventListener('mousedown', () => pause(8000));
    track.addEventListener('wheel', () => pause(4000), { passive: true });
    gallery.addEventListener('mouseenter', () => { paused = true; });
    gallery.addEventListener('mouseleave', () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, 600);
    });

    // Only auto-advance when in view
    let inView = false;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { inView = e.isIntersecting; });
      }, { threshold: 0.3 });
      io.observe(gallery);
    } else {
      inView = true;
    }

    setInterval(() => {
      if (inView && !paused && document.visibilityState === 'visible') {
        advance();
      }
    }, SLIDE_INTERVAL);
  });
})();

/* ============================================
   V7 - Smooth lazy image fade-in
   Adds .img-loaded class to lazy imgs once they decode,
   preventing the "pop" of late images.
   ============================================ */
(function () {
  'use strict';

  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImgs.length) return;

  const markLoaded = (img) => {
    img.classList.add('img-loaded');
  };

  lazyImgs.forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      // Already cached
      markLoaded(img);
    } else {
      img.addEventListener('load', () => markLoaded(img), { once: true });
      img.addEventListener('error', () => markLoaded(img), { once: true });
    }
  });
})();

/* ============================================
   V10 - Synced gallery captions
   Reads data-caption per slide, mirrors it into the rail
   beneath the gallery, animates in/out with slide changes.
   ============================================ */
(function () {
  'use strict';

  const galleries = document.querySelectorAll('.auto-gallery');
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    const track = gallery.querySelector('[data-track]');
    const rail = gallery.querySelector('[data-caption-rail]');
    if (!track || !rail) return;

    const slides = Array.from(track.querySelectorAll('.ag-slide'));
    const captions = slides.map((s) => s.getAttribute('data-caption') || '');
    if (!captions.some(Boolean)) return;

    // Build caption elements once
    captions.forEach((text, idx) => {
      const el = document.createElement('span');
      el.className = 'ag-caption';
      el.textContent = text;
      if (idx === 0) el.classList.add('is-active');
      rail.appendChild(el);
    });
    const captionEls = rail.querySelectorAll('.ag-caption');

    let activeIdx = 0;
    let frame = 0;

    const setActive = (idx) => {
      if (idx === activeIdx) return;
      captionEls[activeIdx]?.classList.remove('is-active');
      captionEls[idx]?.classList.add('is-active');
      activeIdx = idx;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let best = 0;
        let bestDist = Infinity;
        slides.forEach((slide, i) => {
          const r = slide.getBoundingClientRect();
          const slideCenter = r.left + r.width / 2;
          const d = Math.abs(slideCenter - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        setActive(best);
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    // Re-sync on resize
    window.addEventListener('resize', onScroll, { passive: true });
  });
})();
/* ---------- Privacy Modal ---------- */
(function () {
  'use strict';
  const pm = document.getElementById('privacyModal');
  if (!pm) return;
  const openLinks = document.querySelectorAll('[data-open-privacy]');
  const closeBtn = pm.querySelector('[data-close-privacy]');
  const open = () => { pm.classList.add('open'); pm.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; };
  const close = () => { pm.classList.remove('open'); pm.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; };
  openLinks.forEach((l) => l.addEventListener('click', (e) => { e.preventDefault(); open(); }));
  if (closeBtn) closeBtn.addEventListener('click', close);
  pm.addEventListener('click', (e) => { if (e.target === pm) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

/* ---------- Launch Price List Nudge ---------- */
/* Honest nudge, no dark patterns - only real numbers already live elsewhere
   on this page. Strategy: show almost immediately on load (don't make people
   wait). If someone closes it without acting, assume they just weren't ready
   yet - not that they refused - and offer it again after a short gap, up to
   a few tries, as long as they haven't converted (clicked ANY WhatsApp CTA
   on the page, or submitted the enquiry form). Once they convert, or once
   they've seen it a few times without converting, stop for the session and
   stay quiet for 4 days so repeat visitors are never annoyed by it.
   Body-scroll is locked while it's open - this also fixes it rendering off
   the visible area on mobile browsers when the page had already been
   scrolled (a known iOS/Android quirk with fixed-position overlays). */
(function () {
  'use strict';
  const overlay = document.getElementById('launchNudgeOverlay');
  const card = document.getElementById('launchNudge');
  if (!overlay || !card) return;

  const STORAGE_KEY = 'avLaunchNudgeShownAt';
  /* Timing: not instant (lets the hero, price and CTA load and be read first -
     an instant full-screen modal also hurts landing-page experience), not late:
     opens at 4s OR at 30% scroll, whichever comes first. One gentle re-show
     after 40s if closed without acting. Max 2 per session. */
  const INITIAL_DELAY_MS = 4000;
  const SCROLL_TRIGGER = 0.30;
  const RESHOW_DELAY_MS = 40000;
  const MAX_ATTEMPTS = 2;

  /* Show on every fresh visit (like the competitor's on-load modal);
     only suppressed within the same browser tab session after a conversion. */
  function recentlyShown() {
    try { return sessionStorage.getItem(STORAGE_KEY) === 'converted'; }
    catch (e) { return false; }
  }

  if (recentlyShown()) return;

  let attempts = 0;
  let converted = false;
  let reshowTimer = null;
  let savedScrollY = 0;

  function lockScroll() {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + savedScrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
  }

  function reveal() {
    if (converted || attempts >= MAX_ATTEMPTS) return;
    attempts++;
    lockScroll();
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function dismiss() {
    if (!overlay.classList.contains('show')) return;
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    unlockScroll();
    clearTimeout(reshowTimer);
    if (!converted && attempts < MAX_ATTEMPTS) {
      reshowTimer = setTimeout(reveal, RESHOW_DELAY_MS);
    }
  }

  function markConverted() {
    if (converted) return;
    converted = true;
    clearTimeout(reshowTimer);
    try { sessionStorage.setItem(STORAGE_KEY, 'converted'); } catch (e) {}
    if (overlay.classList.contains('show')) {
      overlay.classList.remove('show');
      overlay.setAttribute('aria-hidden', 'true');
      unlockScroll();
    }
  }

  /* Instant: script sits at end of <body>, so the DOM is ready - open now,
     without waiting for images or window load. */
  let firstShown = false;
  function firstReveal() {
    if (firstShown) return;
    firstShown = true;
    clearTimeout(firstTimer);
    window.removeEventListener('scroll', onScrollTrigger);
    reveal();
  }
  function onScrollTrigger() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0 && (window.scrollY / max) >= SCROLL_TRIGGER) firstReveal();
  }
  const firstTimer = setTimeout(firstReveal, INITIAL_DELAY_MS);
  window.addEventListener('scroll', onScrollTrigger, { passive: true });

  const closeBtn = document.getElementById('launchNudgeClose');
  if (closeBtn) closeBtn.addEventListener('click', dismiss);

  overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('show')) dismiss();
  });

  const cta = document.getElementById('launchNudgeCta');
  if (cta) cta.addEventListener('click', function () {
    /* Micro-event only (NOT a conversion): tells us the coupon popup drove the
       WhatsApp click. The WhatsApp conversion itself fires once via the global
       wa.me listener - so no double counting. A WhatsApp click is an enquiry
       intent, never a confirmed lead or sale. */
    if (typeof gtag === 'function') gtag('event', 'coupon_cta_click', { 'event_category': 'popup', 'event_label': 'coupon_1_5L' });
    markConverted();
  });

  /* Any WhatsApp CTA elsewhere on the page, or submitting the enquiry form,
     is a genuine conversion signal - stop nudging once the visitor has acted. */
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((a) => {
    if (a.id === 'launchNudgeCta') return;
    a.addEventListener('click', markConverted);
  });
  const preForm = document.getElementById('preForm');
  if (preForm) preForm.addEventListener('submit', markConverted);
})();


/* ===================== SCARCITY BARS: fill on view ===================== */
(function () {
  'use strict';
  const bars = document.querySelectorAll('.inv-bar');
  if (!bars.length) return;
  function fill(bar) {
    const pct = Math.max(0, Math.min(100, parseFloat(bar.getAttribute('data-fill')) || 0));
    const el = bar.querySelector('.inv-bar-fill');
    if (el) el.style.width = pct + '%';
  }
  if (!('IntersectionObserver' in window)) { bars.forEach(fill); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { setTimeout(() => fill(e.target), 250); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  bars.forEach((b) => io.observe(b));
})();

/* ===================== SWIPE-TO-ACTION (every CTA button) =====================
   One system for ALL call-to-action buttons: hero glass links and every
   other .btn / price / payment / popup CTA. Tap / click / Enter = normal
   link or submit. Swipe is optional: drag the knob right; past 80% of the
   track it completes and fires a real click on the button (so the original
   link, form submit and conversion tracking run exactly once). Short drags
   spring back; a drag never also fires the click. */
(function () {
  'use strict';
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var HINT = '<span class="sw-hint" aria-hidden="true"><i></i><i></i><i></i></span>';

  /* which surface is behind the button? dark -> white glass, light -> blue glass */
  function lum(c) {
    var m = c && c.match(/rgba?\(([^)]+)\)/); if (!m) return null;
    var p = m[1].split(',').map(parseFloat);
    if (p.length > 3 && p[3] < 0.5) return null;
    return (0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) / 255;
  }
  function surfaceIsDark(el) {
    for (var n = el.parentElement; n; n = n.parentElement) {
      var cs = getComputedStyle(n);
      var l = lum(cs.backgroundColor);
      if (l !== null) return l < 0.5;
      if (cs.backgroundImage && cs.backgroundImage !== 'none') {
        var cols = cs.backgroundImage.match(/rgba?\([^)]+\)/g) || [];
        for (var k = 0; k < cols.length; k++) { var ll = lum(cols[k]); if (ll !== null) return ll < 0.5; }
        if (/url\(/.test(cs.backgroundImage)) return true;
      }
    }
    return false;
  }

  /* build the knob structure for buttons that do not have it in the HTML */
  function build(el) {
    if (el.classList.contains('swipe-cta')) return;          // hero buttons: markup already complete
    el.classList.add('gs', 'gs-swipe');
    if (!el.querySelector('.sw-fill')) {
      var f = document.createElement('span'); f.className = 'sw-fill'; f.setAttribute('aria-hidden', 'true');
      el.insertBefore(f, el.firstChild);
    }
    var knob = el.querySelector('.g-knob');
    if (!knob) {
      knob = document.createElement('span'); knob.className = 'g-knob'; knob.setAttribute('aria-hidden', 'true');
      knob.innerHTML = ARROW;
      var txt = document.createElement('span'); txt.className = 'g-txt';
      while (el.childNodes.length > 1) { txt.appendChild(el.childNodes[1]); }
      txt.querySelectorAll('span').forEach(function (sp) { if (sp.textContent.trim() === '\u2192') sp.remove(); });   // knob replaces the trailing arrow
      el.appendChild(knob); el.appendChild(txt);
    } else {
      // old static markup: knob first then .g-txt - make sure the fill is first
      var fill = el.querySelector('.sw-fill'); if (fill !== el.firstChild) el.insertBefore(fill, el.firstChild);
    }
    knob.classList.add('sw-knob-g');
    el.classList.add('g-hero');
    el.insertAdjacentHTML('beforeend', HINT + '<span class="sw-ok" aria-hidden="true">' + CHECK + ' Opening</span>');
    el.classList.toggle('on-dark', surfaceIsDark(el));
    el.classList.toggle('on-light', !el.classList.contains('on-dark'));
  }

  var SEL = [
    'a.btn:not(.header-cta)', 'button.btn', '.hf-submit', '.pay-cta', '.tk-unlock', '.ln-cta'
  ].join(',');
  document.querySelectorAll(SEL).forEach(build);
  // header pill + chips + sticky tiles: glass look only (too small to swipe)
  document.querySelectorAll('.header-cta, .action-chip, .sf-btn').forEach(function (el) {
    el.classList.add('gs', 'gs-static');
    var dark = el.classList.contains('sf-btn') || surfaceIsDark(el);
    el.classList.add(dark ? 'on-dark' : 'on-light');
  });

  var items = document.querySelectorAll('.swipe-cta, .gs-swipe');
  if (!items.length) return;
  // show the little "slide" nudge once each button scrolls into view
  if ('IntersectionObserver' in window) {
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('idle-nudge'); nio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    document.querySelectorAll('.gs-swipe').forEach(function (b) { nio.observe(b); });
  }
  var COMPLETE_AT = 0.8, DRAG_THRESHOLD = 6;

  items.forEach(function (el) {
    var knob = el.querySelector('.sw-knob') || el.querySelector('.g-knob');
    var fill = el.querySelector('.sw-fill');
    if (!knob || !fill) return;
    var vert = knob.classList.contains('g-knob');           // g-knob is centred with translateY(-50%)
    var link = el.closest('a') || el;
    var startX = 0, dx = 0, max = 0, active = false, dragged = false, pid = null, programmatic = false;

    function setPos(x) {
      knob.style.transform = (vert ? 'translateY(-50%) ' : '') + 'translateX(' + x + 'px)';
      fill.style.width = (x + knob.offsetWidth + 6) + 'px';
    }
    function reset() {
      el.classList.add('snap'); setPos(0); fill.style.width = '0px';
      setTimeout(function () { el.classList.remove('snap'); knob.style.transform = ''; }, 380);
    }
    function complete() {
      el.classList.add('snap', 'done'); setPos(max);
      if (navigator.vibrate) { try { navigator.vibrate(18); } catch (e) {} }
      programmatic = true;
      try { el.click(); } finally { programmatic = false; }   // 'dragged' stays true so the native click that follows pointerup is swallowed   // real click: link / submit / tracking all run once
      setTimeout(function () { el.classList.remove('done'); reset(); }, 1400);
    }

    el.setAttribute('draggable', 'false');
    link.setAttribute('draggable', 'false');                 // card-anchors are natively draggable and would cancel the swipe
    el.addEventListener('dragstart', function (e) { e.preventDefault(); });
    link.addEventListener('dragstart', function (e) { e.preventDefault(); });

    // gesture works ANYWHERE on the button (not just the knob): press, then pull to the right.
    // Direction lock: vertical pans stay page scroll (touch-action: pan-y), taps stay clicks.
    var startY = 0, t0 = 0, captured = false;
    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      el.classList.remove('idle-nudge', 'snap');
      knob.style.animation = 'none';
      active = true; dragged = false; captured = false; dx = 0;
      startX = e.clientX; startY = e.clientY; t0 = e.timeStamp; pid = e.pointerId;
      max = el.clientWidth - knob.offsetWidth - 12; if (max < 20) max = 20;
    });
    el.addEventListener('pointermove', function (e) {
      if (!active || e.pointerId !== pid) return;
      var mx = e.clientX - startX, my = e.clientY - startY;
      if (!dragged) {
        if (Math.abs(my) > 10 && Math.abs(my) > Math.abs(mx)) { active = false; return; }   // it is a scroll
        if (mx < DRAG_THRESHOLD) return;                                                      // not yet a rightward pull
        dragged = true; captured = true;
        try { el.setPointerCapture(pid); } catch (err) {}
        el.classList.add('dragging');
      }
      dx = Math.max(0, Math.min(max, mx));
      e.preventDefault(); setPos(dx);
    });
    function end(e) {
      if (!active) return;
      active = false; el.classList.remove('dragging');
      if (captured) { try { el.releasePointerCapture(pid); } catch (err) {} }
      if (!dragged) return;                                  // plain tap: the button's own click handles it
      setTimeout(function () { dragged = false; }, 450);      // never leave the click-guard armed for the next tap
      var dt = Math.max(1, (e && e.timeStamp || t0 + 1) - t0), v = dx / dt;   // px per ms
      // gentle pull is enough: a quarter of the track (max 70px), or a quick flick
      if (dx >= Math.min(max * 0.25, 70) || (v > 0.45 && dx > 36)) complete(); else reset();
    }
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', function () {
      if (!active) return;
      active = false; el.classList.remove('dragging');
      if (dragged) { dragged = false; reset(); }
    });

    // a drag must never also fire the button's own click (complete() fires it deliberately)
    link.addEventListener('click', function (e) {
      if (dragged && !programmatic) { e.preventDefault(); e.stopPropagation(); dragged = false; }
    }, true);
  });
})();
