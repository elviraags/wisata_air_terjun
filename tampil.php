<?php
include 'koneksi.php';

$query = "SELECT nama, asal, tanggal_kunjungan 
          FROM pengunjung 
          ORDER BY tanggal_kunjungan DESC";

$result = mysqli_query($koneksi, $query);

if (!$result) {
    die("Query error: " . mysqli_error($koneksi));
}

if (mysqli_num_rows($result) > 0) {
    echo "<table border='1' width='100%' cellpadding='8' cellspacing='0' style='border-collapse: collapse; text-align:center;'>";
    
    echo "<tr style='background:#007bff; color:white;'>
            <th>Nama</th>
            <th>Asal</th>
            <th>Tanggal Kunjungan</th>
          </tr>";

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['nama']) . "</td>";
        echo "<td>" . htmlspecialchars($row['asal']) . "</td>";
        echo "<td>" . htmlspecialchars($row['tanggal_kunjungan']) . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "<p style='text-align:center;'>Belum ada data pengunjung.</p>";
}
?>