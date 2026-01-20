'use server';

import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export type t__responseState_auth = {
  success: boolean;
  error: string | null;
}

export type t__responseState_answerCheck = {
  isCorrect: boolean | null;
  error: string | null;
  timeStamp: number | null;
}



const signIn = async (_prevResponseState: t__responseState_auth, formData: FormData) => {
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

  redirect('/?signin=true');
}



const signUp = async (_prevResponseState: t__responseState_auth, formData: FormData) => {
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

const signOut = async (_prevResponseState: t__responseState_auth,) => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log('ログアウトに失敗しました:', error);
    return { success: false, error: error.message };
  }

  redirect('/?signout=true');
}

const checking_answers = async(prevRes: t__responseState_answerCheck, formData: FormData) => {
  const selectedOptionIndex = Number(formData.get('selectedOptionIndex'));
  const level = Number(formData.get('levelIndex')) + 1;
  const step = Number(formData.get('stepIndex')) + 1;
  const supabase = await createClient();
  const timeStamp = Date.now();
  const { data, error } = await supabase
    .from('answers')
    .select('correct_answer_index')
    .eq('level', level)
    .eq('step', step)
    .single();

    if (error) {
      console.log('Error fetching correct answer:', error);
      return { isCorrect: false, error: error.message, timeStamp: timeStamp };
    }
    else if (!data) {
      console.log('Error fetching no data');
      return { isCorrect: false, error: 'No data found', timeStamp: timeStamp };
    }
    else if (data.correct_answer_index === selectedOptionIndex) {
      return { isCorrect: true, error: null, timeStamp: timeStamp };
    }
    else if (data.correct_answer_index !== selectedOptionIndex) {
      return { isCorrect: false, error: null, timeStamp: timeStamp };
    }
    else {
      return { isCorrect: null, error: 'Unknown error at checking answers', timeStamp: timeStamp };
    }

}



export { signIn, signUp, signOut, checking_answers };