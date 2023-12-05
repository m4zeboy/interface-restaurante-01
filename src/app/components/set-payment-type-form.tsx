'use client'
import { Toaster, toast } from 'sonner'
import { useForm } from 'react-hook-form'
import TabbedTitle from './tabbed-title'
import TabbedContainer from './tabbed-container'
import { primaryBtn } from '../styles'
import { setPaymentMethod } from '@/services/set-payment-method'
import { useRouter } from 'next/navigation'

export default function SetPaymentTypeForm({
  paymentId,
}: {
  paymentId: string
}) {
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  async function handleSetPaymentMethod(data: any) {
    console.log(data)
    try {
      const response = await setPaymentMethod(paymentId, data.paymentMethod)
      console.log(response)
      reset()
      router.push(`/recharge/${response.payment.id}/payment/credit-card`)
    } catch (err) {
      if (err instanceof Error) {
        console.log(err)
        toast.error(err.message)
      }
    }
  }

  return (
    <>
      <Toaster richColors></Toaster>
      <form className="h-full" onSubmit={handleSubmit(handleSetPaymentMethod)}>
        <div className="relative">
          <TabbedContainer>
            <TabbedTitle>Escolha o método de pagamento</TabbedTitle>
          </TabbedContainer>
          <fieldset>
            <TabbedContainer>
              <div className="flex gap-1">
                <input
                  {...register('paymentMethod')}
                  id="creditCard"
                  type="radio"
                  name="paymentMethod"
                  value="CREDIT_CARD"
                />
                <label
                  htmlFor="creditCard"
                  className="text-base font-medium leading-6 text-gray-900 me-2"
                >
                  Cartão de credito
                </label>
              </div>
            </TabbedContainer>
            <TabbedContainer>
              <div className="flex gap-1">
                <input
                  {...register('paymentMethod')}
                  id="pix"
                  type="radio"
                  name="paymentMethod"
                  value="PIX"
                />
                <label
                  htmlFor="pix"
                  className="font-medium leading-6 text-gray-900 text-base"
                  id="credit-card"
                >
                  Pix
                </label>
              </div>
            </TabbedContainer>
          </fieldset>
        </div>
        <div className="bottom-0 left-0 right-0 ">
          <div className="max-w-[393px] p-4 mx-auto">
            <button className={primaryBtn} type="submit">
              Confirmar e continuar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
