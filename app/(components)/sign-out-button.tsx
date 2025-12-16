'use client';

import { useActionState } from 'react';
import type { responseState } from '../(auth)/actions';
import { signOut } from '../(auth)/actions';


export const SignOutButton = () => {
  const initialState: responseState = { success: false, error: null };
  const [ _signOutState, signOutAction, isPending ] = useActionState(signOut, initialState);

  return (
    !isPending ? (
      <nav className='text-white'>
        <form action={signOutAction}>
          <button>ログアウト</button>
        </form>
      </nav>
    ) : (      
      <nav className='text-white'>
        <p>ログアウト中...</p>
      </nav>
    )
  )
}