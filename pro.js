// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? "🎓" : "🧑🏻‍💼";
};

const nav = document.querySelector('header nav');
const navToggle = document.getElementById('nav-toggle');

if (nav && navToggle) {
  navToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
    // Switch between hamburger (☰) and close (✖)
    navToggle.innerHTML = nav.classList.contains('open') ? '&times;' : '&#9776;';
  });

  // Optional: Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.innerHTML = '&#9776;';
      }
    });
  });
}

// Typing animated roles in hero section
const roles = [
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer"
];
let roleIndex = 0, charIndex = 0, typing = true;

function typeRole() {
  const roleElement = document.getElementById('dynamic-role');
  if (!roleElement) return;
  if (typing) {
    if (charIndex <= roles[roleIndex].length) {
      roleElement.textContent = "I am " + roles[roleIndex].slice(0, charIndex);
      charIndex++;
      setTimeout(typeRole, 80);
    } else {
      typing = false;
      setTimeout(typeRole, 1200);
    }
  } else {
    if (charIndex > 0) {
      roleElement.textContent = "I am " + roles[roleIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(typeRole, 33);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 460);
    }
  }
}
window.addEventListener('DOMContentLoaded', typeRole);

// Bounce arrow smooth scroll
document.querySelector('.down-arrow').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Animated section reveal on scroll (replay on every view)
function revealOnScroll() {
  document.querySelectorAll('section, .project').forEach(el => {
    const windowHeight = window.innerHeight;
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
      if (!el.classList.contains('visible')) {
        el.classList.remove('visible'); // remove if already present
        void el.offsetWidth; // reflow to restart animation
        el.classList.add('visible');
      }
    } else {
      if (el.classList.contains('visible')) el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Contact Form client-side feedback
const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');
if (contactForm && formResult) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formResult.textContent = "Thank you for contacting me! I will respond soon.";
    contactForm.reset();
  });
}