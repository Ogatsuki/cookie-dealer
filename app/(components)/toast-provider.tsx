'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const ToastCard = ({ isSuccess, message, toastFadeOut }: {isSuccess: boolean, message: string, toastFadeOut: boolean}) => {
  return (
    <div className={`fixed bottom-15 right-3 rounded-l-xl shadow-lg ${isSuccess ? 'bg-[#58904d]' : 'bg-[#cf3636]'} ${toastFadeOut? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000 ease-in`}>
      <p className='text-white py-5 pl-6 pr-13'>{message}</p>
    </div>
  )
}


export const ToastProvider = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [signUpState, setSignUpState] = useState({isQueryExists: false, isSuccess: false});
  const [signOutState, setSignOutState] = useState({isQueryExists: false, isSuccess: false});
  const [signInState, setSignInState] = useState({isQueryExists: false, isSuccess: false});
  const [toastFadeOut, setToastFadeOut] = useState(false);

  useEffect(() => {
    const signUp = searchParams.get('signup');
    const signOut = searchParams.get('signout');
    const signIn = searchParams.get('signin');

    if (signUp) {
      setSignUpState({isQueryExists: true, isSuccess: signUp === 'true'});
      router.replace('/');
    }
    if (signOut) {
      setSignOutState({isQueryExists: true, isSuccess: signOut === 'true'});
      router.replace('/');
    }
    if (signIn) {
      setSignInState({isQueryExists: true, isSuccess: signIn === 'true'});
      router.replace('/');
    }

    if (signUp || signOut || signIn) {
      setTimeout(() => {
        setToastFadeOut(true)
        setTimeout(() => {
          setSignUpState(prev => ({...prev, isQueryExists: false}));
          setSignOutState(prev => ({...prev, isQueryExists: false}));
          setSignInState(prev => ({...prev, isQueryExists: false}));
          setToastFadeOut(false);
        }, 1000);
      }, 2500);
    }
  }, [searchParams, router])


  return (
    <>
      {signUpState.isQueryExists && (
        <ToastCard isSuccess={signUpState.isSuccess} message={signUpState.isSuccess ? '新規登録が完了しました' : '新規登録に失敗しました。もう一度お試しください。'} toastFadeOut={toastFadeOut} />
      )}
      {signOutState.isQueryExists && (
        <ToastCard isSuccess={signOutState.isSuccess} message={signOutState.isSuccess ? 'ログアウトしました' : 'ログアウトに失敗しました。もう一度お試し下さい。'} toastFadeOut={toastFadeOut} />
      )}
      {signInState.isQueryExists && (
        <ToastCard isSuccess={signInState.isSuccess} message={signInState.isSuccess ? 'ログインしました' : 'ログインに失敗しました。もう一度お試し下さい。'} toastFadeOut={toastFadeOut} />
      )}
    </>
  )
}