export function requiredString(value, field, maxLength = 4000) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${field} wajib diisi`);
  if (value.length > maxLength) throw new Error(`${field} terlalu panjang`);
  return value.trim();
}

export function jsonError(error, fallback = "Permintaan tidak valid") {
  const message = error instanceof Error ? error.message : fallback;
  return Response.json({ error: message }, { status: 400 });
}
