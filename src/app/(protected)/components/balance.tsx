import { getBalance } from '@/services/get-balance'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { toast } from 'sonner'

export default async function Balance() {
  let formattedBalance = null
  try {
    const response = await getBalance()
    formattedBalance = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(response?.data.balance)
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.message)
    }
  }

  return (
    <div className="pt-1 px-5 pb-4">
      <section className="p-4 bg-white rounded-md">
        <h2 className="uppercase text-xs font-semibold">Saldo total</h2>
        <p className="text-2xl font-bold mt-2">{formattedBalance || '-'}</p>
        <Link href="/recharge" className="text-slate-400 block mt-2">
          + Carregar Carteira
        </Link>
      </section>
    </div>
  )
}
