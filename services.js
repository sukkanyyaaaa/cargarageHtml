document.addEventListener("DOMContentLoaded", () => {
    const note = document.querySelector(".note");
  
 
    const originalText = note.textContent;
    const extraText = " (Saturdays after 2 PM incur the surcharge.)";
  
    note.addEventListener("mouseenter", () => {
      note.textContent = originalText + extraText;
    });
  
    note.addEventListener("mouseleave", () => {
      note.textContent = originalText;
    });
  
    
    const pricingLink = document.querySelector(".nav-pricing");
    if (pricingLink) {
      pricingLink.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".pricing-table").scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  