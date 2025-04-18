document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    const confirmation = document.getElementById("confirmation");
    const dateInput = document.getElementById("date");
  
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      confirmation.style.display = "block";
      form.reset();
    });
  });
  