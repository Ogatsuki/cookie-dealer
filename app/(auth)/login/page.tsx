'use client';

import { useActionState, useState } from 'react';
import { signIn } from '../../actions';
import type { t__auth_serverResponseState } from '../../actions';
import AuthForm from "../authForm";


export default function SignInPage() {
  const initialState: t__auth_serverResponseState = {success: false, error: null};
  const [ response, formAction, isPending ] = useActionState(signIn, initialState);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <AuthForm
      actionState={{ serverResponse: response, action: formAction, isPending: isPending }}
      formData={{ email, setEmail, password, setPassword }}
      response={{ error: response.error }}
      meta={{ title: 'ログイン', buttonText: 'ログイン', pendingText: 'ログイン中', navLink: '/register', navText: 'アカウント作成はこちら' }}
    />
  )
}