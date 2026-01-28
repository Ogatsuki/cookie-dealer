grant all on public.profiles to authenticated;
alter table public.profiles enable row level security;

create policy "User can view own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = user_id );

create policy "User can update own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = user_id );

create policy "User can delete own profile"
  on public.profiles
  for delete
  to authenticated
  using (auth.uid() = user_id );

create policy "User can insert own profile"
  on public.profiles
  for insert
  to authenticated
  with check (auth.uid() = user_id );

create or replace function public.set_new_profile()
  returns trigger
  language plpgsql
  security definer
  set search_path = public
  as $$
  begin
    insert into public.profiles (user_id)
    values (new.id);

    return new;
  end;
  $$;

create trigger set_new_profile_triger
  after insert on auth.users
  for each row execute procedure public.set_new_profile();