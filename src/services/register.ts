import { API_BASE_URL } from '@/constants/api-base-url'
import { parseCookies } from 'nookies'

export type RegisterRequestBody = {
  name: string
  passport: string
  password: string
  role: 'ADMIN' | 'USER' | 'STUDENT' | 'UNIVERSITY_SERVER'
  rga?: string
  uniqueRegister?: string
  siape?: string
}

export const createUser = async (body: RegisterRequestBody) => {
  const { 'restaurant-digital-token': token } = parseCookies()
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message)
    }
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
