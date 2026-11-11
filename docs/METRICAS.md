<!--
ARCHIVO: docs/METRICAS.md
¿DE QUÉ TRATA?: Punto 3 de la actividad (Medición): tiempo de desarrollo, líneas de código, tamaño del bundle de producción y puntaje de Lighthouse.
¿PARA QUÉ SIRVE?: De aquí salen los números de la matriz, del README y de la exposición.
ASIGNADO A: Ale (A): bundle y Lighthouse. Osiel: tiempo de desarrollo y líneas de código. Antulio (B): anota su propio tiempo.
Cómo medir: ver sección 6 de docs/REGLAS.md.
-->

# Métricas

## 1. Tiempo de desarrollo
| Persona | Tarea | Inicio | Fin | Minutos |
|---|---|---|---|---|
| Ale | Repositorio y configuración del proyecto (Vite, dependencias, archivos base), formato de datos, rutas, estructura común, estilos globales, depuración, revisión y conexión del trabajo de los compañeros | 13:30 | 15:30 | 120 |
| Antulio | Lista de recetas: servicio de la API, hooks, página de inicio con buscador y paginación, tarjetas y estilos de la lista | 19:00 | 21:00 | 120 |
| Osiel | Detalle de receta: servicio, hook, página de detalle, página 404, mensajes de carga, error y sin resultados, y estilos | 18:00 | 19:00 | 60 |

## 2. Líneas de código
Comando usado: conteo de archivos `.js`, `.jsx` y `.css` en `src/`, sin líneas vacías ni líneas de comentario · Fecha: 10 nov 2026 (conteo del estado actual del árbol de trabajo; incluye el código fuente presente al medir).
| Tipo | Líneas |
|---|---|
| JS/JSX | 401 |
| CSS | 185 |
| **Total** | 586 |

### Tamaño del bundle de producción
Medido con `npm run build` (Vite 8.3.7):

| Archivo | Tamaño (kB) | Gzip (kB) |
|---|---|---|
| index.html | 1.00 | 0.63 |
| index-BWGeQ5hG.css | 4.97 | 1.53 |
| index-eO8ehAe1.js | 265.43 | 84.33 |

**Bundle de JavaScript (gzip): 84.33 kB**

### Lighthouse
Medido con `npm run preview`, Chrome en incógnito, modo móvil.

| Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|
| 100 | 100 | 96 | 82 |

Métricas de rendimiento: First Contentful Paint 1.5 s, Largest Contentful Paint 1.5 s, Total Blocking Time 0 ms, Cumulative Layout Shift 0, Speed Index 1.5 s.


