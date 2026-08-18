# Akun & Keamanan

Mengelola pendaftaran, masuk, profil, dan keamanan data sesuai peran siswa, guru, atau admin.

## Spesifikasi

### Tujuan
Memberi pengguna cara aman untuk membuat akun, masuk, mengatur profil, dan mengelola keamanan data sesuai peran, dengan perlindungan khusus untuk pengguna di bawah umur.

### Selesai bila
- Pengguna dapat mendaftar, masuk, dan keluar sesuai peran (siswa, guru, admin) dengan autentikasi yang aman.
- Setiap pengguna dapat mengisi dan mengubah profil (nama, jenjang, sekolah, kelas) dan preferensi akun, lalu tersimpan dengan benar.
- Pengguna di bawah umur mendapat batasan privasi khusus dan tidak bisa melihat data sensitif tanpa verifikasi.
- Admin dapat melihat catatan aktivitas pengguna untuk memantau keamanan dan menindaklanjuti hal yang mencurigakan.
- Pengguna dapat menghapus akun melalui prosedur konfirmasi yang aman, dan akun tidak bisa digunakan kembali setelahnya.

## Sub-fitur: Daftar & Masuk

Membuat akun dan login sesuai peran, dengan autentikasi yang aman.

### Tujuan
Memungkinkan pengguna membuat akun dan masuk sesuai peran dengan autentikasi yang aman.

### Selesai bila
- Pengguna dapat mendaftar dengan memilih peran (siswa, guru, admin) dan mengisi data awal; jika berhasil, akun langsung aktif dan diarahkan ke dashboard sesuai peran.
- Pengguna dapat masuk kembali dengan email dan kata sandi; sesi tetap aman dan data profil peran ditampilkan dengan benar.
- Pesan kesalahan yang mudah dipahami muncul dalam bahasa Indonesia, misalnya saat email sudah terdaftar atau kata sandi salah.

## Sub-fitur: Profil & Pengaturan

Mengisi jenjang, sekolah, dan preferensi akun.

### Tujuan
Memungkinkan pengguna melengkapi dan mengubah profil, jenjang, sekolah, dan preferensi akun sesuai peran.

### Selesai bila
- Siswa dapat mengisi dan mengubah nama, jenjang, kelas, dan sekolah; guru menambahkan mata pelajaran; admin cukup nama dan sekolah.
- Preferensi akun (seperti notifikasi) dapat diubah dan langsung tersimpan.
- Halaman profil menampilkan ringkasan data yang jelas dan perubahan terlihat setelah disimpan.

## Sub-fitur: Perlindungan Data Anak

Menerapkan batasan privasi dan keamanan khusus untuk pengguna di bawah umur.

### Tujuan
Memberi batasan privasi dan keamanan khusus agar data pengguna di bawah umur terlindungi dan tidak disalahgunakan.

### Selesai bila
- Saat mendaftar sebagai siswa, muncul pernyataan persetujuan orang tua/wali yang harus disetujui sebelum akun aktif.
- Data profil siswa (seperti nama lengkap, sekolah, kelas) tidak ditampilkan ke publik dan tidak bisa dicari pengguna lain.
- Pengguna siswa hanya bisa mengubah informasi sensitif (misalnya email) setelah verifikasi ulang, dan ada batasan agar tidak bisa mengganti jenjang seenaknya.

## Sub-fitur: Catatan Aktivitas

Menampilkan log aktivitas pengguna untuk membantu admin memantau keamanan.

### Tujuan
Menyediakan catatan aktivitas pengguna agar admin dapat memantau keamanan dan mendeteksi hal yang mencurigakan.

### Selesai bila
- Sistem mencatat aktivitas penting seperti masuk, keluar, mengubah profil, dan menghapus akun beserta waktu dan pengguna yang melakukannya.
- Admin dapat membuka halaman catatan aktivitas dan melihat daftarnya.
- Admin dapat mencari/memfilter catatan berdasarkan pengguna, tanggal, atau jenis aktivitas.

## Sub-fitur: Keluar & Hapus Akun

Mengakhiri sesi atau menghapus akun dengan prosedur yang aman.

### Tujuan
Memungkinkan pengguna mengakhiri sesi atau menghapus akun dengan aman dan memahami konsekuensinya.

### Selesai bila
- Ada tombol keluar yang mengakhiri sesi dan mengarahkan kembali ke halaman masuk.
- Ada menu hapus akun yang meminta konfirmasi ulang dan menampilkan peringatan bahwa data tidak bisa dikembalikan.
- Setelah akun dihapus, email/kata sandi tidak bisa dipakai untuk masuk dan data pribadi tidak lagi muncul di aplikasi.

## Task

### 1. Buat layout utama halaman akun

### 2. Buat halaman masuk dengan data tiruan

### 3. Buat halaman pendaftaran sesuai peran

### 4. Buat halaman profil dan pengaturan akun

### 5. Buat komponen persetujuan orang tua

### 6. Buat halaman catatan aktivitas admin

### 7. Buat alur keluar dan hapus akun

### 8. Buat skema pengguna, profil, log

### 9. Buat API pendaftaran dan masuk pengguna

### 10. Buat API kelola profil dan preferensi

### 11. Buat API catatan aktivitas admin

### 12. Buat middleware otorisasi peran dan sesi

### 13. Terapkan privasi data pengguna di bawah umur

### 14. Buat API hapus akun dan keluar
