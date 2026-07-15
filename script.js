(function(){
  "use strict";
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* footer year */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- typing effect for role text ---------- */
  var roleEl = document.getElementById('roleText');
  var fullText = roleEl.getAttribute('data-role') || '';
  if(reduceMotion){
    roleEl.textContent = fullText;
  } else {
    var i = 0;
    var cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    function typeStep(){
      if(i <= fullText.length){
        roleEl.textContent = fullText.slice(0, i);
        roleEl.appendChild(cursor);
        i++;
        setTimeout(typeStep, 34);
      }
    }
    typeStep();
  }

  /* ---------- scrollspy for navbar ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = navLinks.map(function(a){ return document.getElementById(a.getAttribute('data-section')); });

  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var id = entry.target.id;
        navLinks.forEach(function(a){
          a.classList.toggle('active', a.getAttribute('data-section') === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(function(s){ if(s) spy.observe(s); });

  /* ---------- reveal-on-scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if(reduceMotion){
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el){ revealObserver.observe(el); });
  }

  /* ---------- animate skill bars once the panel is visible ---------- */
  var panel = document.querySelector('.stack-panel');
  var bars = document.querySelectorAll('.skill-bar-fill');
  var barsObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        bars.forEach(function(bar){
          var pct = bar.getAttribute('data-pct') || 0;
          bar.style.width = pct + '%';
        });
        barsObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  if(panel) barsObserver.observe(panel);

  /* ---------- keep the skill-count badge honest ---------- */
  var skillCount = document.querySelectorAll('#skillList .skill-row').length;
  var countEl = document.getElementById('skillCount');
  if(countEl) countEl.textContent = skillCount + ' online';

})();
