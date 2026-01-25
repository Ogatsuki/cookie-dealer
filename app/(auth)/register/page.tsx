'use client';

import AuthForm from '../authForm';
import { useState, useActionState } from 'react';
import { signUp } from '../../actions';
import type { t__auth_serverResponseState } from '../../actions';


export default function RegisterPage() {  
  const initialState: t__auth_serverResponseState = {success: false, error: null};
  const [ response, formAction, isPending ] = useActionState(signUp, initialState);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <AuthForm
      actionState={{ serverResponse: response, action: formAction, isPending: isPending }}
      formData={{ email, setEmail, password, setPassword }}
      response={{ error: response.error }}
      meta={{ title: 'アカウント作成', buttonText: '登録', pendingText: '送信中...', navLink: '/login', navText: 'ログインはこちら' }}
    />
  )
}