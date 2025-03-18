
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Feedback Form Handling
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const rating = document.querySelector('input[name="rating"]:checked').value;
      alert(`Thank you for your feedback! You rated us ${rating} stars.`);
      feedbackForm.reset();
    });
  }
  
  // Add active class to current page in navbar
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
});
