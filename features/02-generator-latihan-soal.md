# Generator Latihan Soal

Membuat kuis atau latihan soal dengan AI sesuai jenjang, kelas, mapel, topik, dan tingkat kesulitan.

## Spesifikasi

### Tujuan
Membantu siswa berlatih soal secara mandiri melalui kuis atau latihan berbantuan AI yang disesuaikan dengan jenjang, kelas, mapel, topik, dan kesulitan.

### Selesai bila
- Pengguna dapat membuat latihan dengan memilih parameter melalui formulir dan langsung masuk ke halaman soal.
- Pengguna dapat mengerjakan soal pilihan ganda/esai dan mengumpulkan jawaban.
- Setelah selesai, pengguna melihat nilai, kunci, dan pembahasan tiap soal.
- Pengguna dapat melihat riwayat latihan dan perkembangan nilai dari waktu ke waktu.

## Sub-fitur: Atur Parameter Soal

Memilih jenjang, kelas, mata pelajaran, topik, kesulitan, dan jumlah soal sebelum membuat latihan.

### Tujuan
Memudahkan pengguna menentukan jenjang, kelas, mapel, topik, kesulitan, dan jumlah soal sebelum membuat latihan.

### Selesai bila
- Formulir menampilkan keenam parameter dengan label jelas, pilihan yang saling menyesuaikan, dan nilai default yang masuk akal.
- Setelah tombol "Buat Latihan" ditekan, sistem memproses parameter dan menampilkan halaman soal.

## Sub-fitur: Kerjakan Soal

Menjawab soal pilihan ganda atau esai dengan tampilan yang mudah digunakan.

### Tujuan
Memberikan tampilan mengerjakan soal pilihan ganda atau esai yang mudah digunakan.

### Selesai bila
- Soal pilihan ganda menampilkan opsi jawaban yang bisa dipilih; soal esai menyediakan area menulis jawaban.
- Pengguna dapat berpindah antar soal dan jawaban yang sudah diisi tetap tersimpan sebelum dikumpulkan.
- Ada tombol "Kumpulkan" yang jelas dan konfirmasi sebelum jawaban dikirim.

## Sub-fitur: Kunci & Pembahasan

Melihat kunci jawaban dan penjelasan setiap soal setelah latihan selesai.

### Tujuan
Menampilkan kunci jawaban dan pembahasan setiap soal setelah latihan selesai.

### Selesai bila
- Setiap soal menampilkan jawaban benar dan jawaban pengguna, dengan penanda benar/salah.
- Pembahasan singkat muncul untuk tiap soal dan mudah dipahami.

## Sub-fitur: Rekap Nilai & Riwayat

Menyimpan hasil latihan dan menampilkan perkembangan nilai dari waktu ke waktu.

### Tujuan
Menyimpan hasil latihan dan menampilkan perkembangan nilai dari waktu ke waktu.

### Selesai bila
- Setiap latihan yang selesai muncul di halaman riwayat dengan nilai, tanggal, dan parameter pembuatan.
- Halaman riwayat menampilkan ringkasan perkembangan nilai (misalnya tren atau rata-rata) secara visual.

## Task

### 1. Buat halaman parameter latihan dengan data tiruan

### 2. Buat halaman kerjakan soal dengan jawaban tersimpan lokal

### 3. Buat halaman kunci jawaban & pembahasan dengan mock

### 4. Buat halaman riwayat & grafik progres dengan mock

### 5. Buat skema database & RLS untuk latihan soal

### 6. Buat API generate soal dari parameter

### 7. Buat API submit jawaban & kalkulasi nilai

### 8. Buat API riwayat & statistik progres
