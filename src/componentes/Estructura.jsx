/**
 * ARCHIVO: src/componentes/Estructura.jsx
 * ¿DE QUÉ TRATA?: Estructura común de todas las páginas (barra superior + contenido + pie).
 * ¿PARA QUÉ SIRVE?: Evita repetir la BarraNavegacion en cada página usando <Outlet /> de React Router.
 * ASIGNADO A: Ale (Persona A)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Renderizar <BarraNavegacion />, <main><Outlet /></main> y un <footer> con los nombres del equipo.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Exportar con export default.
 */
import {Outlet} from 'react-router-dom'
import BarraNavegacion from './BarraNavegacion'
function Estructura(){
    return(
        <>
            <BarraNavegacion />
            <main className="contenedor">
                <Outlet />
            </main>
            <footer className="pie">
                <p>Equipo: Ale, Antulio y Osiel</p>
            </footer>
        </>
    )
}
export default Estructura