import { askTutor } from "../../../lib/ai";
import { jsonError, requiredString } from "../../../lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const content = requiredString(body.content, "Pertanyaan", 2000);
    const result = await askTutor({ level: body.level, subject: body.subject, messages: [{ role: "user", content }] });
    return Response.json({ data: result });
  } catch (error) {
    return jsonError(error, "Tutor tidak dapat menjawab saat ini");
  }
}
