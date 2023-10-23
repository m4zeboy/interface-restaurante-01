import { api } from './api'
import { TOKEN_NAME } from '@/constants/token'
import { cookies } from 'next/headers'

export const getTicket = async ({ id }: { id: string }) => {
  const token = cookies().get(TOKEN_NAME)
  try {
    const response = await api('tickets/' + id, {
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
