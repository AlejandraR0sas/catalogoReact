import '../estilos/detalle.css'

export default function MensajeError({ mensaje = 'Ocurrió un error.' }) {
  return <p className="error-mensaje" role="alert">{mensaje}</p>
}
