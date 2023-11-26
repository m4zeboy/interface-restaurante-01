import { parseCookies } from 'nookies'
import { api } from './api'

export type Dish = {
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

  try {
    const response = await api('/dishes/today', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    response.data as GetDishOfTheDayResponse
    return response
  } catch (err) {
    console.error(err)
    throw err
  }
}
