import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

export type Ticket = {
  id: string
  price: string
  purchased_at: Date
  validated_at: Date | null
  wallet_id: string
}

type ListPurchasesResponse = {
  purchasedTickets?: Ticket[]
  message?: string
}

export async function listPurchases() {
  const { 'restaurant-digital-token': token } = parseCookies()

  const response = await fetch(`${API_BASE_URL}/tickets/purchases`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = (await response.json()) as ListPurchasesResponse
  return data
}
