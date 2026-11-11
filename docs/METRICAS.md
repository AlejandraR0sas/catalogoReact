<!--
ARCHIVO: docs/METRICAS.md
¿DE QUÉ TRATA?: Punto 3 de la actividad (Medición): tiempo de desarrollo, líneas de código, tamaño del bundle de producción y puntaje de Lighthouse.
¿PARA QUÉ SIRVE?: De aquí salen los números de la matriz, del README y de la exposición.
ASIGNADO A: Ale (A): bundle y Lighthouse. Osiel: tiempo de desarrollo y líneas de código. Antulio (B): anota su propio tiempo.
Cómo medir: ver sección 6 de docs/REGLAS.md.
-->

# Métricas

## 1. Tiempo de desarrollo — Osiel junta los datos; cada quien anota el suyo
| Persona | Tarea | Inicio | Fin | Minutos |
| Ale | Crear proyecto e instalar dependencias | | | |
| Ale | Configurar Vite, index.html, .gitignore, .env.example y config.js | | | |
| Ale | Crear normalizarReceta.js | | | |
| Ale | Crear main.jsx y App.jsx (rutas) | | | |
| Ale | Crear Estructura, BarraNavegacion y estilos globales | | | |

**Total del equipo:** Pendiente de que cada integrante registre inicio y fin · **Alejandra:** pendiente · **Osiel:** pendiente · **Antulio:** pendiente

## 2. Líneas de código — Osiel 
Comando usado: conteo de archivos `.js`, `.jsx` y `.css` en `src/`, sin líneas vacías ni líneas de comentario · Fecha: 10 nov 2026 (conteo del estado actual del árbol de trabajo; incluye el código fuente presente al medir).
| Tipo | Líneas |
|---|---|
| JS/JSX | 171 |
| CSS | 95 |
| **Total** | 266 |

## 3. Bundle de producción — Alejandra
Pegar la salida de `npm run build`:
```
(pegar aquí)
```
| Archivo | Tamaño (kB) | Gzip (kB) |
|---|---|---|
| index-xxxx.js | | |
| index-xxxx.css | | |
| **Total JS gzip (el que va a la matriz)** | | |

## 4. Lighthouse — Ale Alejandra
Condiciones: `npm run preview`, Chrome incógnito, modo Móvil, 3 corridas.
| Corrida | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| **Promedio** | | | | |

Observaciones (qué bajó el puntaje y qué arreglamos): ___
