import { Link, useParams } from 'react-router-dom'
import Cargando from '../componentes/Cargando'
import MensajeError from '../componentes/MensajeError'
import useReceta from '../hooks/useReceta'
import '../estilos/detalle.css'

export default function DetalleReceta() {
  const { id } = useParams()
  const { datos: receta, cargando, error } = useReceta(id)

  if (cargando) return <Cargando />
  if (error) return <section className="detalle-pagina"><Link to="/" className="detalle-volver">← Volver al catálogo</Link><MensajeError mensaje={error} /></section>

  return (
    <article className="detalle-pagina">
      <Link to="/" className="detalle-volver">← Volver al catálogo</Link>
      <div className="detalle-tarjeta">
        <img className="detalle-imagen" src={receta.imagen} alt={receta.nombre} />
        <div className="detalle-contenido">
          <p className="detalle-categoria">{[receta.categoria, receta.region].filter(Boolean).join(' · ')}</p>
          <h1>{receta.nombre}</h1>
          <section className="detalle-seccion">
            <h2>Ingredientes</h2>
            <ul className="detalle-ingredientes">
              {receta.ingredientes.map((ingrediente, indice) => (
                <li key={`${ingrediente.nombre}-${indice}`}>
                  <span>{ingrediente.nombre}</span><span>{ingrediente.medida}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="detalle-seccion">
            <h2>Preparación</h2>
            <p className="detalle-instrucciones">{receta.instrucciones}</p>
          </section>
          {receta.youtube && <a className="detalle-video" href={receta.youtube} target="_blank" rel="noreferrer">Ver video de preparación ↗</a>}
        </div>
      </div>
    </article>
  )
}
