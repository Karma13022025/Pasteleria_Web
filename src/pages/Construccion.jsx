import React from 'react';
import { Link } from 'react-router-dom';

export default function Construccion() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fafafa' }}>
      {/* --- NAVBAR SUTIL --- */}
      <nav className="navbar" style={{ boxShadow: 'none', borderBottom: '1px solid #eaeaea', backgroundColor: '#fff' }}>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="logo-img" style={{height: '40px', marginRight: '10px'}} />
          <span>Amena's</span>
        </Link>
      </nav>

      {/* --- CONTENIDO MINIMALISTA --- */}
      <div className="contenedor-minimalista">
        <span className="icono-sutil">✨</span>
        <h1 className="titulo-minimalista">Próximamente</h1>
        <p className="texto-minimalista">
          Estamos seleccionando cuidadosamente los diseños para nuestra nueva galería.
        </p>
        
        <Link to="/" className="enlace-volver">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}