import { TOKEN_NAME } from '@/constants/token'
import { cookies } from 'next/headers'
import { api } from './api'

export type Ticket = {
  id: string
  price: string
  purchased_at: Date
  validated_at: Date | null
  wallet_id: string
}

export async function listPurchases() {
  const token = cookies().get(TOKEN_NAME)
  const response = await api('/tickets/purchases', {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
  })
  response.data as { purchsaedTickets: Ticket[] }
  return response
}
