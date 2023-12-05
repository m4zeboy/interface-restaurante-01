import SetPaymentTypeForm from '@/app/components/set-payment-type-form'

interface RechargePaymentParams {
  params: {
    id: string
  }
}

export default async function page(props: RechargePaymentParams) {
  return <SetPaymentTypeForm paymentId={props.params.id}></SetPaymentTypeForm>
}
