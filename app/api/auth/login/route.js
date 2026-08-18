import { getSupabaseServer } from "../../../../../lib/supabase-server";
import { jsonError, requiredString } from "../../../../../lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = requiredString(body.email, "Email", 180);
    const password = requiredString(body.password, "Kata sandi", 100);
    const supabase = getSupabaseServer();
    if (!supabase) return Response.json({ data: { demo: true, email, message: "Mode demo aktif" } });
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return Response.json({ data: { user: data.user, session: data.session } });
  } catch (error) { return jsonError(error, "Email atau kata sandi tidak sesuai"); }
}
