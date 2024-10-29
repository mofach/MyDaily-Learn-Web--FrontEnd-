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
      const contentElement = document.getElementById(contentId);
      contentElement.style.display = "block";

      // Jika konten yang ditampilkan adalah tabel, muat data tabel
      if (contentId === "dynamic-table") {
        fetchUserData();
      }
    });
  });
});

// Fungsi untuk mengambil data pengguna
async function fetchUserData() {
  try {
    const response = await fetch("fetch_data.php");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = ""; // Kosongkan baris yang ada

    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.fullname}</td>
                <td>${user.nik}</td>
                <td>${user.gender}</td>
                <td>${user.bloodtype}</td>
                <td>${user.birthdate}</td>
                <td>${user.religion}</td>
                <td>
                    <a href="${user.profile_pic}" download class="btn btn-primary">Download</a>
                </td>
            `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
