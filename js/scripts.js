document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Navbar collapse
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse?.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });

  // Fade-in observer
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  elements.forEach(el => observer.observe(el));

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // EmailJS form
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  if (form) {
    msg.textContent = "";
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      msg.textContent = "Sending...";
      msg.style.color = "gray";

      emailjs.sendForm('service_4o1e31p', 'template_e097hey', form)
        .then(() => emailjs.sendForm('service_4o1e31p', 'template_22nkywp', form))
        .then(() => {
          msg.textContent = "✅ Message sent! Thank you!";
          msg.style.color = "green";
          form.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          msg.textContent = "❌ Oops! Something went wrong. Try again.";
          msg.style.color = "red";
        });
    });
  }
});


// ----------------------
// MAGIC WAND SPARKLE EFFECT
// ----------------------
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("magic-sparkle");
  document.body.appendChild(sparkle);

  const size = Math.random() * 6 + 4; // 4–10px
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;

  // random hue for variation
  const hue = Math.floor(Math.random() * 360);
  sparkle.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 80%) 0%, transparent 70%)`;

  // random direction drift
  const xMove = (Math.random() - 0.5) * 60;
  const yMove = (Math.random() - 0.5) * 60;
  sparkle.animate(
    [
      { transform: `translate(0, 0) scale(1)`, opacity: 1 },
      { transform: `translate(${xMove}px, ${yMove}px) scale(0)`, opacity: 0 }
    ],
    { duration: 800, easing: "ease-out", fill: "forwards" }
  );

  setTimeout(() => sparkle.remove(), 800);
});


// ----------------------
// CONTINUOUS SPARKLE IDLE EFFECT
// ----------------------
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;

// Track last known mouse position
document.addEventListener("mousemove", (e) => {
  lastMouseX = e.pageX;
  lastMouseY = e.pageY;
});

// Emit sparkles periodically (even when still)
setInterval(() => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("magic-sparkle");
  document.body.appendChild(sparkle);

  const size = Math.random() * 6 + 4; // 4–10px
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // Emit near the cursor, not exactly on it
  const offsetX = (Math.random() - 0.5) * 50;
  const offsetY = (Math.random() - 0.5) * 50;
  sparkle.style.left = `${lastMouseX + offsetX}px`;
  sparkle.style.top = `${lastMouseY + offsetY}px`;

  // random hue for variation
  const hue = Math.floor(Math.random() * 360);
  sparkle.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 80%) 0%, transparent 70%)`;

  // animation drift
  const xMove = (Math.random() - 0.5) * 30;
  const yMove = (Math.random() - 0.5) * 30;
  sparkle.animate(
    [
      { transform: `translate(0, 0) scale(1)`, opacity: 1 },
      { transform: `translate(${xMove}px, ${yMove}px) scale(0)`, opacity: 0 }
    ],
    { duration: 1000, easing: "ease-out", fill: "forwards" }
  );

  setTimeout(() => sparkle.remove(), 1000);
}, 200); // every 0.2 seconds




// Placeholder for future scripts//
