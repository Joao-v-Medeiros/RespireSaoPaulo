// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CTA button interaction
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = '✓ Em breve!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.textContent = btn.classList.contains('nav-cta') ? 'Cadastre Grátis' : 'Cadastre-se Grátis';
      btn.style.background = '';
    }, 2000);
  });
});


const themeBtn = document.getElementById('theme-toggle');
let dark = true;

themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.body.classList.toggle('tema-claro', !dark);
  themeBtn.textContent = dark ? '🌙' : '☀️';
});