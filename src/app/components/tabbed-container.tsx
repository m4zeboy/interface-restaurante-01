import { ReactNode } from 'react'

export default function TabbedContainer({ children }: { children: ReactNode }) {
  return <div className="px-4 py-2">{children}</div>
}
