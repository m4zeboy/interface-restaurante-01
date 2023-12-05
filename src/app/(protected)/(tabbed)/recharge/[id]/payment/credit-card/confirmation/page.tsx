import TabbedContainer from '@/app/components/tabbed-container'
import TabbedTitle from '@/app/components/tabbed-title'

export default async function page(props: RechargePaymentParams) {
  return (
    <>
      <TabbedContainer>
        <TabbedTitle>Confirme as informações do seu pedido</TabbedTitle>
      </TabbedContainer>
      <TabbedContainer>
        <div className="p-5 border border-gray-200 rounded-md">
          <header>
            <strong>Pagamento</strong>
          </header>
          <div className="flex justify-between">
            <div>.... 6714</div> <div className="text-gray-400">01/2024</div>
          </div>
        </div>
      </TabbedContainer>

      <div className="fixed bottom-0 left-0 right-0">
        <div className="max-w-[393px] mx-auto bg-[#fbfbfb]">
          <TabbedContainer>
            <strong>Resumo do pedido</strong>
          </TabbedContainer>
          <TabbedContainer>
            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p className="text-gray-600">R$ 60,00</p>
            </div>
          </TabbedContainer>
        </div>
        <div className="max-w-[393px] p-4 mx-auto">
          <button className="bg-black p-2 rounded-md text-white w-full">
            Finalizar
          </button>
        </div>
      </div>
    </>
  )
}
