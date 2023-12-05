import { ReactNode } from 'react'

export default function TabbedTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-3xl font-bold">{children}</h3>
}
