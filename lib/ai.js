const safetyRules = ["doxxing", "bunuh diri", "kekerasan seksual", "senjata ilegal"];

export function isUnsafe(text = "") {
  const normalized = text.toLowerCase();
  return safetyRules.some((rule) => normalized.includes(rule));
}

export async function askTutor({ level = "SMA", subject = "umum", messages = [] }) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const latest = messages[messages.length - 1]?.content || "";
  if (isUnsafe(latest)) return { content: "Topik ini perlu dibicarakan bersama guru atau orang dewasa tepercaya. Aku tidak dapat membantu dengan detail berbahaya.", flagged: true };
  if (!apiKey) return { content: `Mari kita bahas ${subject} dengan bahasa yang sesuai untuk ${level}. Mulai dari konsep dasar: apa bagian soal yang paling membingungkanmu?`, flagged: false, demo: true };
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` }, body: JSON.stringify({ model: "openai/gpt-4o-mini", messages: [{ role: "system", content: `Kamu tutor aman untuk siswa ${level}. Jelaskan ${subject} secara bertahap, jangan langsung memberi jawaban PR, dan gunakan bahasa Indonesia.` }, ...messages], temperature: 0.4 }) });
  if (!response.ok) throw new Error("Layanan tutor sedang tidak tersedia");
  const data = await response.json();
  return { content: data.choices?.[0]?.message?.content || "Coba ulangi pertanyaanmu.", flagged: false };
}
