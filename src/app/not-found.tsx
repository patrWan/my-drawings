import Link from 'next/link'
export default function Custom404() {
  return (
    <section 
    className='flex flex-col text-black text-xl items-center justify-center space-y-2'
    >
      <h2>Esta página no está disponible.</h2>
      <p>Es posible que el enlace que seleccionaste no funcione o que se haya eliminado la página.</p>
      <Link className="p-2 border-2 text-purple-800 hover:text-purple-600" href="/">Volver a My Drawing</Link>
    </section>
  )
}
