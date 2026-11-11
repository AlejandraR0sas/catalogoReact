/**
 * ARCHIVO: src/App.jsx
 * ¿DE QUÉ TRATA?: Componente raíz: define las RUTAS de la aplicación.
 * ¿PARA QUÉ SIRVE?: Conecta cada URL con su página. Es el 'mapa' del sitio.
 * ASIGNADO A: Ale (Persona A)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Definir <Routes> con un <Route element={<Estructura/>}> padre.
 *   2. Ruta "/"  -> Inicio (de Persona B).
 *   3. Ruta "/receta/:id" -> DetalleReceta (de Persona C).
 *   4. Ruta "*" -> NoEncontrada (de Persona C).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Estas 3 rutas son el CONTRATO del equipo; no cambiarlas sin avisar.
 *   - Importar páginas con: import Inicio from './paginas/Inicio'  (export default).
 */
import {Routes, Route} from 'react-router-dom'
import Estructura from './componentes/Estructura'
import DetalleReceta from './paginas/DetalleReceta'
import NoEncontrada from './paginas/NoEncontrada'
function App(){
    return(
        <Routes>
            <Route element={<Estructura />}>
            <Route path="/" element={<h2>Inicio</h2>} />
            <Route path="/receta/:id" element={<DetalleReceta />}  />
            <Route path="*" element={<NoEncontrada />} />
            </Route>
        </Routes>
    )
}
export default App