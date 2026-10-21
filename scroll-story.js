/* scroll-story.js  v1 (2026-10-20), synced 2026-10-20. Densolv scroll motion: reveal, pinned scrub, chapter nav. No dependencies.
   Master: Densolve HQ/templates/scroll-story/scroll-story.js. A property's copy keeps this header and adds "synced <date>".
   Pairs with scroll-story.css. Load with <script src="/scroll-story.js" defer>.

   A. Reveal      class="ss-reveal" on any element; class="ss-stagger" on a parent delays its children in turn.
   B. Pinned scrub <section class="ss-scrub" data-ss-base="/media/scenes/<scene>" data-ss-frames="72" data-ss-mode="auto">
                   with .ss-scrub-pin > img.ss-scrub-poster + .ss-scrub-copy inside. Asset names are fixed by
                   Densolve HQ/tools/scroll-story/make-scrub-assets.sh: scrub-large/medium/small.mp4,
                   frames-large/f_001.webp, frames-small/f_001.webp, poster.jpg, end.jpg.
                   data-ss-mode: auto (video from 768px up, frames below), video, frames.
                   data-ss-copy: start (default, copy fades out over the first quarter) or end (copy arrives in the last quarter).
                   data-ss-end: optional end-frame image, default <base>/end.jpg (shown under reduced motion).
   C. Chapter nav data-ss-chapter="Label" on each section; the nav is built here, or fills an existing <nav class="ss-chapters">.
   Reduced motion: reveals are static, a scrub shows its end frame with no pin, chapter clicks jump without smoothing.
   window.ScrollStory.refresh() re-measures after the page changes height. */
