<?php
include 'koneksi.php';

if (isset($_POST['simpan'])) {
    $nama = $_POST['nama'];
    $asal = $_POST['asal'];
    $tanggal = $_POST['tanggal'];

    $query = "INSERT INTO pengunjung (nama, asal, tanggal_kunjungan)
            VALUES ('$nama', '$asal', '$tanggal')";

    if (mysqli_query($koneksi, $query)) {
        // kalau sukses, kembali ke halaman dengan pesan
        header("Location: pengunjung.php?success=1");
        exit();

    } else {
        echo "Error: " . mysqli_error($koneksi);
    }
}
?>



