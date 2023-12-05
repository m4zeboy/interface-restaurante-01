'use client'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import { secondaryBtn } from '../styles'
export default function ValidateButton() {
  const { user } = useAuth()

  return (
    <>
      {user?.role === 'ADMIN' && (
        <Link href="/validate" className={secondaryBtn}>
          Validar
        </Link>
      )}
    </>
  )
}
