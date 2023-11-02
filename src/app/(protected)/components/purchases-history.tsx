import { Ticket, listPurchases } from '@/services/list-purchases'
import Link from 'next/link'

interface TicketItemProps {
  ticket: Ticket
}

function TicketItem({ ticket }: TicketItemProps) {
  const purchasedAt = new Date(ticket.purchased_at).toLocaleDateString(
    'pt-BR',
    { dateStyle: 'medium' },
  )
  const validatedText =
    ticket.validated_at !== null ? (
      'Validado'
    ) : (
      <span className="font-semibold text-green-500">Disponível</span>
    )
  return (
    <Link
      href={`/ticket/${ticket.id}`}
      className="border-b border-slate-300 px-1 py-2 flex justify-between items-center"
    >
      <span className="text-slate-400">{purchasedAt}</span>
      <span>{validatedText}</span>
    </Link>
  )
}

export default async function PurchasesHistory() {
  try {
    const response = await listPurchases()
    return (
      <div className="pt-1 px-5 pb-4">
        <section className="p-4 bg-white rounded-md">
          <h2 className="uppercase text-xs font-semibold">
            Histórico de compras
          </h2>
          {response.data.purchasedTickets.length === 0 ? (
            <p className="mt-2 text-slate-400">
              Você ainda não comprou nenhuma ficha
            </p>
          ) : (
            <ul>
              {response.data.purchasedTickets?.map((ticket: Ticket) => {
                return (
                  <li key={ticket.id}>
                    <TicketItem ticket={ticket}></TicketItem>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>
    )
  } catch (err) {
    return (
      <div className="pt-1 px-5 pb-4">
        <section className="p-4 bg-white rounded-md">
          <h2 className="uppercase text-xs font-semibold">
            Histórico de compras
          </h2>
          <p>Houve um erro ao carregar o histórico de compras.</p>
        </section>
      </div>
    )
  }
}
