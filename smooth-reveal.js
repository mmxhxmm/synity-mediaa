(function () {
  'use strict';
 
  /* ── elements to animate ── */
  const TARGETS = [
    /* marketing approach cards */
    '#marketing .approach-card',
    /* release / tracklist rows */
    '#releases .release-item',
  ];
 
  /* ── add .slide-up to all targets ── */
  const allEls = TARGETS.flatMap(sel =>
    Array.from(document.querySelectorAll(sel))
  );
 
  allEls.forEach(el => el.classList.add('slide-up'));
 
  /* ── IntersectionObserver fires .in when element enters viewport ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target); // fire once, done
        }
      });
    },
    {
      threshold: 0.15,          // element 15% visible before triggering
      rootMargin: '0px 0px -40px 0px'  // trigger slightly before bottom edge
    }
  );
 
  allEls.forEach(el => observer.observe(el));
 
})();