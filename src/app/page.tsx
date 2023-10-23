import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl lg:text-3xl font-bold text-center max-w-sm'>Bem vindo ao Restaurante Univseritário Digital</h1>
      <p className='mt-4'>Já é cadastrado?</p>
      <Link href="/sign-in" className='max-w-xs w-full mt-2 px-3 py-2 bg-black rounded-md text-white text-center'>Entrar</Link>
      <hr className='max-w-xs w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded' />
      <p className=''>Ainda não tem conta?</p>
      <Link href="/register" className='max-w-xs w-full mt-2 px-3 py-2 border-2 border-black rounded-md text-center'>Registrar</Link>
    </main>
  )
}
