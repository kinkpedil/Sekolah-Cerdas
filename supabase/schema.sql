create extension if not exists "pgcrypto";

create type public.user_role as enum ('student', 'teacher', 'school_admin');
create type public.education_level as enum ('SD', 'SMP', 'SMA');

create table public.schools (id uuid primary key default gen_random_uuid(), name text not null, address text, created_at timestamptz not null default now());
create table public.profiles (
  id uuid primary key default gen_random_uuid(), user_id uuid not null unique references auth.users(id) on delete cascade,
  school_id uuid references public.schools(id), role public.user_role not null default 'student', full_name text not null,
  level public.education_level, grade text, avatar_url text, created_at timestamptz not null default now()
);
create table public.exercise_sets (
  id uuid primary key default gen_random_uuid(), student_profile_id uuid not null references public.profiles(id) on delete cascade,
  subject text not null, topic text not null, level public.education_level not null, grade text, difficulty text not null,
  question_count integer not null check (question_count between 1 and 50), score integer, created_at timestamptz not null default now()
);
create table public.library_books (
  id uuid primary key default gen_random_uuid(), title text not null, author text, category text, level public.education_level,
  subject text, source_url text not null, source_name text not null, cover_url text, description text, updated_at timestamptz not null default now()
);
create table public.saved_books (
  id uuid primary key default gen_random_uuid(), student_profile_id uuid not null references public.profiles(id) on delete cascade,
  book_id uuid not null references public.library_books(id) on delete cascade, created_at timestamptz not null default now(), unique(student_profile_id, book_id)
);
create table public.notifications (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  type text not null, message text not null, read_at timestamptz, link text, created_at timestamptz not null default now()
);

alter table public.schools enable row level security;
alter table public.profiles enable row level security;
alter table public.exercise_sets enable row level security;
alter table public.library_books enable row level security;
alter table public.saved_books enable row level security;
alter table public.notifications enable row level security;

create policy "authenticated users can read schools" on public.schools for select to authenticated using (true);
create policy "users read own profile" on public.profiles for select to authenticated using (user_id = auth.uid());
create policy "users update own profile" on public.profiles for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "students manage own exercises" on public.exercise_sets for all to authenticated using (student_profile_id in (select id from public.profiles where user_id = auth.uid())) with check (student_profile_id in (select id from public.profiles where user_id = auth.uid()));
create policy "books are readable" on public.library_books for select to authenticated using (true);
create policy "students manage own saved books" on public.saved_books for all to authenticated using (student_profile_id in (select id from public.profiles where user_id = auth.uid())) with check (student_profile_id in (select id from public.profiles where user_id = auth.uid()));
create policy "users manage own notifications" on public.notifications for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
