import { getTicket } from '@/services/get-ticket'
import { AxiosError } from 'axios'
import { QRCodeWrapper } from '../../../../components/qr-code-wrapper'
import { Ticket } from '@/services/list-purchases'

interface TicketParams {
  params: {
    id: string
  }
}

export default async function TicketPage(props: TicketParams) {
  try {
    const response = await getTicket({ id: props.params.id })
    const { ticket } = response.data.ticket
    ticket as Ticket
    return (
      <div className="px-4 py-3">
        <div>
          <QRCodeWrapper id={props.params.id}></QRCodeWrapper>
        </div>
        <ul className="mt-4">
          <li className="border-b-2 border-b-gray-200 p-1 flex justify-between">
            <span className="text-xs text-gray-400">ID</span>
            <span className="text-xs font-semibold">{props.params.id}</span>
          </li>
          <li className="border-b-2 border-b-gray-200 p-1 flex justify-between">
            <span className="text-xs text-gray-400">Data</span>
            <span className="text-xs font-semibold">
              {new Date(ticket.purchased_at).toLocaleDateString()}
            </span>
          </li>
          <li className="border-b-2 border-b-gray-200 p-1 flex justify-between">
            <span className="text-xs text-gray-400">Valor</span>
            <span className="text-xs font-semibold">
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(ticket.price)}
            </span>
          </li>
        </ul>
        {ticket.validated_at === null && (
          <div className="mt-8">
            <p className="text-center">
              Mostre o código para alguém da administração do restaurante para
              que possa ser validado.
            </p>
          </div>
        )}
      </div>
    )
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return 'Erro ao carregar o ticket'
    }
  }
}
