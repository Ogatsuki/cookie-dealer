'use server';

import { createClient } from "./server";

type t__update_db_profiles = (levelIndexToSet: number, stepIndexToSet: number) => void;


// levelIndex と stepIndex に基づいて、profiles テーブルのユーザープロフィールを更新する関数　正解不正解判定箇所で使用
export const update_db_profiles: t__update_db_profiles = async (levelIndexToSet, stepIndexToSet)  => {
  const supabase = await createClient(); 
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    console.log('ユーザーが認証されていません。');
    return;
  }

  const { data: data, error: error } = await supabase
    .from('profiles')
    .select('achieved_level_index, achieved_step_index')
    .eq('id', user.id)
    .single();

  if (error) {
    console.log('ユーザープロフィールの取得に失敗しました:', error);
    return;
  }

  let new_achievedLevelIndex = null;
  let new_achievedStepIndex = null;
  const isFirst = !data.achieved_level_index || !data.achieved_level_index;
  
  new_achievedLevelIndex = isFirst || levelIndexToSet > data.achieved_level_index ? levelIndexToSet : data.achieved_level_index;
  new_achievedStepIndex = isFirst || stepIndexToSet > data.achieved_step_index ? stepIndexToSet : data.achieved_step_index;

  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      'achieved_level_index': new_achievedLevelIndex,
      'achieved_step_index': new_achievedStepIndex
    })
    .eq('id', user.id)
    .single();
    
  if (updateError) {
    console.log('ユーザープロフィールの更新に失敗しました:', updateError);
    return;
  } 
}