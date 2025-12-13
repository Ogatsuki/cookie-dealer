'use server';

import { createClient } from './client';

export type responseState = {
  success: boolean,
  error: string | null
}



const signin = async () => {
  
}



const signUp = async (_prevResponseState: responseState, formData: FormData) => {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    console.log(error);
    return { success: false, error: error.message };
  }

  return { success: true, error: null };
}

const signout = async () => {

}



export { signin, signUp, signout }