'use client'

import { useAuth } from '@/hooks/auth'

export default function Header() {
  const { user } = useAuth()
  return (
    <header className="max-w-[393px] py-4 px-5 mx-auto">
      <div></div>
      <strong>{user ? user.name : 'Carregando'}</strong>
    </header>
  )
}
