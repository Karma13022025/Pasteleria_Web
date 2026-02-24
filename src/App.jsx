import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Galeria from './pages/Galeria';
import Construccion from './pages/Construccion';
import './App.css'; // Mantenemos tus estilos globales y profesionales

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pantalla principal */}
        <Route path="/" element={<Inicio />} />
        
        {/* Nueva pantalla de portafolio */}
        <Route path="/galeria" element={<Construccion />} />

        <Route path="/mi-galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
}