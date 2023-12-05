import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

type RechargeRequestBody = {
  requestedAmount: number
}

export const recharge = async ({ requestedAmount }: RechargeRequestBody) => {
  const { 'restaurant-digital-token': token } = parseCookies()
  const response = await fetch(`${API_BASE_URL}/wallets/recharge/request`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ requestedAmount }),
  })
  const data = await response.json()
  return data
}
