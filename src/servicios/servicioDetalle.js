import { URL_API } from '../config'
import { normalizarReceta } from '../utilidades/normalizarReceta'

export async function obtenerRecetaPorId(id, senal) {
  const respuesta = await fetch(`${URL_API}/lookup.php?i=${encodeURIComponent(id)}`, { signal: senal })
  if (!respuesta.ok) throw new Error('No se pudo cargar la receta. Intenta de nuevo.')

  const resultado = await respuesta.json()
  if (!resultado.meals?.length) throw new Error('Receta no encontrada')
  return normalizarReceta(resultado.meals[0])
}
