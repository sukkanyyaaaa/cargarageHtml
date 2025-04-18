document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginConfirm = document.getElementById("loginConfirm");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const role = document.getElementById("role").value;
      loginConfirm.innerText = `✅ ${role} login successful!`;
      loginConfirm.style.display = "block";
      loginForm.reset();
    });
  });
  