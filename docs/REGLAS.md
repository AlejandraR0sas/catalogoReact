<!--
ARCHIVO: docs/REGLAS.md
¿DE QUÉ TRATA?: Reglas del equipo para que el código de los 3 encaje sin choques.
¿PARA QUÉ SIRVE?: Leerlo ANTES de escribir código. Si hay duda, esto manda.
ASIGNADO A: Los 3 (lectura obligatoria). Cambios a este archivo solo si los 3 están de acuerdo.
-->

# Reglas del equipo

## 1. Qué construimos (lo que pide la maestra)
App "Catálogo" que **consume una API pública**, **lista** elementos, **filtra por texto** y muestra un **detalle en otra ruta**.

- API elegida: **TheMealDB** (recetas) → https://www.themealdb.com/api.php. Base de pruebas gratuita: `https://www.themealdb.com/api/json/v1/1` (la llave `1` es la de pruebas, gratis y pública).
  - Lista/búsqueda: `GET /search.php?s=chicken` → `{ meals: [ {...}, ... ] }`
  - Detalle: `GET /lookup.php?i=52772` → `{ meals: [ {...} ] }` (un arreglo de 1 elemento)
  - Ojo: si no hay coincidencias la API responde `{ meals: null }` con status 200 (no es un error). `servicioLista.js` lo convierte en `[]`.
  - La API **no tiene paginación**: se pagina en el cliente con `TAMANO_PAGINA` (en `src/config.js`) y `slice`.
  - La receta viene con campos feos (`strMeal`, `strMealThumb`, `strIngredient1..20`…). **Nadie usa esos campos directamente:** todo pasa por `src/utilidades/normalizarReceta.js`, que devuelve `{ id, nombre, imagen, categoria, region, instrucciones, youtube, ingredientes: [{ nombre, medida }] }`. Ese es el contrato de datos del equipo.
  - Antes de empezar, **abran en el navegador** `.../search.php?s=` y `.../search.php?s=chicken` para ver qué devuelven. Si `s=` vacío regresa `null`, usar `search.php?f=a` como catálogo inicial.
- Rutas (contrato, no cambiar sin avisar): `/` lista · `/receta/:id` detalle · `*` 404.

## 2. Tecnología (la misma para todos)
- React + Vite + `react-router-dom`. **Solo esas 3 dependencias** (más `@vitejs/plugin-react` y `vite` como dev).
- `fetch` nativo (sin axios), CSS plano (sin Tailwind/UI libs). Así las métricas de bundle y tiempo son comparables con los demás equipos.
- **Solo la Persona A instala dependencias.** Si alguien cree que necesita otra, lo propone en el grupo primero.
- Crear el proyecto base (Persona A, una sola vez, dentro de la carpeta ya creada):
  ```
  npm init -y
  npm install react react-dom react-router-dom
  npm install -D vite @vitejs/plugin-react
  ```
  y agregar en `package.json` → `"type": "module"` y los scripts: `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`.

## 3. Estilo de código
- Componentes y páginas: `PascalCase.jsx`, **un componente por archivo**, `export default`.
- Hooks: empiezan con `use` (`useRecetas`). Servicios: `servicioXxx.js`.
- Todo en **español**: variables, funciones, componentes, comentarios y textos de la interfaz. Las únicas excepciones son lo que exige React/JavaScript (`use...`, `className`, `onChange` en elementos nativos…) y los nombres originales de la API (`meals`, `strMeal`…), que solo se tocan en `normalizarReceta.js`.
- Todo hook de datos devuelve exactamente `{ datos, cargando, error }`.
- Todo servicio devuelve datos ya listos (nunca el `Response` crudo) y lanza `Error` con mensaje legible si algo falla.
- Los componentes de presentación (`BarraBusqueda`, `TarjetaReceta`…) **no hacen fetch**; solo reciben props.
- Cada componente importa su propio CSS (`import '../estilos/lista.css'`). Clases con prefijo (`.lista-`, `.tarjeta-`, `.detalle-`, `.cargando-`…).
- Nadie escribe la URL de la API a mano: se importa `URL_API` de `src/config.js`.

## 4. Git y GitHub
- La rama `main` **siempre debe correr**. Nadie hace commit directo a `main`.
- Cada quien trabaja en su rama: `feature/<nombre>-<tarea>` (ej. `feature/antulio-lista`).
- Mensajes de commit cortos con prefijo: `feat:`, `fix:`, `docs:`, `style:` (ej. `feat: agrega buscador con debounce`).
- Antes de subir: `git pull --rebase origin main`. Luego `git push` y se abre un Pull Request.
- **Otra persona** revisa y aprueba el PR (A revisa a B, B revisa a C, C revisa a A).
- **Solo edita los archivos que te tocan.** Si necesitas cambiar un archivo de otro, avísale y que lo haga él/ella.
- Commits pequeños y frecuentes; que se note el trabajo de los 3 en el historial (la maestra puede revisarlo).

## 5. Orden de trabajo (para no bloquearnos)
1. **Persona A** crea el repo, sube el esqueleto (`package.json`, `vite.config.js`, `index.html`, `main.jsx`, `App.jsx`, `Estructura`, `BarraNavegacion`, `config.js`) y avisa. B y C **no empiezan a probar código** hasta que A suba esto, pero sí pueden ir escribiendo servicios/hooks.
2. **B y C trabajan en paralelo** (no se pisan: archivos distintos). Mientras no exista el archivo del otro, usar datos de prueba.
3. **Persona A integra, hace `npm run build` y mide** (bundle + Lighthouse).
4. **Todos** llenan su parte de README, docs/INVESTIGACION.md y la matriz.

## 6. Cómo medimos (misma forma para los 3, anótenlo en docs/METRICAS.md)
- **Tiempo de desarrollo:** cada quien anota hora de inicio y fin de cada tarea (incluye depurar). Total = suma de los 3, y también por persona.
- **Líneas de código:** solo `src/` (js, jsx, css), sin líneas en blanco ni comentarios. Si hay `cloc` instalado: `cloc src --exclude-ext=json`. Si no, `find src -name "*.js*" -o -name "*.css" | xargs wc -l` (y aclarar que incluye comentarios).
- **Bundle de producción:** `npm run build` y copiar lo que imprime Vite (tamaño normal y **gzip**) de los `.js` y `.css`. En la matriz va el **JS en gzip**. Aclarar en la exposición que es gzip.
- **Lighthouse:** `npm run build && npm run preview`, abrir en Chrome en **ventana de incógnito**, DevTools → Lighthouse, modo **Móvil**, categorías Performance/Accessibility/Best Practices/SEO. Hacerlo **3 veces** y anotar el promedio de Performance (y los otros 3 puntajes).

## 7. Qué NO hacer
- No subir `node_modules`, `dist` ni `.env`.
- No cambiar nombres de archivos, rutas ni la forma `{ datos, cargando, error }` sin avisar.
- No dejar `console.log` en la versión final.
