import { Link } from 'react-router-dom'
import '../estilos/detalle.css'

export default function NoEncontrada() {
  return (
    <section className="detalle-estado">
      <p className="detalle-categoria">Error 404</p>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o fue movida.</p>
      <Link className="detalle-boton" to="/">Volver al catálogo</Link>
    </section>
  )
}
