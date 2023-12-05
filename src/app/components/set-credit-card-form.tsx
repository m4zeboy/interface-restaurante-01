'use client'
import { Toaster, toast } from 'sonner'
import { useForm } from 'react-hook-form'
import TabbedTitle from './tabbed-title'
import TabbedContainer from './tabbed-container'
import { formControl, formLabel, primaryBtn } from '../styles'
import { setCreditCard } from '@/services/set-credit-card'
import { useRouter } from 'next/navigation'

export default function SetCreditCardForm({
  paymentId,
}: {
  paymentId: string
}) {
  const { register, handleSubmit, reset } = useForm()
  const router = useRouter()
  async function handleSetCreditCard(data: any) {
    try {
      const response = await setCreditCard(paymentId, data)
      reset()
      router.push(`/recharge/${paymentId}/payment/credit-card/confirmation`)
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
      <form className="h-full" onSubmit={handleSubmit(handleSetCreditCard)}>
        <div className="relative">
          <TabbedContainer>
            <TabbedTitle>Insira os dados do cartão de crédito</TabbedTitle>
          </TabbedContainer>
          <fieldset>
            <div className="bg-[#FBFBFB]">
              <TabbedContainer>
                <div>
                  <label htmlFor="nameInCard" className={formLabel}>
                    Nome no cartão
                  </label>
                  <input
                    {...register('nameInCard')}
                    id="nameInCard"
                    type="text"
                    className={formControl}
                    placeholder="Luke Skywalker"
                  />
                </div>

                <div className="mt-1">
                  <label htmlFor="cardNumber" className={formLabel}>
                    Número no cartão
                  </label>
                  <input
                    {...register('cardNumber')}
                    id="cardNumber"
                    type="text"
                    className={formControl}
                    placeholder="1234 1234 1234"
                  />
                </div>

                <div className="columns-2 mt-1">
                  <div>
                    <label htmlFor="cvc" className={formLabel}>
                      CVC
                    </label>
                    <input
                      {...register('cvc')}
                      id="cvc"
                      type="number"
                      className={formControl}
                      placeholder="123"
                    />
                  </div>

                  <div>
                    <label htmlFor="expirationDate" className={formLabel}>
                      Data de expiração
                    </label>
                    <input
                      {...register('expirationDate')}
                      id="expirationDate"
                      type="date"
                      className={formControl}
                    />
                  </div>
                </div>
              </TabbedContainer>
            </div>
          </fieldset>
        </div>
        <div className="fixed bottom-0 left-0 right-0 ">
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
