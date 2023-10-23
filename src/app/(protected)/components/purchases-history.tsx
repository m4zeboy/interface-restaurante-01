import { Ticket, listPurchases } from '@/services/list-purchases'
import React from 'react'

interface TicketItemProps {
  ticket: Ticket
}

function TicketItem({ ticket }: TicketItemProps) {
  const purchasedAt = new Date(ticket.purchased_at).toLocaleDateString(
    'pt-BR',
    { dateStyle: 'medium' },
  )
  const validatedText = ticket.validated_at !== null ? 'Validado' : 'Disponível'
  return (
    <div className="border-b border-slate-300 px-1 py-2 flex justify-between items-center">
      <span className="text-slate-400">{purchasedAt}</span>
      <span>{validatedText}</span>
    </div>
  )
}

export default async function PurchasesHistory() {
  const { purchasedTickets } = await listPurchases()
  // console.log(purchasedTickets)
  return (
    <div className="pt-1 px-5 pb-4">
      <section className="p-4 bg-white rounded-md">
        <h2 className="uppercase text-xs font-semibold">
          Histórico de compras
        </h2>
        <ul>
          {purchasedTickets?.map((ticket) => {
            return (
              <li key={ticket.id}>
                <TicketItem ticket={ticket}></TicketItem>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
