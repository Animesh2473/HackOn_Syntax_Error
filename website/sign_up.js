document.getElementById("signup-eye").addEventListener("click", function () {
  let passwordField = document.getElementById("signup-pass");
  if (passwordField.type === "password") {
      passwordField.type = "text";
      this.classList.remove("ri-eye-off-line");
      this.classList.add("ri-eye-line");
  } else {
      passwordField.type = "password";
      this.classList.remove("ri-eye-line");
      this.classList.add("ri-eye-off-line");
  }
});
