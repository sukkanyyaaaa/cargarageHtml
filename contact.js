document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("✅ Message sent successfully! We’ll get back to you shortly.");
      form.reset();
    });
  });
  