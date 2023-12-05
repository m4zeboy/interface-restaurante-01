import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

export async function setPaymentMethod(
  paymentId: string,
  paymentMethod: string,
) {
  const { 'restaurant-digital-token': token } = parseCookies()
  const response = await fetch(
    `${API_BASE_URL}/wallets/recharge/payment/${paymentId}/method`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethod }),
    },
  )
  if (!response.ok) {
    const data = await response.json()
    throw new Error(JSON.stringify(data))
  }
  const data = await response.json()
  return data
}
