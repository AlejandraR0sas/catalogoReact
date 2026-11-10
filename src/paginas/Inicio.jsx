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
