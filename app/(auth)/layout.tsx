import Link from "next/link"
import Login from "./login/page"
import Register from "./register/page"

export default function AuthLayout (
  { children }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <div className="flex-1 flex flex-col items-center after:content-[''] after:flex-55 before:content-[] before:flex-45">
        {children}
    </div>
  )
}