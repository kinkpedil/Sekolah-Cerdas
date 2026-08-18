const notifications = new Map([
  ["n-1", { id: "n-1", title: "Tugas Fisika dikumpulkan besok", read: false }],
  ["n-2", { id: "n-2", title: "Ada balasan baru di diskusi Matematika", read: false }],
]);

export async function GET() { return Response.json({ data: [...notifications.values()] }); }

export async function PATCH(request) {
  const body = await request.json();
  const item = notifications.get(body.id);
  if (!item) return Response.json({ error: "Notifikasi tidak ditemukan" }, { status: 404 });
  item.read = true;
  return Response.json({ data: item });
}
