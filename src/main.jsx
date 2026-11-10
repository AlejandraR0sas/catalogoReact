/**
 * ARCHIVO: src/main.jsx
 * ¿DE QUÉ TRATA?: Punto de entrada de JavaScript de la app.
 * ¿PARA QUÉ SIRVE?: Monta <App /> en el #root e importa los estilos globales.
 * ASIGNADO A: Ale (Persona A)
 *
 * QUÉ LE TOCA HACER AQUÍ:
 *   1. Importar React StrictMode, createRoot, BrowserRouter, App y estilos/global.css.
 *   2. Renderizar <BrowserRouter><App/></BrowserRouter> dentro de StrictMode.
 *
 * REGLAS PARA QUE TODO CONCUERDE:
 *   - El BrowserRouter va SOLO aquí (no en App.jsx).
 */
import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App'
import './estilos/global.css'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </StrictMode>
)