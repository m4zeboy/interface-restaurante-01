import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

type Dish = {
  id: string
  main_dish: string
  vegan_main_dish: string
  follow_up: string
  base_dish: string
  salad: string
  dessert: string
  date: Date
}

type GetDishOfTheDayResponse = {
  dish: Dish | null
}

export async function getDishOfTheDay() {
  const { 'restaurant-digital-token': token } = parseCookies()

  const response = await fetch(`${API_BASE_URL}/dishes/today`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = (await response.json()) as GetDishOfTheDayResponse
  return data
}
