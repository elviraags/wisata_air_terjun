<?php
include 'koneksi.php';
$notif = '';
$notif_type = '';

if (isset($_GET['success']) && $_GET['success'] == 1) {
    $notif = '✔ Data anda telah disimpan';
    $notif_type = 'success';
} elseif (isset($_GET['error']) && $_GET['error'] == 1) {
    $notif = '✖ Gagal menyimpan data';
    $notif_type = 'error';
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pengunjung</title>
<link rel="stylesheet" href="style.css?v=2">
</head>
<body>

<header>
    <div class="logo">Air Terjun Kaliorang</div>
    <nav>
        <a href="index.html#home">Beranda</a>
        <a href="index.html#about">Sejarah</a>
        <a href="index.html#gallery">Galeri</a>
        <a href="pengunjung.php">Pengunjung</a>
    </nav>
</header>

<div class="container">

    <h2>Form Pengunjung</h2>

    <form method="POST" action="proses_pengunjung.php">
        <input type="text" name="nama" placeholder="Nama Lengkap" required>
        <input type="text" name="asal" placeholder="Asal Daerah" required>
        <input type="date" name="tanggal" required>
        <button type="submit" name="simpan">Simpan</button>
    </form>

    <h2>Daftar Pengunjung</h2>
    <?php include 'tampil.php'; ?>

    <a href="index.html">← Kembali ke Home</a>
</div>

<!-- TOAST NOTIFIKASI -->
<?php if($notif != ''): ?>
<div id="toast" class="toast <?php echo $notif_type; ?>">
    <?php echo $notif; ?>
    <span class="close-btn">&times;</span>
</div>
<?php endif; ?>

<footer>
    ©2026 Wisata Alam Air Terjun | Kutai Timur
</footer>

<script src="script.js"></script>
</body>
</html>