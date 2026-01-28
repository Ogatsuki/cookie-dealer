'use server';

import { createClient } from './server';

export async function loadAchievedState() {
  const supabase = await createClient();
  const { error: getUserError, data: user } = await supabase.auth.getUser();

  if (getUserError) {
    console.log('ユーザー情報取得集にエラーが発生しました:', getUserError);
    return { achievedLevelIndex: null, achievedStepIndex: null, error: { error: true, message: getUserError.message}};
  }
  else if (!user.user) {
    console.log('ユーザーが認証されていません。initialize.ts');
    return { achievedLevelIndex: null, achievedStepIndex: null, error: { error: true, message: 'ユーザーが認証されていません。'}};
  }

  const { error: getProfileError, data: profile } = await supabase
    .from('profiles')
    .select('achieved_level_index, achieved_step_index')
    .eq('id', user.user.id)
    .single();
  
    if (getProfileError) {
      console.log('ユーザープロフィールの取得に失敗しました:', getProfileError);
      return { achievedLevelIndex: null, achievedStepIndex: null, error: { error: true, message: getProfileError.message } };
    }
    else {
      return { achievedLevelIndex: profile.achieved_level_index, achievedStepIndex: profile.achieved_step_index, error: {error: false, message: null}};
    }

}