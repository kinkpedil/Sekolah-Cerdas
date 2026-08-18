import { isUnsafe } from "../../../lib/ai";
import { jsonError, requiredString } from "../../../lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const content = requiredString(body.content, "Konten", 5000);
    return Response.json({ data: { status: isUnsafe(content) ? "blocked" : "approved", categories: isUnsafe(content) ? ["safety"] : [] } });
  } catch (error) {
    return jsonError(error);
  }
}
