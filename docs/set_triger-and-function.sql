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

create trigger set_new_profile_trigger
  after insert on auth.users
  for each row execute function public.set_new_profile();