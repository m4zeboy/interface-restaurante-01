'use client'

import { useAuth } from '@/hooks/auth'

export default function Header() {
  const { user, signOut } = useAuth()

  return (
    <header className="max-w-[393px] py-4 px-5 mx-auto flex justify-between items-center">
      {/* <div></div> */}
      <strong>{user ? user.name : 'Carregando'}</strong>
      <button onClick={signOut} className="py-1 px-2 rounded-md bg-gray-200">
        Sair
      </button>
    </header>
  )
}
