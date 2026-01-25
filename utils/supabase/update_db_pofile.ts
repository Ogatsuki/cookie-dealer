'use server';

import { createClient } from "./server";

type t__update_db_profiles = (levelIndex: number, stepIndex: number) => void;


// levelIndex と stepIndex に基づいて、profiles テーブルのユーザープロフィールを更新する関数　正解不正解判定箇所で使用
export const update_db_profiles: t__update_db_profiles = async (levelIndex, stepIndex)  => {
  const supabase = await createClient(); 
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    console.log('ユーザーが認証されていません。');
    return;
  }

  const { data: data, error: error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.log('ユーザープロフィールの取得に失敗しました:', error);
    return;
  }
  else if(!data) {
    console.log('ユーザープロフィールが存在しません。');
    return;
  }

  const new_achievedLevelIndex = {
    new_levelIndex: levelIndex > data.achieved_level_index ? levelIndex : data.achieved_level_index,
    new_stepIndex: stepIndex > data.achieved_step_index ? stepIndex : data.achieved_step_index
  }

  const { error: updateError } = await supabase
    .from('user_profiles')
    .update({
      'achieved_level_index': new_achievedLevelIndex.new_levelIndex,
      'achieved_step_index': new_achievedLevelIndex.new_stepIndex,
      'current_level_index': levelIndex,
      'current_step_index': stepIndex
    })
    .eq('user_id', user.id)
    .single();
    
  if (updateError) {
    console.log('ユーザープロフィールの更新に失敗しました:', updateError);
    return;
  } 
}