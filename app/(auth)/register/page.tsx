'use server';

import Link from "next/link"

export default async function Register() {
  return (
    <div className='flex flex-col w-100 h-130'>
      <div className="flex justify-center py-4">
        <h2 className="text-3xl font-bold text-gray-700 tracking-wider">会員登録</h2>
      </div>
      <div className="flex-1 flex flex-col h-100 mt-6 border border-gray-300 rounded-xl shadow-sm px-11 pt-10 ">
        <form className="flex-1 flex flex-col pb-9 text-gray-900">
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <h3 className="tracking-wide">メールアドレス</h3>
              <input type="email" className="border border-gray-300 rounded-md px-[10px] py-1"/>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="tracking-wide">パスワード</h3>
              <input type="text" className="border border-gray-300 rounded-md px-[10px] py-1"/>
            </div>
          </div>
          <div className="flex-1 flex items-end">
            <button className="duration-200 w-full py-3 bg-black/80 text-white rounded-lg tracking-widest">新規登録</button>
          </div>
        </form>
        <div className="border-t border-gray-300 py-8 flex items-center justify-center">
          <Link href="/login" className="hover:text-gray-800 hover:decoration-gray-800 transition-all duration-200 text-[15px] text-gray-600 underline decoration-2 decoration-gray-400 underline-offset-4">ログインはこちら</Link>
        </div>
      </div>
    </div>
  )
  
}