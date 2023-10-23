import { API_BASE_URL } from '@/constants/api-base-url'
import { Ticket } from './list-purchases'
import { parseCookies } from 'nookies'

type PurchasesResponse = {
  ticket: Ticket
}

export async function purchase() {
  const { 'restaurant-digital-token': token } = parseCookies()
  console.log(token)
  const response = await fetch(`${API_BASE_URL}/tickets/purchases`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.message)
  }
  const data = (await response.json()) as PurchasesResponse
  return data
}
