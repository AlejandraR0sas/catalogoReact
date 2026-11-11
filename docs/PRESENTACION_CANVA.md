<!--
ARCHIVO: docs/PRESENTACION_CANVA.md
¿DE QUÉ TRATA?: Guion de la presentación de 3 minutos (plenaria): qué lámina redacta cada quien.
¿PARA QUÉ SIRVE?: Dividir la redacción en Canva sin duplicar ni dejar huecos.
ASIGNADO A: Los 3. Cada quien redacta SOLO sus láminas en Canva (una página de Canva = una lámina).
-->

# Presentación de 3 minutos (Canva)

La maestra pide: **cada equipo llena su fila en la matriz compartida y presenta 3 minutos.** Son 6 láminas, ~30 segundos cada una. Ensayen con cronómetro.

## Reparto

| # | Lámina | Quién redacta y expone | Tiempo | Qué lleva (máx. 4 viñetas, letra grande) |
|---|---|---|---|---|
| 1 | **Portada y prototipo** | Antulio (B) | 20 s | Título, equipo, framework (React + Vite), la app Catálogo (API TheMealDB (recetas), lista, filtro por texto, detalle en otra ruta) y una captura de la lista |
| 2 | **Componentes, estado y reactividad** | Antulio (B) | 35 s | Componentes = funciones + JSX; props de padre a hijo; `useState`; re-render + Virtual DOM; ejemplo de nuestro proyecto (`useRetraso`) |
| 3 | **Enrutamiento y comunidad** | Osiel (C) | 35 s | React no trae router → React Router; rutas `/` y `/receta/:id`; comunidad y ecosistema (1-2 cifras con fecha) |
| 4 | **Renderizado, build y bundle** | Ale (A) | 40 s | CSR con Vite; SSR/SSG con Next.js; Vite para build; CRA descontinuado; qué pesa el bundle y cómo se podría reducir |
| 5 | **Mediciones** | Ale (A) bundle y Lighthouse · Osiel (C) tiempo y líneas | 30 s | Un cuadro con 4 números: tiempo de desarrollo, líneas de código, bundle (gzip), Lighthouse. Nada más |
| 6 | **Fila de la matriz y reflexión** | Ale (A) la fila · Osiel (C) la reflexión | 30 s | La fila de docs/MATRIZ.md en tabla + respuesta corta a "¿qué elegirías para un dashboard con 5 juniors?" |

Total aproximado: 3:10. Si se pasan, recorten la lámina 2 o la 4.

## Texto base de Osiel (C)

**Lámina 3 — Enrutamiento y comunidad:** React no incluye router propio. En este proyecto usamos React Router para la lista `/`, el detalle `/receta/:id` y la ruta de error `*`. Sus herramientas permiten leer parámetros y navegar sin recargar. React también tiene un ecosistema amplio; la encuesta Stack Overflow 2025 lo incluye entre las tecnologías web reportadas por sus participantes (consulta: 10 nov 2026).

**Lámina 5 — Mediciones de Osiel:** código fuente actual: 266 líneas (171 JS/JSX y 95 CSS). El tiempo personal y el total del equipo quedan pendientes de sumar los registros de inicio y fin de cada integrante; no se estiman.

**Lámina 6 — Reflexión:** Elegiría React con Vite y una plantilla común. Su ecosistema facilita encontrar componentes y ayuda para gráficas y tablas. Para que cinco juniors trabajen de forma consistente, acordaría convenciones y revisiones desde el inicio.

## Reglas para que se vea como una sola presentación
- Una sola plantilla de Canva, **mismas fuentes y colores** (el primero que cree el archivo lo comparte con "puede editar" a los otros dos).
- Texto corto: viñetas de máximo ~8 palabras; los datos van en cuadros, no en párrafos.
- Cifras: solo las **medidas por nosotros** (docs/METRICAS.md). Otras cifras, con fuente y fecha en el pie de la lámina.
- Cada lámina lleva el nombre de quien la expone en una esquina pequeña.
- Las capturas salen de docs/capturas/.
- Los datos de las láminas 5 y 6 se llenan hasta tener las mediciones: dejen el espacio y recuerden quién los pone.
- Un ensayo completo juntos, mínimo una vez, antes de exponer.
