"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const roles = {
  siswa: {
    label: "Siswa",
    name: "Nadia Pratama",
    school: "SMA Negeri 4 Bandung",
    grade: "Kelas 11 IPA",
    greeting: "Selamat sore, Nadia!",
    subtitle: "Siap melanjutkan perjalanan belajarmu hari ini?",
  },
  guru: {
    label: "Guru",
    name: "Budi Santoso",
    school: "SMA Negeri 4 Bandung",
    grade: "Matematika",
    greeting: "Selamat sore, Pak Budi!",
    subtitle: "Pantau perkembangan kelas dan tugas hari ini.",
  },
  admin: {
    label: "Admin Sekolah",
    name: "Rina Wulandari",
    school: "SMA Negeri 4 Bandung",
    grade: "Administrator",
    greeting: "Selamat sore, Bu Rina!",
    subtitle: "Kelola aktivitas sekolah dengan aman dan teratur.",
  },
};

const quickActions = [
  { icon: "✦", title: "Buat Soal", text: "Latihan baru dengan AI", tone: "mint" },
  { icon: "⌁", title: "Bantuan PR", text: "Dapatkan petunjuk", tone: "lilac" },
  { icon: "▣", title: "Cari Buku", text: "Sumber resmi", tone: "peach" },
  { icon: "◌", title: "Diskusi", text: "Tanya teman sejenjang", tone: "sky" },
];

const notifications = [
  { type: "Tugas", title: "Tugas Fisika dikumpulkan besok", time: "10 menit lalu", color: "orange", unread: true },
  { type: "Forum", title: "Ada balasan baru di diskusi Matematika", time: "1 jam lalu", color: "purple", unread: true },
  { type: "Sekolah", title: "Pengumuman: Jadwal ujian tengah semester", time: "Kemarin", color: "blue", unread: false },
];

const results = [
  { category: "Materi", title: "Hukum Newton dan penerapannya", meta: "Fisika · Kelas 11" },
  { category: "Buku", title: "Matematika SMA Kelas XI", meta: "Koleksi Kemendikbud" },
  { category: "Forum", title: "Cara memahami integral substitusi", meta: "Diskusi SMA" },
];

