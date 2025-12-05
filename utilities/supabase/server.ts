import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_SUPABASE_API_URL!,
    process.env.NEXT_SUPABASE_ANON_KEY!,
    {
      cookies: {

      },
      db: {
        
      }
    }
  ) 
}