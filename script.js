// CONSCIOUS FAMILY CENTRE - JAVASCRIPT
// Smooth animations, interactions, mobile menu, lazy loading

document.addEventListener('DOMContentLoaded', function() {
  
  // ========== MOBILE MENU TOGGLE ==========
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Animate menu toggle
      const spans = this.querySelectorAll('span');
      spans[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translateY(10px)' 
        : 'rotate(0)';
      spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translateY(-10px)' 
        : 'rotate(0)';
    });
  }
  
  // Close menu when link clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      if (menuToggle) {
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';
      }
    });
  });

  // ========== SCROLL ANIMATIONS ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with 'observe' class
  const elementsToObserve = document.querySelectorAll('.observe');
  elementsToObserve.forEach(el => {
    observer.observe(el);
  });

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ========== PARALLAX EFFECT ==========
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', function() {
      parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        const elementOffset = element.offsetTop;
        const distance = scrollPosition - elementOffset;
        const percentage = distance * 0.5;
        
        element.style.transform = `translateY(${percentage}px)`;
      });
    }, false);
  }

  // ========== LAZY LOADING IMAGES ==========
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // ========== FORM SUBMISSION ==========
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      // Let Formspree handle submission natively
      // Just add visual feedback
      const submitBtn = this.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Re-enable after 3 seconds as fallback
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  });

  // ========== COUNTER ANIMATION ==========
  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString();
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.animated) {
        const counters = entry.target.querySelectorAll('[data-count]');
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.count);
          animateCounter(counter, target);
        });
        entry.target.animated = true;
      }
    });
  }, { threshold: 0.1 });

  const impactSections = document.querySelectorAll('.impact-section');
  impactSections.forEach(section => {
    counterObserver.observe(section);
  });

  // ========== SMOOTH BUTTON HOVER RIPPLE ==========
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // ========== NAVIGATION SCROLL EFFECT ==========
  let lastScrollTop = 0;
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      nav.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
      nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // ========== SCROLL TO TOP BUTTON ==========
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1F6B3A 0%, #4C8F50 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 999;
    display: none;
    font-weight: 700;
  `;

  document.body.appendChild(scrollToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'flex';
      scrollToTopBtn.style.alignItems = 'center';
      scrollToTopBtn.style.justifyContent = 'center';
      scrollToTopBtn.style.opacity = '1';
    } else {
      scrollToTopBtn.style.opacity = '0';
      setTimeout(() => {
        scrollToTopBtn.style.display = 'none';
      }, 300);
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ========== ANIMATE ON LOAD ==========
  window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease';
  });

  // ========== PERFORMANCE: Debounce scroll event ==========
  let scrollTimeout;
  
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(function() {
      // Scroll events handled here with better performance
    });
  });

  // ========== FORM VALIDATION ==========
  const contactForm = document.querySelector('form[action*="formspree"]');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const emailInput = this.querySelector('input[type="email"]');
      const nameInput = this.querySelector('input[type="text"]');
      
      if (emailInput && !isValidEmail(emailInput.value)) {
        e.preventDefault();
        emailInput.style.borderColor = '#e74c3c';
        alert('Please enter a valid email address');
        return false;
      }
      
      if (nameInput && nameInput.value.trim().length < 2) {
        e.preventDefault();
        nameInput.style.borderColor = '#e74c3c';
        alert('Please enter your full name');
        return false;
      }
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // ========== TYPED EFFECT (Optional) ==========
  function typeEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    };
    
    type();
  }

  // ========== PAGE TRANSITION ANIMATION ==========
  const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="https://"])');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Don't animate external links or phone numbers
      if (href && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('javascript:')) {
        e.preventDefault();
        
        // Fade out current page
        document.body.style.opacity = '0.7';
        
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });

  // Fade in page on load
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.3s ease';

  // ========== OBSERVE ELEMENTS ON LOAD ==========
  window.addEventListener('load', function() {
    // Add observe class to elements for animation on scroll
    const cards = document.querySelectorAll('.program-card, .mission-card, .activity-card, .testimonial-card');
    cards.forEach(card => {
      if (!card.classList.contains('observe')) {
        card.classList.add('observe');
        observer.observe(card);
      }
    });
  });

  // ========== ACCESSIBILITY: Focus visible ==========
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
  });

  // ========== COOKIE CONSENT (Optional) ==========
  const consentGiven = localStorage.getItem('cfc-consent');
  
  if (!consentGiven) {
    // You can add cookie consent banner here if needed
  }

  // ========== PRELOAD IMAGES ==========
  function preloadImages(imageArray) {
    imageArray.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // Add important images to preload
  const heroImages = document.querySelectorAll('.hero-image img, .program-image');
  if (heroImages.length > 0) {
    preloadImages(Array.from(heroImages).map(img => img.src || img.dataset.src));
  }

});

// ========== PERFORMANCE MONITORING ==========
if (window.performance && window.performance.timing) {
  window.addEventListener('load', function() {
    setTimeout(function() {
      const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      console.log('Page loaded in ' + pageLoadTime + 'ms');
    }, 0);
  });
}
