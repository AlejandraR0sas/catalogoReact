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


/**
 * ARCHIVO: src/servicios/servicioLista.js
 * Servicio encargado de consultar la lista de recetas de TheMealDB.
 */

import { URL_API } from "../config.js";
import { normalizarReceta } from "../utilidades/normalizarReceta.js";

export async function obtenerRecetas(nombre = '', senal) {
    try {
        // Preparar la URL de búsqueda.
        const busqueda = nombre.trim();

        let url = `${URL_API}/search.php?s=${encodeURIComponent(busqueda)}`;

        // Realizar la petición a la API.
        let respuesta = await fetch(url, {
            signal: senal
        });

        if (!respuesta.ok) {
            throw new Error("No se pudo consultar la lista de recetas.");
        }

        let resultado = await respuesta.json();

        // Si la búsqueda inicial está vacía y no devuelve recetas,
        // utilizar la letra A como catálogo inicial.
        if (!resultado.meals && !busqueda) {
            url = `${URL_API}/search.php?f=a`;

            respuesta = await fetch(url, {
                signal: senal
            });

            if (!respuesta.ok) {
                throw new Error("No se pudo cargar el catálogo de recetas.");
            }

            resultado = await respuesta.json();
        }

        // Si no hay coincidencias, devolver un arreglo vacío.
        if (!resultado.meals) {
            return [];
        }

        // Convertir las recetas al formato establecido por el equipo.
        return resultado.meals.map(normalizarReceta);

    } catch (error) {
        // Permitir que AbortController gestione las cancelaciones.
        if (error.name === "AbortError") {
            throw error;
        }

        throw new Error(
            error.message || "Ocurrió un problema al cargar las recetas."
        );
    }
}
