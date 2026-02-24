import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Galeria from './pages/Galeria';
import './App.css'; // Mantenemos tus estilos globales y profesionales

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pantalla principal */}
        <Route path="/" element={<Inicio />} />
        
        {/* Nueva pantalla de portafolio */}
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
}