import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

type ValidateRequestBody = {
  ticketId: string
}

export const validate = async ({ ticketId }: ValidateRequestBody) => {
  const { 'restaurant-digital-token': token } = parseCookies()
  const response = await fetch(`${API_BASE_URL}/tickets/${ticketId}/validate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.message)
  }
  const data = (await response.json()) as {
    validatedTicket: {
      id: string
      price: string
      purchased_at: Date
      validated_at: Date
      wallet_id: string
    }
  }
  return data
}
