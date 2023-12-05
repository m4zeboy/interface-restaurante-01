'use client'
import { IsLoadingSpinner } from '@/app/components/is-loading-spinner'
import { purchase } from '@/services/purchasae'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { primaryBtn } from '../styles'

export default function PurchaseButton() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const isLoadingClass = isLoading
    ? 'disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:bg-black'
    : ''
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
        className={`${primaryBtn}
        ${isLoadingClass}`}
        onClick={handlePurchase}
        disabled={isLoading}
      >
        {!isLoading && <span>Comprar Refeição</span>}
        {isLoading && <IsLoadingSpinner></IsLoadingSpinner>}
      </button>
    </>
  )
}
