// ----------------------
// SMOOTH SCROLLING
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// ----------------------
// NAVBAR COLLAPSE ON LINK CLICK (for mobile)
// ----------------------
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// ----------------------
// EMAILJS CONTACT FORM HANDLING
// ----------------------
(function() {
  // Initialize EmailJS (global object loaded from CDN in index.html)
  emailjs.init("mO2ZdDBbVEe7g5r_2");

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMessage');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      msg.textContent = "Sending...";
      msg.style.color = "gray";

      emailjs.sendForm('service_4o1e31p', 'template_22nkywp', form)
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
  });
})();



// ----------------------
// PLACEHOLDER FOR FUTURE SCRIPTS
// ----------------------
// Add any other custom JS here (audio controls, animations, etc.)

