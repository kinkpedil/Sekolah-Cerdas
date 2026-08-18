const books = [
  { id: "book-1", title: "Matematika untuk SMA/MA Kelas XI", subject: "Matematika", level: "SMA", sourceUrl: "https://buku.kemendikdasmen.go.id/" },
  { id: "book-2", title: "Fisika untuk SMA Kelas XI", subject: "Fisika", level: "SMA", sourceUrl: "https://buku.kemendikdasmen.go.id/" },
];

export async function GET(request) {
  const query = new URL(request.url).searchParams;
  const q = (query.get("q") || "").toLowerCase();
  const level = query.get("level");
  const data = books.filter((book) => (!q || `${book.title} ${book.subject}`.toLowerCase().includes(q)) && (!level || book.level === level));
  return Response.json({ data });
}
