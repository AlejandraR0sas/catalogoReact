/**
 * ARCHIVO: src/servicios/servicioDetalle.js
 * ¿DE QUÉ TRATA?: Función que pide a la API UNA receta por id.
 * ¿PARA QUÉ SIRVE?: Alimenta la pantalla de detalle.
 * ASIGNADO A: Osiel (Persona C)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Exportar async function obtenerRecetaPorId(id, senal).
 *   2. Pedir `${URL_API}/lookup.php?i=${id}`; la API responde { meals: [ {...} ] } (un arreglo de 1 elemento) o { meals: null }.
 *   3. Si meals es null, lanzar un Error con mensaje 'Receta no encontrada'. Si no, devolver normalizarReceta(meals[0]).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Devuelve la receta ya normalizada con normalizarReceta.
 *   - Sin axios: solo fetch.
 */