export default function Home() {
  const [role, setRole] = useState("siswa");
  const [active, setActive] = useState("Beranda");
  const [query, setQuery] = useState("");
  const [read, setRead] = useState([]);
  const current = roles[role];
  const filteredResults = useMemo(() => results.filter((result) =>
    `${result.title} ${result.meta}`.toLowerCase().includes(query.toLowerCase())
  ), [query]);

  function markRead(index) {
    setRead((items) => items.includes(index) ? items : [...items, index]);
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">✦</span><span>Sekolah<br /><strong>Cerdas</strong></span></div>
        <div className="profile-mini">
          <div className="avatar">NP</div>
          <div><strong>{current.name}</strong><small>{current.grade}</small></div>
          <span className="chevron">⌄</span>
        </div>
        <nav className="nav-list" aria-label="Navigasi utama">
          {["Beranda", "Latihan Soal", "Bantuan PR", "Perpustakaan", "Diskusi", "Tugas", "Tutor AI"].map((item, index) => (
            item === "Latihan Soal" ? <Link href="/latihan-soal" key={item} className="nav-item"><span className="nav-icon">✎</span>{item}</Link> : item === "Bantuan PR" ? <Link href="/bantuan-pr" key={item} className="nav-item"><span className="nav-icon">?</span>{item}</Link> : item === "Perpustakaan" ? <Link href="/perpustakaan" key={item} className="nav-item"><span className="nav-icon">▣</span>{item}</Link> : item === "Diskusi" ? <Link href="/diskusi" key={item} className="nav-item"><span className="nav-icon">◌</span>{item}</Link> : item === "Tugas" ? <Link href="/tugas" key={item} className="nav-item"><span className="nav-icon">✓</span>{item}<span className="nav-badge">2</span></Link> : item === "Tutor AI" ? <Link href="/tutor-ai" key={item} className="nav-item"><span className="nav-icon">✦</span>{item}</Link> : <button key={item} className={`nav-item ${active === item ? "active" : ""}`} onClick={() => setActive(item)}><span className="nav-icon">⌂</span>{item}</button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item"><span className="nav-icon">⚙</span>Pengaturan</button>
          <div className="safe-note"><span>♢</span><div><strong>Ruang aman untuk belajar</strong><small>Data kamu terlindungi</small></div></div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <button className="mobile-menu">☰</button>
          <div className="top-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari materi, soal, buku, atau diskusi..." /><kbd>⌘ K</kbd></div>
          <div className="top-actions"><button className="icon-button">◔</button><button className="icon-button notification-button">♢<i /></button><div className="avatar small">NP</div></div>
        </header>

        <div className="page-body">
          <div className="role-switcher" aria-label="Pratinjau peran"><span>Mode tampilan:</span>{Object.entries(roles).map(([key, item]) => <button key={key} className={role === key ? "selected" : ""} onClick={() => setRole(key)}>{item.label}</button>)}</div>
          <div className="welcome-row"><div><p className="eyebrow">SENIN, 17 AGUSTUS 2026</p><h1>{current.greeting}</h1><p className="muted">{current.subtitle}</p></div><button className="help-button">? <span>Butuh bantuan?</span></button></div>

          {query && <section className="search-results card"><div className="section-heading"><div><p className="eyebrow">HASIL PENCARIAN</p><h2>Menemukan sesuatu?</h2></div><span>{filteredResults.length} hasil</span></div>{filteredResults.length ? filteredResults.map((result) => <div className="result-row" key={result.title}><span className="result-tag">{result.category}</span><div><strong>{result.title}</strong><small>{result.meta}</small></div><span>›</span></div>) : <p className="muted empty">Belum ada hasil yang cocok. Coba kata kunci lain.</p>}</section>}

          <section className="progress-grid">
            <div className="progress-card card"><div className="section-heading"><div><p className="eyebrow">PROGRES BELAJAR</p><h2>Perkembangan minggu ini</h2></div><button className="text-button">Lihat detail →</button></div><div className="progress-main"><div className="progress-ring"><div><strong>72</strong><span>/ 100</span></div></div><div><h3>Terus pertahankan!</h3><p className="muted">Kamu belajar <strong className="dark">3 jam 45 menit</strong> minggu ini.</p><div className="trend">↗ <strong>+12%</strong> dari minggu lalu</div></div></div><div className="stats"><div><span>Latihan selesai</span><strong>12</strong></div><div><span>Rata-rata nilai</span><strong>84<span className="unit">/100</span></strong></div><div><span>Hari aktif</span><strong>5<span className="unit"> hari</span></strong></div></div></div>
            <div className="streak-card card"><div className="streak-icon">♨</div><p className="eyebrow">STREAK BELAJAR</p><strong className="streak-number">5 <span>hari</span></strong><p className="muted">Satu langkah kecil<br />setiap hari.</p><div className="days"><span className="done">S</span><span className="done">S</span><span className="done">R</span><span className="done">K</span><span className="today">J</span><span>S</span><span>M</span></div></div>
          </section>

          <section><div className="section-heading block-heading"><div><p className="eyebrow">MULAI BELAJAR</p><h2>Apa yang ingin kamu lakukan?</h2></div><button className="text-button">Lihat semua →</button></div><div className="action-grid">{quickActions.map((action) => <button className={`action-card ${action.tone}`} key={action.title}><span className="action-icon">{action.icon}</span><span><strong>{action.title}</strong><small>{action.text}</small></span><b>↗</b></button>)}</div></section>

          <section className="lower-grid"><div className="card notification-card"><div className="section-heading"><div><p className="eyebrow">AKTIVITAS TERBARU</p><h2>Notifikasi & pengumuman</h2></div><button className="text-button">Tandai semua dibaca</button></div>{notifications.map((item, index) => <button className={`notification-row ${item.unread && !read.includes(index) ? "unread" : ""}`} key={item.title} onClick={() => markRead(index)}><span className={`notification-dot ${item.color}`} /><span className="notification-copy"><strong>{item.title}</strong><small>{item.type} · {item.time}</small></span>{item.unread && !read.includes(index) && <span className="new-dot" />}</button>)}</div><div className="card tip-card"><div className="tip-orb">✦</div><p className="eyebrow">TIPS HARI INI</p><h2>Belajar sedikit,<br /><em>maju lebih jauh.</em></h2><p className="muted">Konsistensi lebih penting daripada belajar lama sesekali.</p><button className="tip-link">Baca tips lainnya ↗</button></div></section>
        </div>
      </section>
    </main>
  );
}
