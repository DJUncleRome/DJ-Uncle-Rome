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
// CONTACT FORM HANDLING (EmailJS example)
// ----------------------
// Make sure to include EmailJS SDK in your HTML:
// <script type="text/javascript" src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>
// <script type="text/javascript">emailjs.init('YOUR_USER_ID');</script>

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const msg = document.getElementById('formMessage');
    msg.innerText = "Sending...";
    msg.style.color = "gray";

    emailjs.sendForm('service_4o1e31p', 'template_22nkywp', this, 'mO2ZdDBbVEe7g5r_2')
      .then(() => {
        msg.innerText = "✅ Message sent! Thank you!";
        msg.style.color = "green";
        this.reset();
      })
      .catch((err) => {
        msg.innerText = "❌ Oops, something went wrong. Please try again.";
        msg.style.color = "red";
        console.error(err);
      });
  });
}

// ----------------------
// PLACEHOLDER FOR FUTURE SCRIPTS
// ----------------------
// Add any other custom JS here (audio controls, animations, etc.)

