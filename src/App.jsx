import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Galeria from './pages/Galeria';
import Construccion from './pages/Construccion';
import Cotizador from './pages/Cotizador';
import { Analytics } from '@vercel/analytics/react';
import './App.css'; // Mantenemos tus estilos globales y profesionales

export default function App() {
  return (
    <> 
    
      <BrowserRouter>
        <Routes>
          {/* Pantalla principal */}
          <Route path="/" element={<Inicio />} />
          
          {/* Nueva pantalla de portafolio */}
          <Route path="/galeria" element={<Galeria />} />
          
          <Route path="/construccion" element={<Construccion />} />
          
          <Route path="/cotizar" element={<Cotizador />} />
        </Routes>
      </BrowserRouter>
            <Analytics /> 
      
    </> 
  );
}