'use client'

import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

export function CreateDishButton() {
  const { user } = useAuth()

  if (user?.role === 'ADMIN') {
    return (
      <Link
        href="/create-dish"
        className="px-2 px-1 rounded-full border-2 border-black inline-block mt-2 text-xs"
      >
        + Cadastrar prato
      </Link>
    )
  }
}
