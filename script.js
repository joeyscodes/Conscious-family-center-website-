/* =============================================
   THE CONSCIOUS FAMILY CENTRE
   SCRIPT.JS – All Interactions
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const hero = document.querySelector('.hero') || document.querySelector('.page-hero');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navbar.classList.remove('scrolled');
        } else {
          navbar.classList.add('scrolled');
        }
      });
    }, { threshold: 0 });

    if (hero) {
      observer.observe(hero);
    } else {
      navbar.classList.add('scrolled');
    }
  }

  /* ---------- MOBILE HAMBURGER ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---------- CONTACT FORM CONFIRMATION ---------- */
  const contactForm = document.getElementById('contactForm');
  const confirmationMsg = document.getElementById('confirmationMsg');

  if (contactForm && confirmationMsg) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      contactForm.style.display = 'none';
      confirmationMsg.style.display = 'block';

      confirmationMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Uncomment below for live Formspree:
      // contactForm.submit();
    });
  }

});
