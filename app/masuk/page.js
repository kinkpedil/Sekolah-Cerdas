"use client";

import Link from "next/link";
import { useState } from "react";
import "../auth.css";

export default function LoginPage() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [message, setMessage] = useState("");
  async function login(event) { event.preventDefault(); setMessage("Memeriksa akun..."); const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) }); const data = await response.json(); setMessage(response.ok ? "Berhasil masuk. Mengarahkan ke beranda..." : data.error); if (response.ok) setTimeout(() => window.location.href = "/", 500); }
  return <AuthShell><p className="auth-kicker">SELAMAT DATANG KEMBALI</p><h1>Belajar lebih<br /><em>terarah.</em></h1><p className="auth-subtitle">Masuk untuk melanjutkan perjalanan belajarmu.</p><form onSubmit={login}><label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" required /></label><label>Kata sandi<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimal 8 karakter" required /></label><button className="auth-button">Masuk <span>→</span></button>{message && <p className="auth-message">{message}</p>}</form><p className="auth-switch">Belum punya akun? <Link href="/daftar">Daftar sekarang</Link></p></AuthShell>;
}

function AuthShell({ children }) { return <main className="auth-page"><div className="auth-art"><Link href="/" className="auth-brand"><span>✦</span>Sekolah Cerdas</Link><div><p className="auth-art-kicker">RUANG AMAN UNTUK TUMBUH</p><h2>Setiap pertanyaan<br />adalah <em>awal</em> baru.</h2><p>Belajar dengan sumber terpercaya, bantuan yang membimbing, dan komunitas yang saling menjaga.</p></div><small>♢ Data dan privasi kamu kami lindungi.</small></div><section className="auth-card">{children}</section></main>; }
