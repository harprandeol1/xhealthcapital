document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  document.querySelectorAll('#year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Dropdown menus (click-to-toggle on touch/mobile, hover handled in CSS on desktop)
  document.querySelectorAll('.has-dropdown > .nav-link').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var parent = btn.closest('.has-dropdown');
      var isOpen = parent.classList.contains('open');
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        if (el !== parent) { el.classList.remove('open'); }
      });
      parent.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) {
        el.classList.remove('open');
        var b = el.querySelector('.nav-link');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // FAQ / accordion
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    var panel = trigger.nextElementSibling;
    var expanded = trigger.getAttribute('aria-expanded') === 'true';
    if (panel) panel.style.maxHeight = expanded ? panel.scrollHeight + 'px' : '0px';

    trigger.addEventListener('click', function () {
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + 'px' : '0px';
    });
  });

  // Contact form (static site — replace with real submission endpoint)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-note');
      if (note) {
        note.textContent = 'Thank you. A member of our investor relations team will reach out within one business day.';
      }
      form.reset();
    });
  }

});
