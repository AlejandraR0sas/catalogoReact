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
- React no incluye un sistema de rutas en su paquete principal. Entre las opciones están React Router, TanStack Router y el enrutamiento de frameworks como Next.js.
- React Router permite declarar rutas con `<Routes>` y `<Route>`, leer parámetros con `useParams`, navegar con `<Link>` y compartir layouts con `<Outlet>`.
- En el proyecto se definieron tres rutas: `/` para la lista, `/receta/:id` para el detalle y `*` para direcciones inexistentes. La ruta de detalle obtiene el id de la URL y carga una receta normalizada.

## 4. Renderizado (CSR, SSR, SSG)
- **CSR:** El navegador descarga un HTML casi vacío + JavaScript y React dibuja la página en el cliente(navegador). Ventaja: simple y rápido de navegar después. Desventaja: primera carga y SEO más débiles.
- **SSR y SSG** se logran con un **framework sobre React**: Next.js (SSR, SSG, ISR, Server Components) o React Router en modo framework. React por sí solo es una librería de UI.


## 5. Herramientas de build
- **Vite** es la opción actual para empezar un proyecto React sin framework: servidor de desarrollo muy rápido (módulos ES nativos) y `vite build` para producción (minificación, tree-shaking, code splitting).
- **Create React App está descontinuado** desde febrero de 2025; la propia documentación de React lo explica y recomienda un framework (Next.js, React Router) o Vite. Fuente: https://react.dev/blog/2025/02/14/sunsetting-create-react-app
- Next.js trae su propio sistema de build (Turbopack/webpack, verificar versión).

## 6. Tamaño del bundle — Alejandra
- `react` + `react-dom` son el "costo base" de cualquier app React; el router suma un poco más. Es mayor que el de Svelte o Solid, que compilan sin runtime grande.
- **No pongan un número de internet: pongan el que midan.** Ver docs/METRICAS.md (`npm run build`, JS en gzip).
- Formas de reducir: `React.lazy` + code splitting por ruta, imágenes con `loading="lazy"`, no meter librerías pesadas.

## 7. Comunidad y ecosistema — Osiel
- React cuenta con un ecosistema amplio de paquetes para interfaces, formularios, tablas y gráficas, además de documentación y una comunidad activa. El proyecto se desarrolla públicamente y recibe contribuciones de Meta y de la comunidad.
- Como referencia comparable, en la encuesta Stack Overflow Developer Survey 2025 React aparece entre las tecnologías web reportadas por participantes. La página consultada no se usa aquí para afirmar que sea “la más usada”; la encuesta refleja a quienes respondieron, no a todos los desarrolladores.
- Consulta: 10 de noviembre de 2026. Fuentes: [Stack Overflow Developer Survey 2025 — Technology](https://survey.stackoverflow.co/2025/technology) y [repositorio oficial de React en GitHub](https://github.com/react/react) (las estrellas cambian con el tiempo, por eso no se fija un conteo en este documento).

## Fila de la matriz — ver docs/MATRIZ.md

## Reflexión — Osiel (C)
**¿Qué framework elegirías para un dashboard de datos en una empresa con 5 desarrolladores junior, y por qué?**

Elegiría React con Vite y una plantilla común para el equipo. Su ecosistema ofrece opciones conocidas para gráficas, tablas y consultas de datos, y la documentación y comunidad facilitan encontrar ejemplos y resolver dudas. Como React deja decisiones de estructura y manejo de datos en manos del equipo, acordaría desde el inicio convenciones, revisión de cambios y una librería por necesidad. Así los cinco juniors pueden trabajar con una base compartida sin agregar herramientas innecesarias.
