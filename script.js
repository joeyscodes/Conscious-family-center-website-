/*=============================================
   THE CONSCIOUS FAMILY CENTRE
   script.js — IntersectionObserver animations
===============================================*/

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const hero = document.querySelector('.hero');
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

  /* ---------- MOBILE HAMBURGER MENU ---------- */
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

  /* ---------- SCROLL REVEAL ANIMATION ---------- */
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
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---------- SMOOTH COUNTER ANIMATION (for stats if needed) ---------- */
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          };
          
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
  }

  /* ---------- CONTACT FORM HANDLING ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  
  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Hide form, show success message
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
      
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // In production, the form submits to Formspree
      // contactForm.submit();
    });
  }

});
