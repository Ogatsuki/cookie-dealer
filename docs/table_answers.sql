grant select on public.answers to anon, authenticated;
alter table public.answers enable row level security;

create policy "Enable read access to all users"
  on public.answers
  for select
  to anon, authenticated
  using (true);