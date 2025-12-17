import { createServerClient } from '@supabase/ssr';
import { type NextRequest } from 'next/server';
import { cookies } from 'next/headers';


export const createClient = async (request?: NextRequest) => {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_API_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      db: {
        schema: 'cookie_app'
      },
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            })
          } catch (error) {
            console.log('error setting cookies:', error);
          }
        }
      }
    }
  )
}