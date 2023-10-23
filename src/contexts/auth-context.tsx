'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { api } from '@/services/api'
import { TOKEN_NAME } from '@/constants/token'

export type User = {
  id: string
  name: string
  passport: string
  role: 'USER' | 'ADMIN' | 'STUDENT' | 'UNIVERSITY_SERVER'
}
type SignInType = {
  passport: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInType) => Promise<any>
  user: User | null
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const cookies = parseCookies()
    const token = cookies[TOKEN_NAME]

    const fetchProfile = async () => {
      const { status, data } = await api.get('/profile', {
        headers: { Authorization: 'Bearer ' + token },
      })
      if (status !== 200) {
        return
      }
      setUser(data.user)
    }
    fetchProfile().catch((error) => error)
  }, [])

  async function signIn({ passport, password }: SignInType) {
    try {
      const response = await api.post('/sessions', { passport, password })
      const { user, token } = response.data
      setCookie(undefined, TOKEN_NAME, token, {
        maxAge: 60 * 60 * 1, // 1hour,
        path: '/',
      })

      setUser(user)

      router.push('/home')
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
