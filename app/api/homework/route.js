export async function POST(request) {
  const body = await request.json();
  if (!body.content && !body.imageUrl) return Response.json({ error: "Pertanyaan atau foto soal wajib diisi" }, { status: 400 });
  return Response.json({ data: { sessionId: `homework-${Date.now()}`, hint: "Tuliskan informasi yang diketahui dari soal, lalu tentukan apa yang ditanyakan.", hintOrder: 1 } }, { status: 201 });
}
