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

    // Send form via EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        document.getElementById('formMessage').innerText = "Message sent! Thank you!";
        this.reset();
      })
      .catch((err) => {
        document.getElementById('formMessage').innerText = "Oops, something went wrong.";
        console.error(err);
      });
  });
}

// ----------------------
// PLACEHOLDER FOR FUTURE SCRIPTS
// ----------------------
// Add any other custom JS here (audio controls, animations, etc.)
