"use client";

import { useState } from "react";
import Link from "next/link";
import "./styles.css";

const questions = [
  {
    text: "Sebuah benda bermassa 2 kg didorong dengan gaya 10 N. Berapakah percepatan benda tersebut?",
    options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
    answer: 1,
    explanation: "Menurut Hukum II Newton, a = F / m = 10 / 2 = 5 m/s².",
  },
  {
    text: "Gaya yang menyebabkan benda bergerak melingkar menuju pusat lintasan disebut gaya...",
    options: ["gravitasi", "gesek", "sentripetal", "pegas"],
    answer: 2,
    explanation: "Gaya sentripetal selalu mengarah ke pusat lintasan dan menjaga benda tetap bergerak melingkar.",
  },
  {
    text: "Satuan SI untuk energi adalah...",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answer: 2,
    explanation: "Energi diukur dalam Joule (J), sedangkan Newton adalah satuan gaya dan Watt adalah satuan daya.",
  },
];

export default function LatihanSoal() {
  const [stage, setStage] = useState("setup");
  const [subject, setSubject] = useState("Fisika");
  const [difficulty, setDifficulty] = useState("Sedang");
  const [count, setCount] = useState("3");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[current];
  const answered = Object.keys(answers).length;
  const score = Math.round((questions.reduce((sum, item, index) => sum + (answers[index] === item.answer ? 1 : 0), 0) / questions.length) * 100);

  function chooseAnswer(index) {
    setAnswers((old) => ({ ...old, [current]: index }));
  }

  function nextQuestion() {
    if (current < questions.length - 1) setCurrent((old) => old + 1);
    else setStage("result");
  }

  return (
    <main className="exercise-page">
      <header className="exercise-topbar">
        <Link className="exercise-brand" href="/"><span>✦</span><strong>Sekolah Cerdas</strong></Link>
        <div className="exercise-top-title"><span>Latihan Soal</span><small>Ruang belajar mandiri</small></div>
        <Link className="back-link" href="/">← Kembali ke Beranda</Link>
      </header>

      <div className="exercise-content">
        {stage === "setup" && <section className="setup-layout"><div className="setup-intro"><p className="exercise-kicker">GENERATOR LATIHAN SOAL</p><h1>Belajar jadi lebih<br /><em>terarah.</em></h1><p className="intro-copy">Pilih parameter latihan sesuai kebutuhanmu. Kami akan menyiapkan soal yang membantu kamu memahami materi, bukan sekadar menghafal jawaban.</p><div className="setup-promise"><span>✦</span><div><strong>Latihan yang sesuai untukmu</strong><small>Disesuaikan dengan jenjang, mapel, dan tingkat kesulitan.</small></div></div></div><div className="setup-card"><div className="card-title"><span className="card-symbol">✎</span><div><p className="exercise-kicker">MULAI LATIHAN</p><h2>Atur parameter soal</h2></div></div><label>Jenjang & kelas<select defaultValue="SMA · Kelas 11"><option>SMA · Kelas 11</option><option>SMP · Kelas 9</option><option>SD · Kelas 6</option></select></label><label>Mata pelajaran<select value={subject} onChange={(event) => setSubject(event.target.value)}><option>Fisika</option><option>Matematika</option><option>Biologi</option><option>Bahasa Indonesia</option></select></label><label>Topik<select defaultValue="Dinamika dan Hukum Newton"><option>Dinamika dan Hukum Newton</option><option>Usaha dan Energi</option><option>Gerak Lurus</option></select></label><div className="form-row"><label>Tingkat kesulitan<select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}><option>Mudah</option><option>Sedang</option><option>Sulit</option></select></label><label>Jumlah soal<select value={count} onChange={(event) => setCount(event.target.value)}><option value="3">3 soal</option><option value="5">5 soal</option><option value="10">10 soal</option></select></label></div><button className="primary-button" onClick={() => setStage("quiz")}>Buat latihan <span>→</span></button><p className="form-note">✦ Soal dibuat dengan bantuan AI dan akan ditinjau untuk keamanan konten.</p></div></section>}

        {stage === "quiz" && <section className="quiz-layout"><div className="quiz-header"><div><p className="exercise-kicker">{subject.toUpperCase()} · {difficulty.toUpperCase()}</p><h1>Dinamika dan Hukum Newton</h1></div><div className="quiz-progress"><span>{current + 1}</span> / {questions.length}<small>{answered} terjawab</small></div></div><div className="quiz-bar"><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div><div className="question-card"><div className="question-number">SOAL {String(current + 1).padStart(2, "0")}</div><h2>{question.text}</h2><div className="options">{question.options.map((option, index) => <button key={option} className={answers[current] === index ? "chosen" : ""} onClick={() => chooseAnswer(index)}><span>{String.fromCharCode(65 + index)}</span>{option}{answers[current] === index && <b>✓</b>}</button>)}</div><div className="question-footer"><button className="subtle-button" onClick={() => current > 0 && setCurrent((old) => old - 1)} disabled={current === 0}>← Sebelumnya</button><button className="primary-button compact" onClick={nextQuestion}>{current === questions.length - 1 ? "Lihat hasil" : "Soal berikutnya"} <span>→</span></button></div></div><p className="quiz-tip">✦ Pilih jawaban yang paling tepat. Kamu bisa mengubah jawaban sebelum melihat hasil.</p></section>}

        {stage === "result" && <section className="result-layout"><div className="result-hero"><p className="exercise-kicker">LATIHAN SELESAI</p><div className="result-circle"><strong>{score}</strong><span>/ 100</span></div><h1>Bagus, Nadia!</h1><p className="muted">Kamu sudah menyelesaikan latihan {subject} dengan {answered} soal terjawab.</p><button className="primary-button" onClick={() => { setAnswers({}); setCurrent(0); setStage("setup"); }}>Buat latihan baru <span>→</span></button></div><div className="result-card"><div className="section-title"><div><p className="exercise-kicker">RINGKASAN HASIL</p><h2>Nilai & pembahasan</h2></div><span className="score-pill">{score}/100</span></div>{questions.map((item, index) => <div className="review-row" key={item.text}><span className={answers[index] === item.answer ? "review-icon correct" : "review-icon wrong"}>{answers[index] === item.answer ? "✓" : "×"}</span><div><strong>Soal {index + 1}</strong><small>{answers[index] === item.answer ? "Jawabanmu benar" : "Perlu dipelajari lagi"}</small></div><button onClick={() => { setCurrent(index); setStage("quiz"); }}>Lihat soal</button></div>)}<div className="explanation"><p className="exercise-kicker">PEMBAHASAN SOAL {current + 1}</p><p>{questions[current].explanation}</p></div></div></section>}
      </div>
    </main>
  );
}
