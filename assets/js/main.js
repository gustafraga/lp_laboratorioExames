// Laboratório Exames: menu, campaign carousel, exam preparation and FAQ. No dependencies.
(function () {
  'use strict';

  var WA = 'https://wa.me/5574999103138?text=';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  // ---- Mobile menu ----
  var menuBtn = $('[data-menu-btn]'), nav = $('#menu');
  if (menuBtn && nav) {
    var setMenu = function (open) {
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.querySelector('.sr-only').textContent = open ? 'Fechar menu' : 'Abrir menu';
    };
    menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'); });
    $all('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });
  }

  // ---- Campaign carousel ----
  // Slides are plain <li> blocks in index.html; add or remove them there.
  // Autoplay every 7s for everyone, with a pause button. With reduced motion the
  // change is instant (no sliding), handled by the CSS media query.
  var car = $('[data-carousel]');
  if (car) {
    var track = $('[data-track]', car), slides = $all('.slide', track);
    var ui = $('.carousel-ui', car), dotsBox = $('[data-dots]', car), pauseBtn = $('[data-pause]', car);
    var idx = 0, timer = 0, paused = false, hover = false, DELAY = 7000;
    if (slides.length < 2) { ui.hidden = true; }
    else {
      var viewport = document.createElement('div'); viewport.className = 'viewport';
      viewport.setAttribute('aria-live', 'off');
      track.parentNode.insertBefore(viewport, track); viewport.appendChild(track);
      track.classList.add('js-track');
      var dots = slides.map(function (s, k) {
        s.setAttribute('aria-label', (k + 1) + ' de ' + slides.length);
        var d = document.createElement('button'); d.type = 'button';
        d.setAttribute('aria-label', 'Mostrar banner ' + (k + 1));
        d.addEventListener('click', function () { go(k, true); });
        dotsBox.appendChild(d); return d;
      });
      var go = function (k, user) {
        idx = (k + slides.length) % slides.length;
        track.style.transform = 'translateX(' + (-idx * 100) + '%)';
        slides.forEach(function (s, j) {
          var on = j === idx;
          s.setAttribute('aria-hidden', String(!on));
          if ('inert' in s) s.inert = !on;
        });
        dots.forEach(function (d, j) { d.setAttribute('aria-current', String(j === idx)); });
        if (user) { viewport.setAttribute('aria-live', 'polite'); schedule(); }
      };
      car.style.setProperty('--slide-ms', DELAY + 'ms');
      var schedule = function () {
        clearTimeout(timer);
        var running = !paused && !hover && !document.hidden;
        // Restart the progress fill on the active dot so it matches the new timer
        car.classList.remove('is-running');
        if (running) {
          void car.offsetWidth;
          car.classList.add('is-running');
          timer = setTimeout(function () { go(idx + 1, false); schedule(); }, DELAY);
        }
      };
      $('[data-prev]', car).addEventListener('click', function () { go(idx - 1, true); });
      $('[data-next]', car).addEventListener('click', function () { go(idx + 1, true); });
      pauseBtn.setAttribute('aria-pressed', 'false');
      pauseBtn.addEventListener('click', function () {
        paused = !paused;
        pauseBtn.setAttribute('aria-pressed', String(paused));
        pauseBtn.setAttribute('aria-label', paused ? 'Retomar troca automática' : 'Pausar troca automática');
        schedule();
      });
      // Hold still while the visitor is reading or interacting
      car.addEventListener('mouseenter', function () { hover = true; schedule(); });
      car.addEventListener('mouseleave', function () { hover = false; schedule(); });
      car.addEventListener('focusin', function () { hover = true; schedule(); });
      car.addEventListener('focusout', function (e) { if (!car.contains(e.relatedTarget)) { hover = false; schedule(); } });
      document.addEventListener('visibilitychange', schedule);
      car.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { go(idx - 1, true); } else if (e.key === 'ArrowRight') { go(idx + 1, true); }
      });
      // Swipe on touch screens
      var x0 = null;
      viewport.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      viewport.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0; x0 = null;
        if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1), true);
      });
      go(0, false); schedule();
    }
  }

  // ---- Exam preparation with fasting gauge ----
  // All exam data lives in assets/js/exames.js (window.EXAMES). Nothing to edit here.
  var EXAMES = window.EXAMES || [];
  var group = $('[data-exams]');
  if (group && EXAMES.length) {
    var MAX_H = 12; // gauge scale: 0 to 12 hours
    var fill = $('.fg-fill'), needle = $('[data-needle]'), gauge = $('.fast-gauge');
    var hoursEl = $('[data-fast-hours]'), unitEl = $('[data-fast-unit]');

    // Build one button per exam, in the order of the list
    var radios = EXAMES.map(function (ex, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'radio'); b.textContent = ex.nome;
      group.appendChild(b); return b;
    });

    var select = function (i, focus) {
      var ex = EXAMES[i];
      var h = Math.max(0, Math.min(MAX_H, Number(ex.jejum) || 0));
      radios.forEach(function (r, j) { r.setAttribute('aria-checked', String(j === i)); r.tabIndex = j === i ? 0 : -1; });
      if (focus) radios[i].focus();

      // Gauge: a half circle from 0h (left) to 12h (right); CSS eases the move, no overshoot.
      fill.style.strokeDasharray = h + ' ' + MAX_H;
      needle.style.transform = 'rotate(' + (-90 + h * (180 / MAX_H)) + 'deg)';
      gauge.classList.toggle('is-none', h === 0);
      $all('.fg-labels text').forEach(function (t) { t.classList.toggle('on', h > 0 && parseInt(t.textContent, 10) <= h); });
      if (h) { hoursEl.textContent = h; unitEl.textContent = h === 1 ? 'hora' : 'horas'; }
      else { hoursEl.textContent = ''; unitEl.textContent = 'Sem necessidade de jejum'; }

      $('[data-exam-name]').textContent = ex.nome;
      $('[data-exam-obs]').textContent = ex.observacao || '';
      $('[data-row-obs]').hidden = !ex.observacao;
      $('[data-exam-prep]').textContent = ex.preparo;
      $('[data-exam-result]').textContent = ex.resultado + ', pelo WhatsApp ou online.';
      $('[data-prep-status]').textContent = ex.nome + '. ' + (h ? 'Jejum de ' + h + ' horas.' : 'Sem necessidade de jejum.');
      var msg = 'Olá! Vi o site do Laboratório Exames e gostaria de confirmar o preparo para o exame: ' + ex.nome + '.';
      $('[data-exam-wa]').href = WA + encodeURIComponent(msg);
    };

    radios.forEach(function (r, i) {
      r.addEventListener('click', function () { select(i, false); });
      r.addEventListener('keydown', function (e) {
        var k = e.key, n = radios.length, next = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') next = (i + 1) % n;
        else if (k === 'ArrowLeft' || k === 'ArrowUp') next = (i - 1 + n) % n;
        else if (k === 'Home') next = 0;
        else if (k === 'End') next = n - 1;
        if (next !== null) { e.preventDefault(); select(next, true); }
      });
    });

    var start = EXAMES.map(function (ex) { return ex.nome; }).indexOf(window.EXAME_INICIAL);
    $('[data-prep-status]').textContent = ''; // no announcement on page load
    select(start >= 0 ? start : 0, false);
    $('[data-prep-status]').textContent = '';
  }

  // ---- FAQ (answers open smoothly; closed answers stay hidden from screen readers) ----
  var faqBtns = $all('[data-faq] button[aria-expanded]');
  if (faqBtns.length) {
    root.classList.add('js-faq');
    faqBtns.forEach(function (btn) { document.getElementById(btn.getAttribute('aria-controls')).hidden = false; });
    var setFaq = function (btn, open) {
      btn.setAttribute('aria-expanded', String(open));
      btn.closest('.faq-item').classList.toggle('open', open);
    };
    faqBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        faqBtns.forEach(function (other) { if (other !== btn) setFaq(other, false); });
        setFaq(btn, !open);
      });
    });
  }

  // ---- Menu link follows the section in view ----
  var navLinks = $all('.nav a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = byId[en.target.id]; if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // ---- Sections appear once as they scroll in ----
  // Only elements below the first screen are hidden, so nothing flickers on load.
  if (!reduce && 'IntersectionObserver' in window) {
    var groups = ['.section-head', '.about-text', '.about-photo', '.prep-list', '.prep-card', '.steps li', '.gallery figure', '.rt', '.quote', '.faq', '.where > *'];
    var targets = [];
    groups.forEach(function (sel) {
      $all(sel).forEach(function (el, k) {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add('reveal');
        el.style.setProperty('--d', (k % 4) * 70 + 'ms');
        targets.push(el);
      });
    });
    if (targets.length) {
      root.classList.add('js-reveal');
      var rv = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -8% 0px' });
      targets.forEach(function (el) { rv.observe(el); });
    }
  }

  // ---- Floating WhatsApp: a quiet ring once per visit ----
  var floatBtn = $('.float-wa');
  if (floatBtn && !reduce) {
    var seen = false;
    try { seen = sessionStorage.getItem('lx-nudge') === '1'; } catch (e) { /* storage blocked */ }
    if (!seen) {
      setTimeout(function () {
        floatBtn.classList.add('nudge');
        try { sessionStorage.setItem('lx-nudge', '1'); } catch (e) { /* storage blocked */ }
      }, 4000);
    }
  }

  // ---- Current year in the footer ----
  var yearEl = $('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Header shadow once the page scrolls ----
  var header = $('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();
