'user server';

import createClient from 'utilities/supabase/server';
import { auth } from 'supabase/auth/server';

const signin = async () => {
  
}



const signup = async () => {
  // ボタンがおされてこの関数が呼び出された。POSTされたフォームデータをここで保持しておく。const formDataなどで
  // JWTが正しければそのcookieに記載されていたuuidでログインさせる。
  // なければ、formDataからemail, pwを取得し、supabaseのauth.signUpを呼び出し登録する。
  // 登録成功なら



}