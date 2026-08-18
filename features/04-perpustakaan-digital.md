# Perpustakaan Digital

Mencari dan membuka buku paket, buku cerita, dan materi dari sumber resmi Kemendikbud dengan tautan asli.

## Spesifikasi

### Tujuan
Membantu siswa menemukan dan membuka buku paket, buku cerita, dan materi belajar dari sumber resmi Kemendikbud melalui tautan asli, sehingga informasi yang didapat terpercaya dan sesuai jenjang.

### Selesai bila
- Pengguna dapat mencari buku dari halaman Perpustakaan dan melihat hasil yang relevan berdasarkan judul, jenjang, atau kategori.
- Setiap hasil buku menampilkan informasi dasar (judul, penulis, jenjang, mata pelajaran/kategori) beserta tautan ke sumber resmi.
- Pengguna dapat menyaring koleksi berdasarkan jenis, jenjang, dan mata pelajaran, dan hasil filter langsung tampil.
- Pengguna dapat menyimpan buku favorit ke "Koleksi Tersimpan" dan membukanya kembali dari daftar tersebut.
- Tidak ada konten buku yang disalin; halaman hanya menampilkan metadata dan menautkan ke sumber asli.

## Sub-fitur: Cari Buku

Menemukan buku berdasarkan judul, jenjang, atau kategori melalui pencarian.

### Tujuan
Memudahkan pengguna menemukan buku yang dicari dengan mengetik judul, jenjang, atau kategori pada kolom pencarian.

### Selesai bila
- Kolom pencarian tersedia di halaman Perpustakaan dan hasil muncul saat pengguna mengetik atau menekan tombol cari.
- Hasil pencarian menampilkan buku yang cocok dengan judul, jenjang, atau kategori yang diketik.
- Jika tidak ada hasil, muncul pesan yang jelas dan saran untuk mengubah kata kunci/filter.

## Sub-fitur: Filter Koleksi

Menyaring buku berdasarkan jenis, jenjang, dan mata pelajaran.

### Tujuan
Membantu pengguna mempersempit daftar buku dengan memilih jenis, jenjang, dan mata pelajaran.

### Selesai bila
- Tersedia opsi filter jenis (buku paket/buku cerita/materi), jenjang (SD/SMP/SMA), dan mata pelajaran.
- Filter dapat dikombinasikan dan daftar buku langsung diperbarui sesuai pilihan.
- Ada tombol/tautan untuk menghapus semua filter agar kembali ke daftar lengkap.

## Sub-fitur: Detail & Sumber Asli

Melihat informasi buku, penulis, dan tautan menuju sumber resmi tanpa menyalin konten.

### Tujuan
Menampilkan informasi lengkap sebuah buku beserta tautan ke sumber resmi agar pengguna dapat membaca/mengunduh dari Kemendikbud.

### Selesai bila
- Halaman detail buku menampilkan judul, penulis, jenjang, mata pelajaran/kategori, deskripsi, dan sampul (jika tersedia).
- Ada tombol tautan jelas "Buka di Sumber Resmi" yang mengarah ke buku.kemendikdasmen.go.id (tautan asli).
- Halaman tidak menampilkan konten isi buku yang disalin; hanya informasi dan tautan.

## Sub-fitur: Koleksi Tersimpan

Menyimpan buku favorit agar mudah diakses kembali.

### Tujuan
Memungkinkan pengguna menyimpan buku favorit agar mudah dibuka kembali tanpa mencarinya lagi.

### Selesai bila
- Setiap buku memiliki tombol simpan/batal simpan yang mudah ditemukan (ikon/bookmark).
- Tersedia halaman/daftar "Koleksi Tersimpan" yang menampilkan semua buku yang disimpan pengguna.
- Pengguna dapat membuka detail buku dari koleksi tersimpan dan menghapus buku dari daftar tersebut.

## Task

### 1. Bangun halaman Perpustakaan dengan daftar buku tiruan

### 2. Implementasi pencarian buku pada data tiruan

### 3. Implementasi filter jenis jenjang mapel data tiruan

### 4. Buat halaman detail buku dengan tautan sumber

### 5. Buat halaman Koleksi Tersimpan dengan penyimpanan lokal

### 6. Buat skema tabel buku dan kategori

### 7. Buat skema tabel koleksi tersimpan

### 8. Buat kebijakan RLS untuk buku dan koleksi

### 9. Buat API pencarian dan filter buku

### 10. Buat API detail buku

### 11. Buat API kelola koleksi tersimpan

### 12. Buat seed data buku sumber resmi

### 13. Buat service integrasi data buku Kemendikbud
