'use client'
import { createUser } from '@/services/register'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'

export function RegisterForm() {
  const { register, handleSubmit } = useForm()
  const [role, setRole] = useState('USER')
  const router = useRouter()
  async function handleRegister(data: any) {
    try {
      await createUser(data)
      toast.success('Usuário criado com sucesso.')
      setTimeout(() => {
        router.push('/sign-in')
      }, 1500)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <>
      <Toaster richColors position="top-center"></Toaster>
      <form
        className="space-y-6"
        method="POST"
        action="#"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Papel
          </label>
          <div className="mt-2">
            <select
              {...register('role')}
              id="role"
              name="role"
              required
              onChange={(event) => setRole(event.target.value)}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
            >
              <option value="USER">Usuário comum</option>
              <option value="STUDENT">Estudante</option>
              <option value="UNIVERSITY_SERVER">
                Servidor da universidade
              </option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
        </div>

        {role === 'STUDENT' && (
          <>
            <div>
              <label
                htmlFor="rga"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                RGA
              </label>
              <div className="mt-2">
                <input
                  {...register('rga')}
                  id="rga"
                  name="rga"
                  type="text"
                  autoComplete="rga"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="uniqueRegister"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CAD Único
              </label>
              <div className="mt-2">
                <input
                  {...register('uniqueRegister')}
                  id="uniqueRegister"
                  name="uniqueRegister"
                  type="text"
                  autoComplete="uniqueRegister"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </>
        )}
        {role === 'UNIVERSITY_SERVER' && (
          <>
            <div>
              <label
                htmlFor="siape"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                SIAPE
              </label>
              <div className="mt-2">
                <input
                  {...register('siape')}
                  id="siape"
                  name="siape"
                  type="text"
                  autoComplete="siape"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </>
        )}

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome
          </label>
          <div className="mt-2">
            <input
              {...register('name')}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {role === 'STUDENT' || role === 'UNIVERSITY_SERVER'
              ? 'Passaporte'
              : 'E-mail'}
          </label>
          <div className="mt-2">
            <input
              {...register('passport')}
              id="passport"
              name="passport"
              type="text"
              autoComplete="passport"
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Senha
            </label>
          </div>
          <div className="mt-2">
            <input
              {...register('password')}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Registrar
          </button>
        </div>
      </form>
    </>
  )
}
