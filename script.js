/* ===== VellumCadence — Landing Script ===== */
(function () {
  'use strict';

  // ── Nav scroll effect ──
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Burger menu ──
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ── IntersectionObserver — fade-in animations ──
  var animEls = document.querySelectorAll('.anim-fade');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    animEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything
    animEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Result bars animation ──
  var resultBars = document.querySelectorAll('.result-bar');
  if ('IntersectionObserver' in window && resultBars.length) {
    var barObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var bar = entry.target;
            var val = bar.getAttribute('data-value') || 0;
            bar.style.setProperty('--val', val);
            bar.classList.add('animated');
            barObserver.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );
    resultBars.forEach(function (bar) { barObserver.observe(bar); });
  }

  // ── 3D Tilt effect on cards ──
  var tiltCards = document.querySelectorAll('.tilt-card');
  var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = ((y - centerY) / centerY) * -8;
        var rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform =
          'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
        setTimeout(function () {
          card.style.transition = '';
        }, 500);
      });

      card.addEventListener('mouseenter', function () {
        card.style.transition = 'none';
      });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Parallax for geometric shapes ──
  var geoShapes = document.querySelector('.geo-shapes');
  if (geoShapes && !isTouchDevice) {
    var geos = geoShapes.querySelectorAll('.geo');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var scrollY = window.scrollY;
          geos.forEach(function (geo, i) {
            var speed = 0.02 + i * 0.008;
            geo.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
