/**
 * ARCHIVO: src/config.js
 * Constantes globales de la app.
 *   - B y C importan URL_API de aquí; nadie escribe la URL a mano en otro archivo.
 */
export const URL_API= import.meta.env.VITE_URL_API ?? 'https://www.themealdb.com/api/json/v1/1'
export const TAMANO_PAGINA=12