/**
 * ARCHIVO: src/hooks/useMeals.js
 * ¿DE QUÉ TRATA?: Hook que carga la lista según el texto de búsqueda y la página.
 * ¿PARA QUÉ SIRVE?: Encapsula estado de carga, error y datos para que Home.jsx quede limpio.
 * ASIGNADO A: Antulio (Persona B)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Recibir (name), llamar a getMeals dentro de useEffect.
 *   2. Cancelar la petición anterior con AbortController al cambiar name.
 *   3. Devolver { data, loading, error } (misma forma que useMeal de Persona C).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Forma de retorno OBLIGATORIA: { data, loading, error }.
 */
