import '../estilos/detalle.css'

export default function SinResultados({ texto = 'No se encontraron resultados' }) {
  return <p className="vacio-mensaje" role="status">{texto}</p>
}
