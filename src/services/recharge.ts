import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

type RechargeRequestBody = {
  amount: number
}

export const recharge = async ({ amount }: RechargeRequestBody) => {
  const { 'restaurant-digital-token': token } = parseCookies()
  const response = await fetch(`${API_BASE_URL}/wallets/recharge`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount }),
  })
  const data = await response.json()
  return data
}
