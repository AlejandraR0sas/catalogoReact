/**
 * ARCHIVO: src/hooks/useReceta.js
 * ¿DE QUÉ TRATA?: Hook que carga una sola receta según su id.
 * ¿PARA QUÉ SIRVE?: Encapsula carga/error/datos para DetalleReceta.jsx.
 * ASIGNADO A: Osiel (Persona C)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Recibir (id), llamar a obtenerRecetaPorId dentro de useEffect con AbortController.
 *   2. Devolver { datos, cargando, error }.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Forma de retorno OBLIGATORIA: { datos, cargando, error } (igual que useRecetas).
 */
