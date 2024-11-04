// Display a greeting based on the time of day
document.addEventListener("DOMContentLoaded", function () {
  const hour = new Date().getHours();
  const greetingElement = document.querySelector(".hero-section h1");
  let greeting;

  if (hour < 12) {
    greeting = "Selamat Pagi UTBers!";
  } else if (hour < 18) {
    greeting = "Selamat Sore UTBers!";
  } else {
    greeting = "Selamat Malam UTBers!";
  }

  if (greetingElement) {
    greetingElement.textContent = `${greeting} Selamat Datang di SIAKAD Universitas Teknologi Bandung`;
  }
});
