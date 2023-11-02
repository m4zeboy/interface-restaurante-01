'use client'

import QRCode from 'qrcode.react'

export const QRCodeWrapper = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <QRCode value="teste" className="min-w-[256px] min-h-[256px]"></QRCode>
    </div>
  )
}
