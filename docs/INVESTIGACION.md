<!--
ARCHIVO: docs/INVESTIGACION.md
¿DE QUÉ TRATA?: Punto 1 de la actividad: investigación de React (modelo de componentes, estado, enrutamiento, renderizado, build, bundle y comunidad) + pregunta de reflexión.
¿PARA QUÉ SIRVE?: Es la base de la exposición y de la fila de la matriz.
ASIGNADO A: cada sección dice su responsable. Todo lo de abajo es BORRADOR: léanlo, verifiquen los datos marcados con (verificar) y pónganlo en sus palabras.
-->

# Investigación: React

## 1. Modelo de componentes — Antulio
- La interfaz se arma con **componentes**: funciones de JavaScript que reciben `props` y devuelven **JSX** (HTML dentro de JS).
- Los componentes se **componen** (unos dentro de otros) y los datos fluyen **en un solo sentido**: del padre al hijo por props.
- Los **hooks** (`useState`, `useEffect`, `useMemo`, hooks propios) dan estado y efectos a los componentes de función. Los componentes de clase ya son legado.
- En nuestro proyecto: `ListaRecetas` recibe un arreglo y pinta muchas `TarjetaReceta`; `useRecetas` es un hook propio.

## 2. Manejo de estado y reactividad — Antulio
- Local: `useState` / `useReducer`. Compartido: `Context` (viene con React). Para estados grandes se usan librerías externas (Redux Toolkit, Zustand, Jotai): **React no incluye una oficial**.
- **Reactividad:** cuando cambia el estado, React **vuelve a ejecutar el componente** (re-render), compara el resultado con el anterior (**Virtual DOM / reconciliación**) y actualiza solo lo que cambió en el DOM real. No es reactividad "fina" por variable como las *signals* de Solid o Vue.
- Para evitar re-renders innecesarios se usa `memo`, `useMemo`, `useCallback`; el **React Compiler** busca hacerlo automático (verificar versión/estado actual en react.dev).
- En nuestro proyecto: el texto del buscador y la página son `useState`; `useRetraso` evita pedir a la API en cada tecla.

## 3. Enrutamiento — Osiel
- React **no trae router** propio. Opciones: **React Router** (el que usamos), TanStack Router, o el router integrado de Next.js.
- Con React Router: rutas declarativas (`<Routes>`, `<Route>`), parámetros (`/receta/:id` con `useParams`), navegación sin recargar (`<Link>`), layouts con `<Outlet>`.
- En nuestro proyecto: 3 rutas (`/`, `/receta/:id`, `*`).

## 4. Renderizado (CSR, SSR, SSG) — Alejandra
- **Con Vite (nuestro caso): CSR.** El navegador descarga un HTML casi vacío + JavaScript y React dibuja la página en el cliente. Ventaja: simple y rápido de navegar después; desventaja: primera carga y SEO más débiles.
- **SSR y SSG** se logran con un **framework sobre React**: Next.js (SSR, SSG, ISR, Server Components) o React Router en modo framework. React por sí solo es una librería de UI.
- Para este prototipo no necesitamos SSR/SSG, pero sí se debe mencionar en la matriz: "CSR (Vite); SSR/SSG con Next.js".

## 5. Herramientas de build — Alejandra
- **Vite** es la opción actual para empezar un proyecto React sin framework: servidor de desarrollo muy rápido (módulos ES nativos) y `vite build` para producción (minificación, tree-shaking, code splitting).
- **Create React App está descontinuado** desde febrero de 2025; la propia documentación de React lo explica y recomienda un framework (Next.js, React Router) o Vite. Fuente: https://react.dev/blog/2025/02/14/sunsetting-create-react-app
- Next.js trae su propio sistema de build (Turbopack/webpack, verificar versión).

## 6. Tamaño del bundle — Alejandra
- `react` + `react-dom` son el "costo base" de cualquier app React; el router suma un poco más. Es mayor que el de Svelte o Solid, que compilan sin runtime grande.
- **No pongan un número de internet: pongan el que midan.** Ver docs/METRICAS.md (`npm run build`, JS en gzip).
- Formas de reducir: `React.lazy` + code splitting por ruta, imágenes con `loading="lazy"`, no meter librerías pesadas.

## 7. Comunidad y ecosistema — Osiel
- La biblioteca de UI más usada; muchísimos tutoriales, respuestas en Stack Overflow, vacantes y librerías (tablas, gráficas, formularios, UI kits).
- Mantenida por Meta y la comunidad. Cifras (descargas en npm, estrellas en GitHub, Stack Overflow Developer Survey): (verificar y poner la fecha de consulta).

## Fila de la matriz — ver docs/MATRIZ.md

## Reflexión — Osiel (C)
**¿Qué framework elegirías para un dashboard de datos en una empresa con 5 desarrolladores junior, y por qué?**

Borrador (cada uno lo adapta; deben ponerse de acuerdo en una respuesta):
- **Una respuesta defendible: React + Vite** (con TypeScript si el equipo está dispuesto). Razones: ecosistema enorme para dashboards (Recharts/Chart.js para gráficas, TanStack Table para tablas, TanStack Query para datos), muchísima documentación y ayuda disponible para juniors, y es fácil contratar/relevar gente. Los hooks y el flujo unidireccional se aprenden en pocas semanas.
- **Riesgo a reconocer:** React deja muchas decisiones al equipo (router, estado, fetching, estructura); con 5 juniors puede salir desordenado. Se mitiga con una plantilla de proyecto, reglas como las de docs/REGLAS.md, revisión de PRs y un linter.
- **Alternativa a mencionar:** Angular (más estructura "de fábrica": router, formularios, inyección de dependencias, TypeScript) o Vue (curva de aprendizaje suave). Si la empresa ya usa uno, conviene ese.
- Cierre sugerido: "Elegiría React por ecosistema y ayuda disponible, imponiendo reglas y una plantilla para compensar la libertad."
