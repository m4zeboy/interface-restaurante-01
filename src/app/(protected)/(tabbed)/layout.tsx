import Link from 'next/link'
import { ReactNode } from 'react'

export default async function TabbedLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="bg-black min-h-screen pt-6">
      <div className="bg-gray-400 h-[10px] max-w-[361px] mx-auto rounded-t-md"></div>
      <div className="bg-white max-w-[393px] mx-auto h-[calc(100vh-34px)] rounded-t-lg pt-3">
        <header className="px-4 py-3">
          <Link href="/home" className="text-blue-500 font-semibold">
            Voltar
          </Link>
        </header>
        {children}
      </div>
    </div>
  )
}
