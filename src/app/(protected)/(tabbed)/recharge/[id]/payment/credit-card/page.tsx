import SetCreditCardForm from '@/app/components/set-credit-card-form'

interface RechargePaymentParams {
  params: {
    id: string
  }
}

export default async function page(props: RechargePaymentParams) {
  return <SetCreditCardForm paymentId={props.params.id}></SetCreditCardForm>
}
