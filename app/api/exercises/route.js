export async function GET() {
  return Response.json({ data: [{ id: "exercise-1", subject: "Fisika", topic: "Hukum Newton", score: 84, completedAt: "2026-08-17" }] });
}

export async function POST(request) {
  const body = await request.json();
  const allowed = ["SD", "SMP", "SMA"];
  if (!body.subject || !body.topic || !allowed.includes(body.level)) return Response.json({ error: "Parameter latihan belum lengkap" }, { status: 400 });
  return Response.json({ data: { id: `exercise-${Date.now()}`, ...body, status: "generated" } }, { status: 201 });
}
