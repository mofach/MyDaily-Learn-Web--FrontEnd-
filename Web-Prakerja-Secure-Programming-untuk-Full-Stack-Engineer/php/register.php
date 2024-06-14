<?php
// Koneksi ke database
$conn = new mysqli('localhost', 'root', '', 'db_user');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $conn->real_escape_string($_POST['username']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $nama_user = $conn->real_escape_string($_POST['nama_user']);
    $profile = $_FILES['profile'];

    // Validasi file profile
    $allowed_ext = 'jpg';
    $max_size = 500 * 1024; // 500kB
    $file_ext = pathinfo($profile['name'], PATHINFO_EXTENSION);
    $file_size = $profile['size'];
    
    if ($file_ext !== $allowed_ext || $file_size > $max_size) {
        die("File profile harus berupa JPG dan ukuran maksimal 500kB.");
    }

    // Pindahkan file yang diupload ke folder tujuan
    $target_dir = "../uploads/";
    $target_file = $target_dir . basename($profile['name']);

    if (!move_uploaded_file($profile['tmp_name'], $target_file)) {
        die("Error mengupload file profile.");
    }

    // Simpan data user ke database
    $sql = "INSERT INTO user (username, password, nama_user, profile) VALUES ('$username', '$password', '$nama_user', '$target_file')";
    
    if ($conn->query($sql) === TRUE) {
        // Redirect ke dashboard jika registrasi berhasil
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
