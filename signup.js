document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const confirmBox = document.getElementById("signupConfirm");
  
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const password = document.getElementById("password").value;
      const confirm = document.getElementById("confirmPassword").value;
  
      if (password !== confirm) {
        alert("❌ Passwords do not match!");
        return;
      }
  
      confirmBox.style.display = "block";
      this.reset();
    });
  });
  