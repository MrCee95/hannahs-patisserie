const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submitBtn');

contactForm?.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Validate
  if (!contactForm.checkValidity()) {
    formStatus.textContent = 'Please fill in all required fields.';
    formStatus.className = 'text-center text-sm mt-2 text-red-600';
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  formStatus.textContent = '';
  
  try {
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Success
      formStatus.textContent = '✨ Thank you! Your message has been sent. We\'ll reply within 24 hours.';
      formStatus.className = 'text-center text-sm mt-2 text-green-600 font-medium';
      contactForm.reset();
      
      // Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          'event_category': 'engagement',
          'event_label': 'contact_form'
        });
      }
    } else {
      // Error from Formspree
      const data = await response.json();
      throw new Error(data.error || 'Something went wrong');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    formStatus.textContent = '❌ Oops! There was a problem. Please try again or call us directly.';
    formStatus.className = 'text-center text-sm mt-2 text-red-600';
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message';
  }
});