/**
 * ARCHIVO: src/componentes/BarraNavegacion.jsx
 * ¿DE QUÉ TRATA?: Barra de navegación superior.
 * ¿PARA QUÉ SIRVE?: Permite volver al listado desde cualquier página.
 * ASIGNADO A: Ale (Persona A)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Usar <Link to="/"> con el título de la app.
 *   2. Mantenerlo simple: logo/título + enlace a Inicio.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Usar <Link>, nunca <a href> (si no, la página se recarga completa).
 */
import {Link} from 'react-router-dom'
function BarraNavegacion(){
    return(
        <header className="barra">
            <Link to="/" className='barra-titulo'>Catálogo Gastronomico</Link>
            <nav><Link to="/">Inicio</Link></nav>
        </header>
    )
}
export default BarraNavegacion