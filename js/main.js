/* ============================================
   CANOPY CONSULTING — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll state
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ── Active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll reveal (lightweight)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });

  // ── Phase card expand (journey page)
  document.querySelectorAll('.phase-card').forEach(card => {
    card.addEventListener('click', () => {
      const detail = card.querySelector('.phase-detail');
      if (detail) {
        const isOpen = detail.style.maxHeight && detail.style.maxHeight !== '0px';
        document.querySelectorAll('.phase-detail').forEach(d => { d.style.maxHeight = '0px'; d.style.opacity = '0'; });
        if (!isOpen) {
          detail.style.maxHeight = detail.scrollHeight + 'px';
          detail.style.opacity = '1';
        }
      }
    });
  });

  // ── Mobile nav toggle
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

});
