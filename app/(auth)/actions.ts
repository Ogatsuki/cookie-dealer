'use server';

import { createClient } from '../../utils/supabase/server';
import { redirect } from 'next/navigation';

export type responseState = {
  success: boolean;
  error: string | null;
}

export type t__responseState = {
  isCorrect: boolean;
  error: string | null;
  // flapping: false = 回答前。 true = 回答後。
  flapping: boolean;
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

  redirect('/?signin=true');
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

const checking_answers = async(prevRes: t__responseState, formData: FormData) => {
  console.log('level:', Number(formData.get('levelIndex')) + 1);
  console.log('step:', Number(formData.get('stepIndex')) + 1);

  const selectedOptionIndex = formData.get('selectedOptionIndex');
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('answers')
    .select('correct_answer_index')
    .eq('level', Number(formData.get('levelIndex')) + 1)
    .eq('step', Number(formData.get('stepIndex')) + 1)
    .single();

    if (error) {
      console.log('Error fetching correct answer:', error);
      return { isCorrect: false, error: error.message, flapping: false };
    }
    else if (!data) {
      console.log('Error fetching no data');
      return { isCorrect: false, error: 'No data found', flapping: false };
    }
    else if (data.correct_answer_index === Number(selectedOptionIndex)) {
      return { isCorrect: true, error: null, flapping: true };
    }
    else if (data.correct_answer_index !== Number(selectedOptionIndex)) {
      return { isCorrect: false, error: null, flapping: true };
    }
    else {
      return { isCorrect: false, error: 'Unknown error', flapping: false };
    }

}



export { signIn, signUp, signOut, checking_answers };