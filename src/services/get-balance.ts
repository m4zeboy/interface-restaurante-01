import { api } from './api'
import { TOKEN_NAME } from '@/constants/token'
import { cookies } from 'next/headers'

export const getBalance = async () => {
  const token = cookies().get(TOKEN_NAME)
  try {
    const response = await api('wallets/balance', {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
