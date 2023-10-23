'use client'
import { Toaster, toast } from 'sonner'
import { recharge } from '@/services/recharge'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export default function RechargeForm() {
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  async function handleRecharge(data) {
    await recharge({ amount: data.amount })
    reset()
    toast.success('Recarga efetuada com sucesso!')
    setTimeout(() => router.push('/home'), 1500)
  }

  return (
    <>
      <Toaster richColors></Toaster>
      <form onSubmit={handleSubmit(handleRecharge)}>
        <fieldset>
          <div>
            <div className="px-4 py-2">
              <label htmlFor="amount" className="text-3xl font-bold">
                Qual é o valor da recarga?
              </label>
            </div>
            <div className="px-4 py-2">
              <input
                {...register('amount')}
                type="number"
                min={1}
                className="w-full border-b-2 border-slate-300 p-2 outline-none focus:border-blue-500"
                placeholder="30"
              />
            </div>
          </div>
        </fieldset>
        <div className="fixed bottom-0 left-0 right-0">
          <div className="max-w-[393px] p-4 mx-auto">
            <button className="bg-black p-2 rounded-md text-white w-full">
              Efetuar pagamento
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
