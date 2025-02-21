document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "password123") {
      alert("Login successful!");
      window.location.href = "dashboard.html";
  } else {
      errorMessage.textContent = "Invalid username or password";
  }
});

document.getElementById("signupForm")?.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Signup successful! Redirecting to login...");
  showPage('login');
});

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  showPage('home');
});
