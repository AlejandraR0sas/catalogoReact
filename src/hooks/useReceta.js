import { useEffect, useState } from 'react'
import { obtenerRecetaPorId } from '../servicios/servicioDetalle'

export default function useReceta(id) {
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controlador = new AbortController()
    setDatos(null)
    setCargando(true)
    setError('')

    obtenerRecetaPorId(id, controlador.signal)
      .then(setDatos)
      .catch((fallo) => {
        if (fallo.name !== 'AbortError') setError(fallo.message || 'Ocurrió un error al cargar la receta.')
      })
      .finally(() => {
        if (!controlador.signal.aborted) setCargando(false)
      })

    return () => controlador.abort()
  }, [id])

  return { datos, cargando, error }
}
