# Bantuan PR

Memberi petunjuk dan langkah penyelesaian soal PR secara bertahap, disesuaikan dengan usia siswa.

## Spesifikasi

### Tujuan
Memberi siswa bantuan mengerjakan PR dengan petunjuk bertahap yang sesuai jenjang, sehingga mereka belajar menyelesaikan soal sendiri.

### Selesai bila
- Siswa dapat mengirim pertanyaan lewat teks atau foto dari menu Bantuan PR.
- Sistem membalas dengan petunjuk bertahap yang disesuaikan jenjang (SD/SMP/SMA).
- Jawaban akhir tidak langsung ditampilkan, kecuali diminta siswa.
- Semua sesi bantuan tersimpan dan bisa dibuka kembali dari riwayat.

## Sub-fitur: Kirim Pertanyaan

Mengetik soal atau mengunggah foto soal untuk mendapatkan bantuan.

### Tujuan
Memungkinkan siswa mengirim soal PR dengan mengetik pertanyaan atau mengunggah foto soal.

### Selesai bila
- Tersedia kolom teks untuk mengetik pertanyaan dan tombol unggah foto.
- Foto yang diunggah tampil sebagai lampiran dan ikut terkirim sebagai bagian pertanyaan.
- Setelah pertanyaan dikirim, sesi percakapan langsung terbuka dengan pesan pertama dari siswa.

## Sub-fitur: Petunjuk Bertahap

Menerima petunjuk langkah demi langkah, bukan langsung jawaban akhir.

### Tujuan
Memberi siswa petunjuk bertahap yang menuntun mereka menemukan jawaban sendiri, bukan langsung memberi jawaban akhir.

### Selesai bila
- Balasan AI berupa beberapa langkah yang muncul berurutan, bukan satu paragraf jawaban penuh.
- Siswa bisa meminta petunjuk berikutnya jika masih membutuhkan bantuan.
- Jawaban akhir baru muncul setelah siswa menyelesaikan soal atau secara eksplisit memintanya.

## Sub-fitur: Penjelasan Sesuai Usia

Menggunakan bahasa dan ilustrasi yang sesuai untuk jenjang SD, SMP, atau SMA.

### Tujuan
Menyesuaikan bahasa, gaya, dan ilustrasi penjelasan dengan jenjang siswa (SD/SMP/SMA) agar mudah dipahami.

### Selesai bila
- Penjelasan untuk siswa SD memakai kalimat sederhana dan contoh konkret; untuk SMP/SMA lebih mendalam dan formal.
- Sistem menggunakan jenjang dari profil siswa untuk menentukan gaya penjelasan.
- Tampilan percakapan menunjukkan jenjang yang sedang digunakan (misalnya label "SD", "SMP", "SMA").

## Sub-fitur: Riwayat Bantuan

Menyimpan percakapan bantuan PR agar bisa dibuka kembali.

### Tujuan
Menyimpan seluruh percakapan bantuan PR agar siswa dapat membuka kembali sesi yang sudah lalu.

### Selesai bila
- Setiap sesi bantuan muncul di daftar riwayat dengan judul dan waktu pengerjaan.
- Siswa dapat membuka sesi lama dan melihat semua pesan pertanyaan dan petunjuk.
- Percakapan tetap ada setelah aplikasi ditutup atau halaman dimuat ulang.

## Task

### 1. Buat halaman utama Bantuan PR dengan komposer pertanyaan

### 2. Buat komponen unggah foto soal dengan pratinjau & hapus

### 3. Buat tampilan percakapan dengan balasan petunjuk bertahap

### 4. Tambahkan aksi minta jawaban akhir di percakapan

### 5. Tampilkan label jenjang dan gaya penjelasan sesuai jenjang

### 6. Buat daftar riwayat sesi bantuan dengan judul & waktu

### 7. Simpan dan muat ulang riwayat percakapan dari localStorage

### 8. Buat tabel sesi & pesan bantuan PR beserta migrasi

### 9. Buat kebijakan RLS untuk akses sesi & pesan bantuan

### 10. Siapkan penyimpanan foto soal di Supabase Storage

### 11. Buat service AI petunjuk bertahap yang adaptif jenjang

### 12. Buat route API kirim pertanyaan teks/foto & buka sesi

### 13. Buat route API minta petunjuk berikutnya & jawaban akhir

### 14. Buat route API riwayat dan detail percakapan bantuan
