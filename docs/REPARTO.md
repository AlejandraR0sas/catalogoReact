<!--
ARCHIVO: docs/REPARTO.md
¿DE QUÉ TRATA?: Tabla de quién hace qué (código, documentación y presentación).
¿PARA QUÉ SIRVE?: Que los 3 sepan exactamente su parte y no se duplique trabajo.
ASIGNADO A: Los 3. Marcar con [x] lo terminado.
-->

# Reparto del trabajo

| | **Persona A — Alejandra** | **Persona B — Antulio** | **Persona C — Osiel** |
|---|---|---|---|
| **Rol** | Base, integración y mediciones | Lista + buscador + API | Detalle + estados + extras de métricas |
| **Código** | `index.html`, `vite.config.js`, `.env.example`, `.gitignore`, `src/main.jsx`, `src/App.jsx`, `src/config.js`, `src/utilidades/normalizarReceta.js`, `src/componentes/Estructura.jsx`, `BarraNavegacion.jsx`, `src/estilos/global.css` | `src/paginas/Inicio.jsx`, `componentes/BarraBusqueda.jsx`, `ListaRecetas.jsx`, `TarjetaReceta.jsx`, `hooks/useRecetas.js`, `hooks/useRetraso.js`, `servicios/servicioLista.js`, `estilos/lista.css` | `src/paginas/DetalleReceta.jsx`, `NoEncontrada.jsx`, `componentes/Cargando.jsx`, `MensajeError.jsx`, `SinResultados.jsx`, `hooks/useReceta.js`, `servicios/servicioDetalle.js`, `estilos/detalle.css` |
| **Investigación (docs/INVESTIGACION.md)** | Renderizado (CSR/SSR/SSG), herramientas de build, tamaño del bundle | Modelo de componentes, manejo de estado (+ reactividad) | Enrutamiento, comunidad, **pregunta de reflexión** |
| **Medición (docs/METRICAS.md)** | Bundle de producción + Lighthouse | Capturas de la lista (para README) | Tiempo de desarrollo (los 3) + líneas de código |
| **README / matriz** | Esqueleto, instrucciones, estructura, tecnologías, métricas; **arma y revisa la fila de la matriz** | Capturas de lista/buscador; revisa curva de aprendizaje y caso de uso | Capturas de detalle/errores/móvil; reflexión |
| **Presentación (Canva)** | Lámina 4 + su parte de 5 (bundle, Lighthouse) y 6 (la fila) — ver docs/PRESENTACION_CANVA.md | Láminas 1 y 2 | Lámina 3 + su parte de 5 (tiempo, líneas) y 6 (reflexión) |
| **Revisa el PR de** | Persona C | Persona A | Persona B |

## Checklist rápido

**Persona A**
- [ ] Repo creado en GitHub y compañeros agregados como colaboradores
- [ ] Esqueleto subido a `main` (incluye `normalizarReceta.js` y `config.js`; B y C dependen de ellos)
- [ ] Integración de B y C sin errores
- [ ] Bundle medido · Lighthouse medido (3 corridas)

**Persona B**
- [ ] `servicioLista.js` y hooks
- [ ] Lista + buscador con debounce + paginación en el cliente
- [ ] Capturas · su parte de la investigación

**Persona C**
- [ ] `servicioDetalle.js` y `useReceta.js`
- [ ] Detalle + 404 + Cargando/Error/SinResultados
- [ ] Tiempo y líneas de código · su parte de la investigación · reflexión
