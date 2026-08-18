# Sekolah Cerdas

Prototipe platform belajar web sesuai PRD di folder ini.

## Menjalankan

```bash
npm install
npm run dev
```

Rute utama: `/`, `/latihan-soal`, `/bantuan-pr`, `/perpustakaan`, `/diskusi`, `/tugas`, `/tutor-ai`, dan `/akun`.

API tersedia di `/api/dashboard`, `/api/notifications`, `/api/exercises`, `/api/library`, `/api/homework`, `/api/assignments`, `/api/tutor`, dan `/api/moderation`.

Untuk backend nyata, salin `.env.example` menjadi `.env.local`, buat project Supabase, lalu jalankan `supabase/schema.sql` melalui SQL Editor. API key AI hanya boleh digunakan di server-side.

Jika `OPENROUTER_API_KEY` belum diisi, endpoint tutor berjalan dalam mode demo yang aman. Setelah key tersedia, respons akan diteruskan melalui OpenRouter dari server dan tidak pernah dikirim ke browser.

## Deploy ke Vercel

1. Import repository ini di Vercel atau jalankan `vercel` dari folder proyek.
2. Gunakan Build Command `npm run build` dan Framework Preset `Next.js`.
3. Tambahkan environment variables dari `.env.example` di Project Settings.
4. Jalankan deployment production dengan `vercel --prod`.
