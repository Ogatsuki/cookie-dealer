'use client';

import Link from "next/link"
import { signUp } from '../actions';
import { useActionState, useState } from 'react';
import type { t__responseState_auth } from '../actions';


export default function RegisterPage() {  
  const initialState: t__responseState_auth = {success: false, error: null};
  const [ formState, formAction, isPending ] = useActionState(signUp, initialState);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className='flex flex-col w-100'>
      <div className="flex flex-col items-center gap-4 py-4">
        <h2 className="text-3xl font-bold text-gray-700 tracking-wider">会員登録</h2>
        {formState.error && (
          <p className="text-red-500/60">{formState.error}</p>
        )}
      </div>
      <div className="flex-1 flex flex-col h-100 mt-6 border border-gray-300 rounded-xl shadow-sm px-11 pt-10 ">
        <form action={formAction} className="flex-1 flex flex-col pb-9 text-gray-900">
          <div className="flex flex-col space-y-5">
            <label className="flex flex-col space-y-2">
              <h3 className="tracking-wide">メールアドレス</h3>
              <input value={email} onChange={e => setEmail(e.target.value)} name='email' type="email" autoComplete="email" required className="border border-gray-300 rounded-md px-[10px] py-1"/>
            </label>
            <label className="flex flex-col space-y-2">
              <h3 className="tracking-wide">パスワード</h3>
              <input value={password} onChange={e => setPassword(e.target.value)} name='password' type="text" autoComplete='current-password' required className="border border-gray-300 rounded-md px-[10px] py-1"/>
            </label>
          </div>
          <div className="mt-16 flex-1 flex items-end">
            {!isPending ? (
              <button className="duration-200 w-full py-3 bg-black/80 text-white rounded-lg tracking-widest">新規登録</button>
            ) : (
              <p className="text-center w-full py-3 bg-black/80 text-white rounded-lg tracking-widest">送信中...</p>
            )}
          </div>
        </form>
        <div className="border-t border-gray-300 py-8 flex items-center justify-center">
          <Link href="/login" className="hover:text-gray-800 hover:decoration-gray-800 transition-all duration-200 text-[15px] text-gray-600 underline decoration-2 decoration-gray-400 underline-offset-4">ログインはこちら</Link>
        </div>
      </div>
    </div>
  )
}