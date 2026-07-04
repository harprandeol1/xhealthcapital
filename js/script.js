document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  var accordion = document.getElementById('faq-accordion');
  if (accordion) {
    var triggers = accordion.querySelectorAll('.accordion-trigger');

    triggers.forEach(function (trigger) {
      var panel = trigger.nextElementSibling;

      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all others
        triggers.forEach(function (t) {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            t.nextElementSibling.style.maxHeight = null;
          }
        });

        trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        panel.style.maxHeight = isOpen ? null : panel.scrollHeight + 'px';
      });
    });
  }

  /* ---------- Contact form (front-end only demo) ---------- */
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.textContent = 'Thank you — your request has been received. Our team will reach out within one business day.';
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
