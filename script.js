/* ===== THE CONSCIOUS FAMILY CENTRE – PREMIUM INTERACTIONS ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
      document.body.style.overflow = '';
    });
    document.body.style.overflow = 'hidden';
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    });
  }

  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // Intersection Observer for scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => {
    el.style.opacity = 0; el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
    el.classList.add('reveal-init');
  });
  // Add CSS rule for visible
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `.reveal.visible { opacity:1; transform:translateY(0); }`;
  document.head.appendChild(styleSheet);

  // Counter animation for stats
  const stats = document.querySelectorAll('.stat-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute('data-target');
        let count = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          count += increment;
          if (count >= target) { el.textContent = target + '+'; clearInterval(timer); }
          else { el.textContent = Math.floor(count) + '+'; }
        }, 40);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  stats.forEach(stat => counterObserver.observe(stat));

  // Modal Apply Form
  const modal = document.getElementById('applyModal');
  const openBtns = document.querySelectorAll('.open-modal');
  const closeBtn = document.querySelector('.modal-close');
  openBtns.forEach(btn => btn.addEventListener('click', () => modal.classList.add('active')));
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  // Form submission with Formspree (replace FORM_ID)
  const form = document.getElementById('applyForm');
  const successDiv = document.getElementById('successMsg');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Show success message
      form.style.display = 'none';
      successDiv.style.display = 'block';
      // Optionally submit to Formspree after showing message
      // form.submit();
    });
  }
});
