'use client'

import { validate } from '@/services/validate'
import { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import { Toaster, toast } from 'sonner'

export default function Page() {
  const [showButton, setShowButton] = useState(false)
  const [ticketId, setTicketId] = useState('')

  async function handleScan(result: any, error: any) {
    if (result) {
      setTicketId(result?.text)
      setShowButton(true)
    }

    if (error) {
      console.error(error)
    }
  }

  async function handleValidate() {
    try {
      await validate({ ticketId })
      toast.success('Ficha validada com sucesso.')
      setShowButton(false)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  return (
    <div>
      <Toaster richColors></Toaster>
      <QrReader
        onResult={handleScan}
        constraints={{ facingMode: 'user' }}
        videoId="qr-code-scan"
        className="bg-slate-300"
      />
      <video src="" id="qr-code-scan"></video>
      <div className="fixed bottom-0 left-0 right-0">
        <div className="max-w-[393px] p-4 mx-auto">
          {showButton && (
            <button
              className="bg-black p-2 rounded-md text-white w-full"
              onClick={handleValidate}
            >
              Validar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
