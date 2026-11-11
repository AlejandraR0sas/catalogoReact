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


import { useEffect, useState } from "react";
import { obtenerRecetas } from "../servicios/servicioLista.js";

export default function useRecetas(nombre = '') {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controlador = new AbortController();

        async function cargarRecetas() {
            setCargando(true);
            setError(null);

            try {
                const recetas = await obtenerRecetas(
                    nombre,
                    controlador.signal
                );

                setDatos(recetas);

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                    setDatos([]);
                }
            } finally {
                if (!controlador.signal.aborted) {
                    setCargando(false);
                }
            }
        }

        cargarRecetas();

        return () => {
            controlador.abort();
        };

    }, [nombre]);

    return { datos, cargando, error };
}
