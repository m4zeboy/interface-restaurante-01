'use client'
import { Toaster, toast } from 'sonner'
import { recharge } from '@/services/recharge'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export default function CreateDishForm() {
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  async function handleCreateDish(data: any) {
    await recharge({ amount: data.amount })
    reset()
    toast.success('Recarga efetuada com sucesso!')
    setTimeout(() => router.push('/home'), 1500)
  }

  return (
    <>
      <Toaster richColors></Toaster>
      <form onSubmit={handleSubmit(handleCreateDish)}>
        <div className="px-4 py-2">
          <h3 className="text-3xl font-bold">Novo Prato</h3>
        </div>
        <fieldset>
          <div className="bg-[#fbfbfb] px-4 py-2 font-medium text-base">
            <legend>Dados do prato</legend>
          </div>

          <div className="bg-[#fbfbfb] px-4 py-2 font-medium text-base">
            <div>
              <label
                htmlFor="baseDish"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prato base
              </label>
              <input
                {...register('baseDish')}
                id="baseDish"
                type="text"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="mainDish"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Prato Principal
              </label>
              <input
                {...register('mainDish')}
                type="text"
                id="mainDish"
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </fieldset>
        <div className="fixed bottom-0 left-0 right-0">
          <div className="max-w-[393px] p-4 mx-auto">
            <button className="bg-black p-2 rounded-md text-white w-full">
              Cadastrar prato
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
