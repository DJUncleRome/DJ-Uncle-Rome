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

// CONTACT FORM HANDLING - waits for EmailJS to be ready
(function () {
  const contactForm = document.getElementById('contactForm');
  const msgEl = document.getElementById('formMessage');

  function attachFormHandler() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      msgEl.innerText = 'Sending...';
      msgEl.style.color = 'gray';

      if (typeof emailjs === 'undefined') {
        msgEl.innerText = 'Email service not available. Please try again later.';
        msgEl.style.color = 'red';
        console.error('EmailJS not loaded when attempting to send.');
        return;
      }

      // sendForm(serviceID, templateID, formEl, publicKey)
      emailjs.sendForm('service_4o1e31p', 'template_22nkywp', this, 'mO2ZdDBbVEe7g5r_2')
        .then(function () {
          msgEl.innerText = '✅ Message sent! Thank you!';
          msgEl.style.color = 'green';
          contactForm.reset();
        })
        .catch(function (err) {
          msgEl.innerText = '❌ Oops — something went wrong. Check console.';
          msgEl.style.color = 'red';
          console.error('EmailJS send error:', err);
        });
    });
  }

  // If SDK not loaded yet, wait for the event (dispatched by index.html's loader)
  if (typeof emailjs === 'undefined') {
    document.addEventListener('emailjs-ready', attachFormHandler);

    // as a fallback, poll for a short time
    let tries = 0;
    const poll = setInterval(function () {
      if (typeof emailjs !== 'undefined') {
        clearInterval(poll);
        attachFormHandler();
      } else if (++tries > 50) { // ~10 seconds
        clearInterval(poll);
        console.warn('EmailJS SDK did not load after waiting.');
      }
    }, 200);
  } else {
    attachFormHandler();
  }
})();


// ----------------------
// PLACEHOLDER FOR FUTURE SCRIPTS
// ----------------------
// Add any other custom JS here (audio controls, animations, etc.)


