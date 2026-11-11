/**
 * ARCHIVO: src/paginas/Inicio.jsx
 * ¿DE QUÉ TRATA?: Página principal '/': listado de recetas con buscador.
 * ¿PARA QUÉ SIRVE?: Cumple 2 requisitos de la maestra: LISTAR elementos y FILTRAR por texto.
 * ASIGNADO A: Antulio (Persona B)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Estado del texto de búsqueda (useState) y de la página actual (vuelve a 1 cuando cambia el texto).
 *   2. Pasar el texto por useRetraso y luego a useRecetas.
 *   3. Paginar en el cliente: datos.slice((pagina-1)*TAMANO_PAGINA, pagina*TAMANO_PAGINA). Mostrar <BarraBusqueda />, <ListaRecetas /> y botones Anterior/Siguiente.
 *   4. Mostrar Cargando / MensajeError / SinResultados (componentes de Persona C) según el estado.
 *   5. Guardar el texto de búsqueda en la URL (?q=) con useSearchParams para que al volver del detalle no se pierda (opcional/bonus).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Export default.
 *   - Los componentes Cargando, MensajeError y SinResultados los hace Persona C: usar sus nombres exactos.
 */


import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { TAMANO_PAGINA } from "../config.js";

import useRecetas from "../hooks/useRecetas.js";
import useRetraso from "../hooks/useRetraso.js";

import BarraBusqueda from "../componentes/BarraBusqueda.jsx";
import ListaRecetas from "../componentes/ListaRecetas.jsx";

import Cargando from "../componentes/Cargando.jsx";
import MensajeError from "../componentes/MensajeError.jsx";
import SinResultados from "../componentes/SinResultados.jsx";

export default function Inicio() {
    // Obtener y conservar el texto de búsqueda en la URL.
    const [parametros, setParametros] = useSearchParams();

    const [busqueda, setBusqueda] = useState(
        parametros.get("q") || ""
    );

    // Controlar la página actual.
    const [pagina, setPagina] = useState(1);

    // Retrasar la búsqueda para evitar peticiones por cada tecla.
    const busquedaRetrasada = useRetraso(busqueda);

    // Obtener las recetas desde el hook.
    const { datos, cargando, error } = useRecetas(busquedaRetrasada);

    // Reiniciar la paginación cuando cambia la búsqueda.
    useEffect(() => {
        setPagina(1);
    }, [busqueda]);

    // Mantener sincronizada la búsqueda con la URL.
    useEffect(() => {
        const busquedaURL = parametros.get("q") || "";

        if (busquedaURL !== busqueda) {
            setParametros(
                busqueda ? { q: busqueda } : {},
                { replace: true }
            );
        }
    }, [busqueda, parametros, setParametros]);

    // Calcular las recetas correspondientes a la página actual.
    const totalPaginas = Math.ceil(datos.length / TAMANO_PAGINA);

    const recetasPaginadas = datos.slice(
        (pagina - 1) * TAMANO_PAGINA,
        pagina * TAMANO_PAGINA
    );

    // Cambiar de página.
    function paginaAnterior() {
        setPagina((actual) => Math.max(actual - 1, 1));
    }

    function paginaSiguiente() {
        setPagina((actual) => Math.min(actual + 1, totalPaginas));
    }

    return (
        <main className="pagina-inicio">
            <header className="encabezado-lista">
                <h1>Catálogo de recetas</h1>
                <p>Encuentra recetas y descubre nuevos platillos.</p>
            </header>

            <BarraBusqueda
                valor={busqueda}
                alCambiar={setBusqueda}
            />

            {cargando && <Cargando />}

            {!cargando && error && (
                <MensajeError mensaje={error} />
            )}

            {!cargando && !error && datos.length === 0 && (
                <SinResultados />
            )}

            {!cargando && !error && datos.length > 0 && (
                <>
                    <ListaRecetas recetas={recetasPaginadas} />

                    <nav className="paginacion" aria-label="Paginación">
                        <button
                            type="button"
                            onClick={paginaAnterior}
                            disabled={pagina === 1}
                        >
                            Anterior
                        </button>

                        <span>
                            Página {pagina} de {totalPaginas}
                        </span>

                        <button
                            type="button"
                            onClick={paginaSiguiente}
                            disabled={pagina >= totalPaginas}
                        >
                            Siguiente
                        </button>
                    </nav>
                </>
            )}
        </main>
    );
}
