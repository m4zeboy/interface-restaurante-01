'use client'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
export default function ValidateButton() {
  const { user } = useAuth()

  return (
    <>
      {user?.role === 'ADMIN' && (
        <Link
          href="/validate"
          className="border-2 border-black rounded-md p-2 w-full block text-center font-semibold"
        >
          Validar
        </Link>
      )}
    </>
  )
}
