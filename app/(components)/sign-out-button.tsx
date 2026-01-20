'use client';

import { useActionState } from 'react';
import type { t__responseState_auth } from '../(auth)/actions';
import { signOut } from '../(auth)/actions';


export const SignOutButton = () => {
  const initialState: t__responseState_auth = { success: false, error: null };
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