'use client'
import { IsLoadingSpinner } from '@/app/(auth)/sign-in/components/is-loading-spinner'
import { purchase } from '@/services/purchasae'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'

export default function PurchaseButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  async function handlePurchase() {
    try {
      setIsLoading(true)
      const data = await purchase()
      router.push('/ticket/' + data.ticket.id)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <Toaster richColors></Toaster>
      <button
        className={`bg-black p-2 rounded-md text-white w-full font-semibold flex justify-center
        ${isLoading
            ? 'disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:bg-black'
            : ''
          }`}
        onClick={handlePurchase}
        disabled={isLoading}
      >
        {!isLoading && <span>Comprar Refeição</span>}
        {isLoading && <IsLoadingSpinner></IsLoadingSpinner>}
      </button>
    </>
  )
}
