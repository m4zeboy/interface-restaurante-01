import { API_BASE_URL } from '@/constants/api-base-url'
import { TOKEN_NAME } from '@/constants/token'
import { cookies } from 'next/headers'
import { parseCookies } from 'nookies'
import { api } from './api'

export type Ticket = {
  id: string
  price: string
  purchased_at: Date
  validated_at: Date | null
  wallet_id: string
}

export async function listPurchases() {
  // const { 'restaurant-digital-token': token } = parseCookies()
  const token = cookies().get(TOKEN_NAME)
  const response = await api('/tickets/purchases', {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
  })
  // const data = (await response.json()) as ListPurchasesResponse
  response.data as { purchsaedTickets: Ticket[] }
  return response
}
