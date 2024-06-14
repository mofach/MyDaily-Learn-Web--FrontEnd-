document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let nama_user = document.getElementById("nama_user").value;
    let profile = document.getElementById("profile").files[0];

    if (username.length < 5) {
      alert("Username harus minimal 5 karakter.");
      event.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert("Password harus minimal 8 karakter.");
      event.preventDefault();
      return;
    }

    if (!profile || profile.type !== "image/jpeg") {
      alert("File profile harus berupa gambar JPG.");
      event.preventDefault();
      return;
    }

    if (profile.size > 500 * 1024) {
      alert("Ukuran file profile maksimal 500kB.");
      event.preventDefault();
      return;
    }
  });
