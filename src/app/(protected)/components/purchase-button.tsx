'use client'
import { purchase } from '@/services/purchasae'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

export default function PurchaseButton() {
  const router = useRouter()
  async function handlePurchase() {
    try {
      const data = await purchase()
      router.push('/ticket/' + data.ticket.id)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
  return (
    <>
      <Toaster richColors></Toaster>
      <button
        className="bg-black p-2 rounded-md text-white w-full font-semibold"
        onClick={handlePurchase}
      >
        Comprar Refeição
      </button>
    </>
  )
}
