import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export const middleware = async (request: NextRequest) => {
  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|gif|jpeg|gif|webp)$).*)'
  ]
}
