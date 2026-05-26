// CONSCIOUS FAMILY CENTRE - BUBBLE CINEMATIC SCRIPT
gsap.registerPlugin(ScrollTrigger);

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader) gsap.to(preloader, { opacity: 0, duration: 0.6, onComplete: () => preloader.remove() });
  }, 800);
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
if (cursor && follower) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15 });
  });
  const interactive = document.querySelectorAll('a, button, .btn, .program-card-alt, .value-card-alt, .activity-item-alt');
  interactive.forEach(el => {
    el.addEventListener('mouseenter', () => { follower.style.width = '60px'; follower.style.height = '60px'; follower.style.borderColor = '#7ED957'; });
    el.addEventListener('mouseleave', () => { follower.style.width = '40px'; follower.style.height = '40px'; follower.style.borderColor = '#7ED957'; });
  });
}

// Navbar scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Mobile menu
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => menu.classList.remove('active')));
}

// THREE.JS BUBBLE CANVAS (instead of particles)
const canvas = document.getElementById('bubble-canvas');
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Bubble geometry (spheres)
  const bubbleCount = 80;
  const bubbles = [];
  const bubbleGeometry = new THREE.SphereGeometry(0.12, 16, 16);
  
  for (let i = 0; i < bubbleCount; i++) {
    const material = new THREE.MeshStandardMaterial({
      color: 0x7ED957,
      emissive: 0x2E7D32,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.5,
      roughness: 0.2,
      metalness: 0.1
    });
    const bubble = new THREE.Mesh(bubbleGeometry, material);
    bubble.userData = {
      speedX: (Math.random() - 0.5) * 0.008,
      speedY: Math.random() * 0.01 + 0.005,
      speedZ: (Math.random() - 0.5) * 0.008,
      startY: (Math.random() - 0.5) * 8
    };
    bubble.position.x = (Math.random() - 0.5) * 12;
    bubble.position.y = (Math.random() - 0.5) * 8;
    bubble.position.z = (Math.random() - 0.5) * 10 - 5;
    scene.add(bubble);
    bubbles.push(bubble);
  }

  // Add ambient light to make bubbles glow
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0x7ED957, 0.5);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  camera.position.z = 6;

  function animateBubbles() {
    requestAnimationFrame(animateBubbles);
    bubbles.forEach(bubble => {
      bubble.position.x += bubble.userData.speedX;
      bubble.position.y += bubble.userData.speedY;
      bubble.position.z += bubble.userData.speedZ;
      // reset if out of bounds
      if (bubble.position.y > 5) bubble.position.y = -4;
      if (bubble.position.y < -5) bubble.position.y = 4;
      if (Math.abs(bubble.position.x) > 7) bubble.position.x = (Math.random() - 0.5) * 10;
      if (Math.abs(bubble.position.z) > 8) bubble.position.z = (Math.random() - 0.5) * 10;
    });
    renderer.render(scene, camera);
  }
  animateBubbles();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// GSAP scroll reveals
gsap.utils.toArray('.value-card-alt, .program-card-alt, .activity-item-alt, .about-grid-split, .contact-details, .contact-message').forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
    y: 50,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.1,
    ease: 'power3.out'
  });
});

// Hero card entrance
gsap.from('.hero-card', { duration: 1.2, y: 80, opacity: 0, ease: 'power3.out', delay: 0.3 });

// Parallax on hero background
gsap.to('.hero-background', {
  scrollTrigger: { scrub: true, start: 'top top', end: 'bottom top' },
  y: 150,
  opacity: 0.2
});

// 3D tilt on cards
document.querySelectorAll('.program-card-alt, .value-card-alt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) translateY(-5px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href !== '#' && href !== '') {
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    }
  });
});

console.log('Conscious Family Centre — Bubble Cinematic Experience Loaded');
