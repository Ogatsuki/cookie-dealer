grant select on cookie_app.answers to anon, authenticated;
alter table cookie_app.answers enable row level security;

create policy "Enable read access to all users"
  on cookie_app.answers
  for select
  to anon, authenticated
  using (true);