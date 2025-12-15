'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { site_title, site_title__screen_reader } from '../globalcontroll';

export default function Header({isLoggedIn}: {isLoggedIn: boolean}) {
  const pathname = usePathname();
  const isTop = pathname === '/';

  return (
      <header className="flex justify-center bg-slate-800/80">
        <div className="flex w-full max-w-4xl items-center h-20 justify-between">
          <Link href="/">
            <h1 className='text-2xl font-black text-blue-400'>
              <span aria-hidden="true">{site_title}</span>
              <span className="sr-only">{site_title__screen_reader}</span>
            </h1>
          </Link>
          {isTop && isLoggedIn && (
            <nav className='text-white'>
              <p>ログアウト</p>
            </nav>
          )}
          {isTop && !isLoggedIn && (
            <nav className='flex justify-between max-w-[150px] w-full text-sm text-white'>
              <Link href="/login">
                <p>ログイン</p>
              </Link>
              <Link href="/register">
                <p>会員登録</p>
              </Link>
            </nav>
          )}
        </div>
      </header>
  )
}