import Link from "next/link"
import { type t__auth_serverResponseState } from "../actions"

type t__AuthFormProps = {
  actionState: {
    serverResponse: t__auth_serverResponseState;
    action: (payload: FormData) => void;
    isPending: boolean
  },
  formData: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
  },
  response: {
    error: string | null;
  },
  meta: {
    title: string;
    buttonText: string;
    pendingText: string;
    navLink: string;
    navText: string;
  }

}

export default function AuthForm({ actionState, formData, response, meta }: t__AuthFormProps) {
  return (
    <div className="flex-1 flex justify-center">
      <div className="max-w-80 mt-26 mb-30 flex flex-col">
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-xl font-bold text-gray-800">{meta.title}</h2>
          {response.error && (
            <p className="text-red-500/60 text-sm">{response.error}</p>
          )}
        </div>
        <div className="flex flex-col h-100 mt-4 border border-gray-300 rounded-xl shadow-sm px-6 pt-4">
          <form action={actionState.action} className="flex-1 flex flex-col pb-9 text-gray-900">
            <div className="flex flex-col space-y-5">
              <label className="flex flex-col space-y-2">
                <h3 className=" text-gray-700 text-sm">メールアドレス</h3>
                <input value={formData.email} onChange={e => formData.setEmail(e.target.value)} name='email' type="email" autoComplete="email" required className="border border-gray-300 rounded-md px-3 pt-0.5 pb-1 tracking-wide"/>
              </label>
              <label className="flex flex-col">
                <h3 className="text-gray-700">パスワード</h3>
                <input value={formData.password} onChange={e => formData.setPassword(e.target.value)} name='password' type="text" autoComplete='current-password' required className="border border-gray-300 rounded-md px-3 mt-2 pt-0.5 pb-1 tracking-wide"/>
                <span className="text-xs text-gray-400 mt-1.5">英数字6文字以上</span>
              </label>
            </div>
            <div className="mt-16 flex-1 flex items-end">
              {!actionState.isPending ? (
                <button className="duration-200 w-full py-4 bg-black/80 text-white rounded-lg">{meta.buttonText}</button>
              ) : (
                <p className="text-center w-full py-3 bg-black/80 text-white rounded-lg">{meta.pendingText}</p>
              )}
            </div>
          </form>
          <div className="border-t border-gray-300 py-8 flex items-center justify-center">
            <Link href={meta.navLink} className="hover:text-gray-800 hover:decoration-gray-800 transition-all duration-200 text-[15px] text-gray-600 underline decoration-2 decoration-gray-400 underline-offset-4">{meta.navText}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}