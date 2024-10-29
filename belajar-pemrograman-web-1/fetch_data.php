<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_registration";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query untuk mengambil data
$sql = "SELECT username, email, phone, fullname, nik, gender, bloodtype, birthdate, religion, profile_pic FROM users"; // Ganti 'users' sesuai nama tabel Anda
$result = $conn->query($sql);

$users = [];
if ($result->num_rows > 0) {
    // Ambil semua pengguna sebagai array asosiatif
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Kembalikan respons JSON
echo json_encode($users);

// Tutup koneksi
$conn->close();
?>
