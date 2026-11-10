/**
 * ARCHIVO: src/servicios/servicioLista.js
 * ¿DE QUÉ TRATA?: Función que pide a la API la LISTA de recetas.
 * ¿PARA QUÉ SIRVE?: Separa el fetch de la interfaz: los componentes no hacen fetch directo.
 * ASIGNADO A: Antulio (Persona B)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Exportar async function obtenerRecetas(nombre = '', senal).
 *   2. Pedir `${URL_API}/search.php?s=${encodeURIComponent(nombre)}` con fetch nativo (si nombre está vacío, igual se pide con s= para traer un catálogo inicial; PROBAR en el navegador que devuelva recetas y, si regresa null, usar `search.php?f=a` como respaldo).
 *   3. Si no hay coincidencias la API responde { meals: null } (NO es un error): devolver [] en ese caso.
 *   4. Para otros errores de red/HTTP, lanzar un Error con mensaje legible.
 *   5. Aceptar un AbortSignal opcional para cancelar peticiones viejas.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Devuelve SIEMPRE un ARREGLO de recetas ya normalizadas con normalizarReceta (contrato; Inicio.jsx depende de esto).
 *   - Sin axios: solo fetch.
 */
