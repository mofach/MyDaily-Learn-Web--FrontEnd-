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

// Mendapatkan data dari form
$username = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Enkripsi password
$fullname = $_POST['fullname'];
$nik = $_POST['nik'];
$gender = $_POST['gender'];
$bloodtype = $_POST['bloodtype'];
$birthdate = $_POST['birthdate'];
$religion = $_POST['religion'];

// Proses upload file gambar
$profile_pic = $_FILES['profile-pic'];
$target_dir = "upload/";
$target_file = $target_dir . basename($profile_pic["name"]);
move_uploaded_file($profile_pic["tmp_name"], $target_file);

// Menyimpan data ke dalam database
$sql = "INSERT INTO users (username, email, phone, password, fullname, nik, gender, bloodtype, birthdate, religion, profile_pic)
VALUES ('$username', '$email', '$phone', '$password', '$fullname', '$nik', '$gender', '$bloodtype', '$birthdate', '$religion', '$target_file')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
