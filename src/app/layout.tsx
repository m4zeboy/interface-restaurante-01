import '@/app/globals.css'
import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { AuthProvider } from '../contexts/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RU Digital',
  description: 'Restaurante Universitário digital',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary min-h-screen min-w-screen`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