(function () {
  'use strict';
  var doc = document;
  doc.documentElement.classList.add('ss-js');
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var PHONE = 768;
  var scenes = [];
  var chapters = [];
  var ticking = false;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function pad3(n) { n = String(n); while (n.length < 3) n = '0' + n; return n; }

  /* ---------- A. Reveal ---------- */
  function initReveal() {
    var els = doc.querySelectorAll('.ss-reveal');
    if (!els.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      for (var i = 0; i < els.length; i++) els[i].classList.add('is-in');
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    for (var j = 0; j < els.length; j++) {
      var r = els[j].getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) els[j].classList.add('is-in'); /* already on screen: no wait */
      else io.observe(els[j]);
    }
  }

  /* ---------- B. Pinned scrub ---------- */
  function initScrub() {
    var secs = doc.querySelectorAll('.ss-scrub');
    for (var i = 0; i < secs.length; i++) setupScene(secs[i]);
  }

  function setupScene(sec) {
    var pin = sec.querySelector('.ss-scrub-pin');
    if (!pin) return;
    var poster = sec.querySelector('.ss-scrub-poster');
    var base = (sec.getAttribute('data-ss-base') || '').replace(/\/+$/, '');
    var endSrc = sec.getAttribute('data-ss-end') || (base ? base + '/end.jpg' : '');
    if (reduce) {
      sec.classList.add('is-static');
      if (poster && endSrc) poster.src = endSrc;
      return;
    }
    var mode = sec.getAttribute('data-ss-mode') || 'auto';
    if (mode === 'auto') mode = window.innerWidth < PHONE ? 'frames' : 'video';
    var s = {
      el: sec, pin: pin, poster: poster, base: base, mode: mode,
      copy: sec.querySelector('.ss-scrub-copy'),
      frames: parseInt(sec.getAttribute('data-ss-frames') || '0', 10) || 0,
      top: 0, range: 1, p: 0, loaded: false,
      media: null, ctx: null, imgs: null, duration: 0, lastIdx: -1, lastT: -1
    };
    if (s.mode === 'frames' && !s.frames) s.mode = 'video'; /* no frame count given: fall back to video */
    sec.setAttribute('data-ss-active-mode', s.mode);
    measureScene(s);
    scenes.push(s);
    if ('IntersectionObserver' in window) {
      /* Apple's windows: fetch when the scene is 2.5 screens below, free it one screen after it has passed. */
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) load(s); else unload(s); });
      }, { rootMargin: '100% 0px 250% 0px' });
      io.observe(sec);
    } else {
      load(s);
    }
  }

  function measureScene(s) {
    var r = s.el.getBoundingClientRect();
    s.top = r.top + window.pageYOffset;
    s.range = Math.max(1, s.el.offsetHeight - window.innerHeight);
  }

  function videoSrc(s) {
    var w = window.innerWidth;
    var size = w >= 1280 ? 'large' : w >= PHONE ? 'medium' : 'small';
    return s.base + '/scrub-' + size + '.mp4';
  }
  function frameSrc(s, i) {
    var set = window.innerWidth < PHONE ? 'frames-small' : 'frames-large';
    return s.base + '/' + set + '/f_' + pad3(i + 1) + '.webp';
  }

  function insertMedia(s, el) {
    if (s.copy && s.copy.parentNode === s.pin) s.pin.insertBefore(el, s.copy); else s.pin.appendChild(el);
  }

  function load(s) {
    if (s.loaded) return;
    s.loaded = true;
    if (s.mode === 'video') {
      var v = doc.createElement('video');
      v.className = 'ss-scrub-media';
      v.muted = true; v.setAttribute('muted', '');
      v.playsInline = true; v.setAttribute('playsinline', '');
      v.preload = 'auto';
      v.setAttribute('aria-hidden', 'true');
      v.setAttribute('tabindex', '-1');
      v.addEventListener('loadedmetadata', function () { s.duration = v.duration || 0; render(s, true); });
      v.addEventListener('loadeddata', function () { s.el.classList.add('is-ready'); render(s, true); });
      v.addEventListener('error', function () { s.el.classList.remove('is-ready'); }); /* the poster stays */
      v.src = videoSrc(s);
      s.media = v;
      insertMedia(s, v);
    } else {
      var c = doc.createElement('canvas');
      c.className = 'ss-scrub-media';
      c.setAttribute('aria-hidden', 'true');
      s.media = c;
      s.ctx = c.getContext('2d');
      insertMedia(s, c);
      sizeCanvas(s);
      s.imgs = [];
      for (var i = 0; i < s.frames; i++) {
        var im = new Image();
        im.decoding = 'async';
        im.onload = function () { render(s, true); };
        im.src = frameSrc(s, i);
        s.imgs.push(im);
      }
    }
  }

  function unload(s) {
    if (!s.loaded) return;
    s.loaded = false;
    s.el.classList.remove('is-ready');
    if (s.media) {
      if (s.mode === 'video') { s.media.removeAttribute('src'); s.media.load(); }
      if (s.media.parentNode) s.media.parentNode.removeChild(s.media);
    }
    s.media = null; s.ctx = null; s.imgs = null; s.duration = 0; s.lastIdx = -1; s.lastT = -1;
  }

  function sizeCanvas(s) {
    if (!s.media || s.mode !== 'frames') return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    s.media.width = Math.max(1, Math.round(s.pin.clientWidth * dpr));
    s.media.height = Math.max(1, Math.round(s.pin.clientHeight * dpr));
    s.lastIdx = -1;
  }

  function loadedFrame(s, idx) {
    /* the wanted frame, else the nearest one that has arrived */
    var n = s.imgs.length, d, im;
    for (d = 0; d < n; d++) {
      im = s.imgs[idx - d]; if (im && im.complete && im.naturalWidth) return { im: im, exact: d === 0 };
      im = s.imgs[idx + d]; if (im && im.complete && im.naturalWidth) return { im: im, exact: false };
    }
    return null;
  }

  function drawCover(ctx, im, W, H) {
    var iw = im.naturalWidth, ih = im.naturalHeight;
    if (!iw || !ih) return;
    var sc = Math.max(W / iw, H / ih), dw = iw * sc, dh = ih * sc;
    ctx.drawImage(im, (W - dw) / 2, (H - dh) / 2, dw, dh);
  }

  function render(s, force) {
    var p = s.p;
    s.el.style.setProperty('--ss-p', p.toFixed(4));
    if (!s.media) return;
    if (s.mode === 'video') {
      if (!s.duration) return;
      var t = clamp(p * s.duration, 0, Math.max(0, s.duration - 0.02));
      if (!force && Math.abs(t - s.lastT) < 1 / 30) return;
      s.lastT = t;
      if (typeof s.media.fastSeek === 'function') s.media.fastSeek(t); else s.media.currentTime = t;
    } else {
      if (!s.imgs || !s.imgs.length) return;
      var idx = Math.round(p * (s.imgs.length - 1));
      if (!force && idx === s.lastIdx) return;
      var f = loadedFrame(s, idx);
      if (!f) return;
      drawCover(s.ctx, f.im, s.media.width, s.media.height);
      s.lastIdx = f.exact ? idx : -1;
      s.el.classList.add('is-ready');
    }
  }

  /* ---------- C. Chapter nav ---------- */
  function initChapters() {
    var secs = doc.querySelectorAll('[data-ss-chapter]');
    if (!secs.length) return;
    var nav = doc.querySelector('.ss-chapters');
    if (!nav) {
      nav = doc.createElement('nav');
      nav.className = 'ss-chapters';
      nav.setAttribute('aria-label', 'Page sections');
      doc.body.appendChild(nav);
    }
    var ul = doc.createElement('ul');
    for (var i = 0; i < secs.length; i++) {
      (function (sec, i) {
        if (!sec.id) sec.id = 'chapter-' + (i + 1);
        var li = doc.createElement('li');
        var a = doc.createElement('a');
        a.href = '#' + sec.id;
        var dot = doc.createElement('span'); dot.className = 'ss-dot'; dot.setAttribute('aria-hidden', 'true');
        var label = doc.createElement('span'); label.className = 'ss-label';
        label.textContent = sec.getAttribute('data-ss-chapter') || sec.id;
        a.appendChild(dot); a.appendChild(label);
        a.addEventListener('click', function (e) {
          e.preventDefault();
          sec.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          if (!sec.hasAttribute('tabindex')) sec.setAttribute('tabindex', '-1');
          sec.focus({ preventScroll: true });
        });
        li.appendChild(a); ul.appendChild(li);
        chapters.push({ el: sec, a: a, top: 0, on: false });
      })(secs[i], i);
    }
    nav.appendChild(ul);
  }

  function updateChapters(y) {
    if (!chapters.length) return;
    var line = y + window.innerHeight * 0.4, active = 0, i;
    for (i = 0; i < chapters.length; i++) if (chapters[i].top <= line) active = i;
    for (i = 0; i < chapters.length; i++) {
      var on = i === active;
      if (on === chapters[i].on) continue;
      chapters[i].on = on;
      chapters[i].a.classList.toggle('is-active', on);
      if (on) chapters[i].a.setAttribute('aria-current', 'true'); else chapters[i].a.removeAttribute('aria-current');
    }
  }

  /* ---------- loop ---------- */
  function measureAll() {
    var i;
    for (i = 0; i < scenes.length; i++) measureScene(scenes[i]);
    for (i = 0; i < chapters.length; i++) chapters[i].top = chapters[i].el.getBoundingClientRect().top + window.pageYOffset;
  }

  function tick() {
    ticking = false;
    var y = window.pageYOffset;
    for (var i = 0; i < scenes.length; i++) {
      var s = scenes[i];
      s.p = clamp((y - s.top) / s.range, 0, 1);
      render(s, false);
    }
    updateChapters(y);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(tick);
  }

  function onResize() {
    measureAll();
    for (var i = 0; i < scenes.length; i++) { sizeCanvas(scenes[i]); scenes[i].lastT = -1; }
    onScroll();
  }

  function init() {
    initReveal();
    initScrub();
    initChapters();
    measureAll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    window.addEventListener('load', function () { measureAll(); onScroll(); });
    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(function () { measureAll(); onScroll(); });
      ro.observe(doc.body);
    }
    tick();
  }

  window.ScrollStory = { refresh: function () { measureAll(); for (var i = 0; i < scenes.length; i++) sizeCanvas(scenes[i]); tick(); } };

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init); else init();
})();
