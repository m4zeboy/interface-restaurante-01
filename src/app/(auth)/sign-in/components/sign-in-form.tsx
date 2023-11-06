'use client'
import { AuthContext } from '@/contexts/auth-context'
import { AxiosError } from 'axios'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { IsLoadingSpinner } from './is-loading-spinner'

export function SignInForm() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)

  async function handleSignIn(data: any) {
    try {
      setIsLoading(true)
      await signIn(data)
      setIsLoading(false)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
        setIsLoading(false)
      }
    }
  }
  return (
    <>
      <Toaster richColors position="top-center"></Toaster>
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Passaporte
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
            className={`flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              ${isLoading
                ? 'disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:bg-black'
                : ''
              }
            `}
            disabled={isLoading}
          >
            {isLoading && <IsLoadingSpinner></IsLoadingSpinner>}
            {!isLoading && <span>Entrar</span>}
          </button>
        </div>
      </form>
    </>
  )
}
