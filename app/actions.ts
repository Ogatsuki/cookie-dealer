'use server';

import { createClient } from '../utils/supabase/server';
import { redirect } from 'next/navigation';
import { update_db_profiles } from '@/utils/supabase/update_db_pofile';

export type t__auth_serverResponseState = {
  success: boolean;
  error: string | null;
}

export type t__responseState_answerCheck = {
  isCorrect: boolean | null;
  error: string | null;
  timeStamp: number | null;
}



const signIn = async (_prevResponseState: t__auth_serverResponseState, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });
  
  if (error) {
    console.log('signIn Error: ', error);
    return { success: false, error: 'サインインに失敗しました。emailやパスワードを確認しもう一度お試しください。' };
  }

  redirect('/?signin=true');
}



const signUp = async (_prevResponseState: t__auth_serverResponseState, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.+[^\s@]+$/;

  if (!isEmailValid.test(email)) {
    console.log('Invalid email format:', email);
    return { success: false, error: '正しいメールアドレスの形式で入力してください。' };
  }

  const {error} = await supabase.auth.signUp({
    email: email,
    password: password
  })

  if (error) {
    console.log('会員登録に失敗しました:', error);
    return { success: false, error: '会員登録に失敗しました。もう一度お試しください。' };
  }

  redirect('/?signup=true');
}

const signOut = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log('signOut Error: ', error);
    return { success: false, error: 'ログアウトに失敗しました。もう一度お試しください。' };
  }

  redirect('/?signout=true');
}

const checking_answers = async(prevRes: t__responseState_answerCheck, formData: FormData) => {
  const supabase = await createClient();
  const selectedOptionIndex = Number(formData.get('selectedOptionIndex'));
  const levelIndex = Number(formData.get('levelIndex'));
  const stepIndex = Number(formData.get('stepIndex'));
  const responseState: t__responseState_answerCheck = { isCorrect: null, error: null, timeStamp: Date.now() };
  // leve, step, selectedOptionIndexバリデーション用
  const selectedOptionIndexRange = [0, 10];
  const levelIndexRange = [0, 10];
  const stepIndexRange = [0, 10];

  if ( !Number.isInteger(selectedOptionIndex) || !Number.isInteger(levelIndex) || !Number.isInteger(stepIndex) ||
    selectedOptionIndex < selectedOptionIndexRange[0] || selectedOptionIndexRange[1] < selectedOptionIndex ||
    levelIndex < levelIndexRange[0] || levelIndexRange[1] < levelIndex ||
    stepIndex < stepIndexRange[0] || stepIndexRange[1] < stepIndex ) {
    console.log('checking_answers: Invalid input data. validation failed.');
    return { ...responseState, error: 'level, step, 選択した問題の値が不正です。' };
  }

  const { data, error } = await supabase
    .from('answers')
    .select('correct_answer_index')
    .eq('level', levelIndex + 1)
    .eq('step', stepIndex + 1)
    .single();

  if (error) {
    console.log('Error fetching answer:', error);
    responseState.error = '正解判定に失敗しました。また時間をおいてお試しください。';
  }
  else if (data.correct_answer_index !== selectedOptionIndex) {
    responseState.isCorrect = false;
  }
  else if (data.correct_answer_index === selectedOptionIndex) {
    responseState.isCorrect = true;
    // 正解した場合、profiles テーブルのachieved_level_index, achieved_step_index を更新
    update_db_profiles(levelIndex, stepIndex);
  }
  else {
    console.log('Unexpected case in answer checking.');
    responseState.error = '正解判定に失敗しました。また時間をおいてお試しください。';
  }
  
  return responseState;
}



export { signIn, signUp, signOut, checking_answers };