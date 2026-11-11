/**
 * ARCHIVO: src/hooks/useRetraso.js
 * ¿DE QUÉ TRATA?: Hook que retrasa un valor unos milisegundos.
 * ¿PARA QUÉ SIRVE?: Evita llamar a la API en cada tecla mientras el usuario escribe en el buscador.
 * ASIGNADO A: Antulio (Persona B)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Exportar useRetraso(valor, retraso = 400) con useState + useEffect + setTimeout y limpieza en el return.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - Nombre del hook empieza con 'use'.
 */


import { useEffect, useState } from "react";

export default function useRetraso(valor, retraso = 400) {
    const [valorRetrasado, setValorRetrasado] = useState(valor);

    useEffect(() => {
        const temporizador = setTimeout(() => {
            setValorRetrasado(valor);
        }, retraso);

        return () => {
            clearTimeout(temporizador);
        };

    }, [valor, retraso]);

    return valorRetrasado;
}
