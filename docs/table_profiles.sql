grant all on cookie_app.profiles to authenticated;
alter table cookie_app.profiles enable row level security;

create policy "User can view own profile"
  on cookie_app.profiles
  for select
  to authenticated
  using (auth.uid() = user_id );

create policy "User can update own profile"
  on cookie_app.profiles
  for update
  to authenticated
  using (auth.uid() = user_id );

create policy "User can delete own profile"
  on cookie_app.profiles
  for delete
  to authenticated
  using (auth.uid() = user_id );

create policy "User can insert own profile"
  on cookie_app.profiles
  for insert
  to authenticated
  with check (auth.uid() = user_id );

create or replace function cookie_app.set_new_profile()
  returns trigger
  language plpgsql
  security definer
  set search_path = cookie_app
  as $$
  begin
    insert into cookie_app.profiles (user_id)
    values (new.id);

    return new;
  end;
  $$;

create trigger set_new_profile_triger
  after insert on auth.users
  for each row execute procedure cookie_app.set_new_profile();