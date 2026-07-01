document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  // Mobile accordion dropdowns (Services / Website Maintenance)
  var mobileDrops = document.querySelectorAll('.mobile-drop-toggle');
  mobileDrops.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var parent = toggle.closest('.mobile-drop');
      var wasOpen = parent.classList.contains('open');
      // close any other open accordions
      document.querySelectorAll('.mobile-drop.open').forEach(function (el) {
        el.classList.remove('open');
      });
      if (!wasOpen) parent.classList.add('open');
    });
  });

  // Theme orb toggle (light/dark) — persisted in localStorage
  var orb = document.getElementById('themeOrb');
  var html = document.documentElement;
  var saved = localStorage.getItem('bw-theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
    if (orb) orb.textContent = saved === 'dark' ? '☀️' : '🌙';
  }
  if (orb) {
    orb.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      orb.textContent = next === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('bw-theme', next);
    });
  }

  // Scroll reveal animations
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // Testimonials — horizontal scroll arrows
  var track = document.getElementById('testiScroll');
  var prevBtn = document.getElementById('testiPrev');
  var nextBtn = document.getElementById('testiNext');
  if (track && prevBtn && nextBtn) {
    var scrollAmount = function () {
      var card = track.querySelector('.testi-card');
      return card ? card.offsetWidth + 20 : 320;
    };
    prevBtn.addEventListener('click', function () {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function () {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
  }
});
