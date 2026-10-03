// Script compartilhado por todas as páginas do site
// (menu mobile, ano do rodapé, animação de entrada ao rolar a página)

document.addEventListener('DOMContentLoaded', function () {

  // Ano atual no rodapé
  var anoEl = document.getElementById('ano');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // Menu mobile (hambúrguer)
  var toggle = document.getElementById('menuToggle');
  var header = document.getElementById('site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
    document.querySelectorAll('nav.links a').forEach(function (a) {
      a.addEventListener('click', function () { header.classList.remove('open'); });
    });
  }

  // Animação de entrada (fade + slide) ao rolar a página
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    }
  }

});
