import Link from 'next/link'
export default function Custom404() {
  return (
    <div className='justify-center'>
      <h2>Esta página no está disponible.</h2>
      <p>Es posible que el enlace que seleccionaste no funcione o que se haya eliminado la página.</p>
      <Link className="p-2 border-2" href="/">Volver a My Draw</Link>
    </div>
  )
}
