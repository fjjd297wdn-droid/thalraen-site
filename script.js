// Smooth scroll for top nav
document.querySelectorAll('.top-nav a').forEach(a=>{
  a.added = a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Simple reveal on scroll
const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.card, .about-inner, .impact .body').forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(12px)';
  reveal.observe(el);
});

document.addEventListener('DOMContentLoaded', ()=>{
  // When revealed, fade/slide in
  const style = document.createElement('style');
  style.textContent = `
    .in{opacity:1 !important; transform:none !important; transition:opacity .5s ease, transform .5s ease;}
  `;
  document.head.appendChild(style);
});
