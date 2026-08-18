const assignments = [
  { id: "task-1", title: "Latihan soal Hukum Newton", subject: "Fisika", dueAt: "2026-08-18T23:59:00+07:00", status: "pending" },
  { id: "task-2", title: "Esai: Dampak teknologi", subject: "Bahasa Indonesia", dueAt: "2026-08-20T23:59:00+07:00", status: "pending" },
];

export async function GET() { return Response.json({ data: assignments }); }

export async function POST(request) {
  const body = await request.json();
  if (!body.assignmentId || (!body.contentText && !body.fileUrl)) return Response.json({ error: "Tugas dan jawaban wajib diisi" }, { status: 400 });
  return Response.json({ data: { assignmentId: body.assignmentId, status: "submitted", submittedAt: new Date().toISOString() } }, { status: 201 });
}
