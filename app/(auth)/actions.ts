'use server';

import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export type responseState = {
  success: boolean,
  error: string | null
}



const signIn = async (_prevResponseState: responseState, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });
  
  if (error) {
    console.log(error);
    return { success: false, error: error.message };
  }

  redirect('/?signIn=true');
}



const signUp = async (_prevResponseState: responseState, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;

  if (!isEmailValid.test(email)) {
    return { success: false, error: '正しいメールアドレスの形式で入力してください。' };
  }

  const {error} = await supabase.auth.signUp({
    email: email,
    password: password
  })

  if (error) {
    console.log('会員登録に失敗しました:', error);
    return { success: false, error: error.message };
  }

  redirect('/?signup=true');
}

const signOut = async (_prevResponseState: responseState,) => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log('ログアウトに失敗しました:', error);
    return { success: false, error: error.message };
  }

  redirect('/?signout=true');
}



export { signIn, signUp, signOut }