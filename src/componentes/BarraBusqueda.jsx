/**
 * ARCHIVO: src/componentes/BarraBusqueda.jsx
 * ¿DE QUÉ TRATA?: Caja de texto del buscador.
 * ¿PARA QUÉ SIRVE?: Componente controlado que avisa al padre cuando cambia el texto.
 * ASIGNADO A: Antulio (Persona B)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Props: valor, alCambiar.
 *   2. Renderizar <input type="search"> con placeholder 'Buscar receta...' y aria-label (Lighthouse accesibilidad).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Componente 'tonto': no hace fetch, solo muestra y avisa.
 */



export default function BarraBusqueda({ valor, alCambiar }) {
    return (
        <div className="barra-busqueda">
            <input
                type="search"
                value={valor}
                onChange={(evento) => alCambiar(evento.target.value)}
                placeholder="Buscar receta..."
                aria-label="Buscar receta"
            />
        </div>
    );
}
