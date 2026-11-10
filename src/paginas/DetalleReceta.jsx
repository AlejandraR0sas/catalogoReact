/**
 * ARCHIVO: src/paginas/DetalleReceta.jsx
 * ¿DE QUÉ TRATA?: Página de detalle '/receta/:id'.
 * ¿PARA QUÉ SIRVE?: Cumple el requisito de la maestra: mostrar un DETALLE en otra ruta.
 * ASIGNADO A: Osiel (Persona C)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Leer el id con useParams().
 *   2. Usar useReceta(id) y mostrar Cargando / MensajeError mientras carga o si falla.
 *   3. Mostrar foto grande, nombre, categoría, región, lista de ingredientes con su medida, instrucciones y, si existe, enlace al video de YouTube.
 *   4. Botón/enlace 'Volver' al listado (<Link to="/"> o navigate(-1)).
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Export default.
 *   - Campos (ya normalizados): id, name, image, category, area, instructions, youtube, ingredientes[{ nombre, medida }].
 */
