'use client'

import Link from 'next/link';
import { site_title, site_title__screen_reader } from '../globalcontroll';
import { useActionState } from 'react';
import type { t__auth_serverResponseState } from '../actions';
import { signOut } from '../actions';

export default function Header({isLoggedIn}: {isLoggedIn: boolean}) {
  const initialState: t__auth_serverResponseState = { success: false, error: null };
  const [, signOutAction, isPending ] = useActionState(signOut, initialState);

  return (
      <header className="flex justify-center bg-slate-800/80 px-[6%]">
        <div className="flex w-full max-w-4xl items-center h-20 justify-between gap-4">
          <Link href="/">
            <h1 className='text-2xl font-black text-blue-400'>
              <span aria-hidden="true" className=''>{site_title}</span>
              <span className="sr-only">{site_title__screen_reader}</span>
            </h1>
          </Link>
          <div className='text-sm flex items-center'>
            {isLoggedIn && !isPending && (
              <nav className='text-white'>
                <form action={signOutAction}>
                  <button>ログアウト</button>
                </form>
              </nav>
            )}
            {isLoggedIn && isPending && (
              <nav className='text-white'>
                <p>ログアウト中...</p>
              </nav>
            )}
            {!isLoggedIn && (
              <nav className='flex justify-between items-center w-full text-white gap-5'>
                <Link href="/login">
                  <p className='break-keep'>ログイン</p>
                </Link>
                <Link href="/register">
                  <p className='break-keep'>アカウント<br className='block min-[410px]:hidden'/>作成</p>
                </Link>
              </nav>
            )}
          </div>
        </div>
      </header>
  )
}