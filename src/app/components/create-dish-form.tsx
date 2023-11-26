'use client'
import { Toaster, toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { createDish } from '@/services/create-dish'

export default function CreateDishForm() {
  const { register, handleSubmit, reset } = useForm()
  async function handleCreateDish(data: any) {
    try {
      await createDish(data)
      reset()
      toast.success('Prato criado com sucesso')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }

  return (
    <>
      <Toaster richColors></Toaster>
      <form onSubmit={handleSubmit(handleCreateDish)} className="h-full">
        <div className="relative">
          <div className="px-4 py-2">
            <h3 className="text-3xl font-bold">Novo Prato</h3>
          </div>
          <fieldset>
            <div className="bg-[#fbfbfb] px-4 py-2 font-medium text-base">
              <legend>Dados do prato</legend>
            </div>

            <div className="bg-[#fbfbfb] px-4 py-2 font-medium text-base grid gap-2">
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

              <div>
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
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="veganMainDish"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Opção Vegana
                  </label>
                  <input
                    {...register('veganMainDish')}
                    type="text"
                    id="veganMainDish"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>

                <div>
                  <label
                    htmlFor="salad"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Salada
                  </label>
                  <input
                    {...register('salad')}
                    type="text"
                    id="salad"
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="followUp"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Acompanhamento
                </label>
                <input
                  {...register('followUp')}
                  type="text"
                  id="followUp"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label
                  htmlFor="dessert"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Dessert
                </label>
                <input
                  {...register('dessert')}
                  type="text"
                  id="dessert"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="bg-[#fbfbfb] px-4 py-2 font-medium text-base">
              <legend>Data</legend>
            </div>

            <div className="bg-[#fbfbfb] px-4 py-2 font-medium text-base grid gap-2">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data
                </label>
                <input
                  {...register('date')}
                  id="date"
                  type="date"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="bottom-0 left-0 right-0 ">
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
