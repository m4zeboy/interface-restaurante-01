import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode
}) {
  const token = cookies().get('restaurant-digital-token')
  if (!token) {
    redirect('/sign-in')
  } else {
    return <div className="bg-slate-50 min-h-screen">{children}</div>
  }
}
