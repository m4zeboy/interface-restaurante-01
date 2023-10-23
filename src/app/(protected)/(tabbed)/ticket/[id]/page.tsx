import { getTicket } from '@/services/get-ticket'
import { AxiosError } from 'axios'
import { Toaster, toast } from 'sonner'

interface TicketParams {
  params: {
    id: string
  }
}

export default async function Ticket(props: TicketParams) {
  try {
    const response = await getTicket({ id: props.params.id })
    const { ticket } = response.data
    return (
      <div className="px-4 py-3">
        <div>qr code</div>
        <ul>
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
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(ticket.price)}
            </span>
          </li>
        </ul>
      </div>
    )
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return 'Erro ao carregar o ticket'
    }
  }
}
