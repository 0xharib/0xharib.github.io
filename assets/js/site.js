(function () {
  var elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) {
    return;
  }

  var reduceMotion = false;
  if (window.matchMedia) {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(elements, function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  Array.prototype.forEach.call(elements, function (element) {
    var delay = element.getAttribute('data-reveal-delay');
    if (delay) {
      element.style.transitionDelay = delay + 'ms';
    }
    observer.observe(element);
  });
})();
