// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.innerHTML = body.dataset.theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', menu.classList.contains('active'));
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });

      // Close mobile menu after clicking a link
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Typed.js for Hero Tagline
const typed = new Typed('#typed', {
  strings: [
    'Cybersecurity Practitioner',
    'Aspiring Software Developer',
    'Aspiring UX/UI Designer',
    'Tech Innovator',
    'IT Teacher'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1000,
  loop: true
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});

gsap.utils.toArray('.skill-item, .project-card, .service-card').forEach(card => {
  gsap.from(card, {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: card,
      start: 'top 90%',
      toggleActions: 'play none none none'
    }
  });
});