/**
 * ARCHIVO: src/hooks/useRecetas.js
 * ¿DE QUÉ TRATA?: Hook que carga la lista según el texto de búsqueda y la página.
 * ¿PARA QUÉ SIRVE?: Encapsula estado de carga, error y datos para que Inicio.jsx quede limpio.
 * ASIGNADO A: Antulio (Persona B)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Recibir (nombre), llamar a obtenerRecetas dentro de useEffect.
 *   2. Cancelar la petición anterior con AbortController al cambiar nombre.
 *   3. Devolver { datos, cargando, error } (misma forma que useReceta de Persona C).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Forma de retorno OBLIGATORIA: { datos, cargando, error }.
 */
