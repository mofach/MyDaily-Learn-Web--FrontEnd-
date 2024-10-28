document.addEventListener("DOMContentLoaded", function () {
  // Event listener untuk setiap link
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const contentId = this.getAttribute("data-content");

      // Sembunyikan semua div dengan class "content"
      document.querySelectorAll(".content").forEach((content) => {
        content.style.display = "none";
      });

      // Tampilkan div yang sesuai dengan id yang dipilih
      document.getElementById(contentId).style.display = "block";
    });
  });
});
