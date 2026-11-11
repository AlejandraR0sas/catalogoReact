<!--
ARCHIVO: docs/MATRIZ.md
¿DE QUÉ TRATA?: Nuestra fila de la matriz comparativa (la que se llena en la plenaria).
¿PARA QUÉ SIRVE?: Que tengamos la fila lista para copiarla a la matriz compartida de la maestra y al README.
ASIGNADO A: Ale (A) la arma; Antulio (B) revisa Curva de aprendizaje y Caso de uso; Osiel (C) revisa Reactividad y Renderizado.
Los campos con ___ se llenan con las mediciones reales de docs/METRICAS.md. No inventar números.
-->

# Fila de la matriz — React (con Vite)

| Framework | Reactividad | Renderizado | Bundle (kB) | Lighthouse | Curva de aprendizaje | Caso de uso ideal |
|---|---|---|---|---|---|---|
| **React** (con Vite o Next.js) | Al actualizarse el estado, React vuelve a renderizar el componente y reconcilia el resultado con el DOM | CSR con Vite; SSR/SSG disponibles mediante frameworks como Next.js | 84.33 kB (JS gzip, medido) | 100 / 100 (Performance móvil) | Media: JSX y hooks se aprenden rápido; el ecosistema pide decidir router/estado/fetching | SPAs y dashboards complejos con mucho ecosistema; con Next.js, sitios que necesitan SEO |
