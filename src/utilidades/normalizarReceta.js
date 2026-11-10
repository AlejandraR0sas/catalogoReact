/**
 * ARCHIVO: src/utilidades/normalizarReceta.js
 * ¿DE QUÉ TRATA?: Convierte la receta 'fea' de TheMealDB en un objeto limpio.
 * ¿PARA QUÉ SIRVE?: La API devuelve campos como strMeal, strMealThumb, strIngredient1..20 y strMeasure1..20; este archivo los convierte a un formato fijo que usan B y C.
 * ASIGNADO A: TU_NOMBRE (Persona A)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Exportar normalizarReceta(cruda) que devuelve { id, nombre, imagen, categoria, region, instrucciones, youtube, ingredientes }.
 *   2. id = cruda.idMeal, nombre = cruda.strMeal, imagen = cruda.strMealThumb, categoria = cruda.strCategory, region = cruda.strArea, instrucciones = cruda.strInstructions, youtube = cruda.strYoutube.
 *   3. ingredientes = arreglo de { nombre, medida } recorriendo strIngredient1..20 / strMeasure1..20 y descartando los vacíos o null.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Es EL contrato de datos del equipo: B y C solo usan los campos normalizados, nunca los str... de la API.
 *   - Subirlo en el primer push del esqueleto (B y C dependen de él).
 */
