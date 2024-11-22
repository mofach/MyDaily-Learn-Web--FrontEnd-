// Static username and password for login
const staticUsername = "admin";
const staticPassword = "admin123";

// Register Form Submission
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user credentials temporarily (in practice, use a database)
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
  });

// Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve registered user credentials
  const registeredUsername = localStorage.getItem("username");
  const registeredPassword = localStorage.getItem("password");

  if (
    (username === staticUsername && password === staticPassword) ||
    (username === registeredUsername && password === registeredPassword)
  ) {
    alert("Login successful!");
    window.location.href = "menu.html";
  } else {
    alert("Invalid username or password!");
  }
});
