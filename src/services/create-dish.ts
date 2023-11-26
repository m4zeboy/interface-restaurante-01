import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

type CreateDishRequestBody = {
  mainDish: string
  veganMainDish: string
  followUp: string
  baseDish: string
  salad: string
  dessert: string
  date: string
}

export const createDish = async (payload: CreateDishRequestBody) => {
  const { 'restaurant-digital-token': token } = parseCookies()
  const response = await fetch(`${API_BASE_URL}/dishes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.message)
  }
  const data = await response.json()
  return data
}
