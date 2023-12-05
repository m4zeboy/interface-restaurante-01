import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

export async function setCreditCard(paymentId: string, body: any) {
  const { 'restaurant-digital-token': token } = parseCookies()
  const response = await fetch(
    `${API_BASE_URL}/wallets/recharge/payment/${paymentId}/credit_card`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  )
  if (!response.ok) {
    const data = await response.json()
    throw new Error(JSON.stringify(data))
  }
  const data = await response.json()
  return data
}
