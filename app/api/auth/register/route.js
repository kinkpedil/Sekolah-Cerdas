import { getSupabaseServer } from "../../../../../lib/supabase-server";
import { jsonError, requiredString } from "../../../../../lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = requiredString(body.email, "Email", 180);
    const password = requiredString(body.password, "Kata sandi", 100);
    if (password.length < 8) throw new Error("Kata sandi minimal 8 karakter");
    const supabase = getSupabaseServer();
    if (!supabase) return Response.json({ data: { demo: true, message: "Akun demo siap digunakan" } }, { status: 201 });
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { role: body.role || "student", full_name: body.fullName || "" } } });
    if (error) throw error;
    return Response.json({ data: { user: data.user, session: data.session } }, { status: 201 });
  } catch (error) { return jsonError(error, "Pendaftaran gagal"); }
}
