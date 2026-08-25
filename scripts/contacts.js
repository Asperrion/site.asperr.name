(function () {
  var STORAGE_KEY = 'asperr-lang';
  var buttons = document.querySelectorAll('[data-lang-btn]');
  var nodes = document.querySelectorAll('[data-ru][data-en]');
  var htmlRoot = document.getElementById('html-root');

  function applyLang(lang) {
    nodes.forEach(function (node) {
      node.textContent = node.getAttribute('data-' + lang);
    });

    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    htmlRoot.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang-btn'));
    });
  });

  var savedLang = localStorage.getItem(STORAGE_KEY);
  var browserLang = navigator.language && navigator.language.toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
  applyLang(savedLang || browserLang);
})();