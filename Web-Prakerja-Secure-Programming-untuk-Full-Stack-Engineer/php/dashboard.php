<?php
// Ambil data dari database
$conn = new mysqli('localhost', 'root', '', 'db_user');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username, nama_user, profile FROM user ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $username = $row["username"];
    $nama_user = $row["nama_user"];
    $profile = $row["profile"];
} else {
    echo "0 results";
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-primary text-white text-center">
                        <h4>Welcome to Dashboard</h4>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label>Username:</label>
                            <input type="text" class="form-control" value="<?php echo $username; ?>" readonly>
                        </div>
                        <div class="form-group">
                            <label>Nama User:</label>
                            <input type="text" class="form-control" value="<?php echo $nama_user; ?>" readonly>
                        </div>
                        <div class="form-group">
                            <label>Profile:</label><br>
                            <img src="<?php echo $profile; ?>" alt="Profile Image" style="max-width: 100%; height: auto;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
