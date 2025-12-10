import Link from "next/link"
import Login from "./login/page"
import Register from "./register/page"

export default function AuthLayout (
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <div className="w-full flex-1 flex justify-center items-center">
      {children}
    </div>
  )
}