import React, { useState, useEffect } from 'react'; // 👈 Agregamos useState aquí
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { galeriaDb } from '../Galeria'; 

export default function Galeria() {
  const [filtro, setFiltro] = useState('Todos');
  
  // 👈 NUEVO: Memoria para saber qué foto está en pantalla completa (null significa que ninguna)
  const [fotoAmpliada, setFotoAmpliada] = useState(null); 
  
  useEffect(() => {
    window.scrollTo(0, 0); 
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mensajeWhatsApp = encodeURI("¡Hola Amena's Pastelería! Vi su página web y me gustaría pedir información. 🍰");

  const fotosFiltradas = filtro === 'Todos' 
    ? galeriaDb 
    : galeriaDb.filter(foto => foto.categoria === filtro);

  return (
    <div className="pagina-publica">
      <nav className="navbar">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="logo-img" style={{height: '40px', marginRight: '10px'}} />
          <span>Amena's</span>
        </Link>
        <div className="nav-links">
          <Link to="/">⬅ Volver al Inicio</Link>
        </div>
      </nav>

      <header className="seccion-galeria" style={{ paddingTop: '30px', paddingBottom: '60px' }} data-aos="fade-up">
        <h1 className="titulo-seccion">Nuestro Portafolio</h1>
        <p className="subtitulo-galeria">
          Explora algunos de nuestros diseños personalizados. ¡Si ves algo que te gusta, dale clic para verlo a detalle!
        </p>

        <div className="filtros-galeria">
          <button className={filtro === 'Todos' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('Todos')}>Todos</button>
          <button className={filtro === 'pasteles' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('pasteles')}>Pasteles</button>
          <button className={filtro === 'galletas' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('galletas')}>Galletas</button>
          <button className={filtro === 'cupcakes' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('cupcakes')}>Cupcakes</button>
        </div>

        <div className="grid-galeria" style={{ marginTop: '40px' }}>
          {fotosFiltradas.map((foto, index) => (
            <img 
              key={foto.id} 
              src={foto.imagenUrl} 
              alt={foto.alt} 
              className="foto-galeria" 
              data-aos="zoom-in" 
              onClick={() => setFotoAmpliada(foto)} 
              loading="lazy"
            />
          ))}
        </div>
      </header>

      <a href={`https://wa.me/528442075351?text=${mensajeWhatsApp}`} className="whatsapp-btn" target="_blank" rel="noreferrer">
        <span>💬 Preguntar por WhatsApp</span>
      </a>

      {/* 👈 NUEVO: EL LIGHTBOX (Caja de luz flotante) */}
      {/* Esto solo aparece si "fotoAmpliada" tiene una foto guardada */}
      {fotoAmpliada && (
        <div className="lightbox-fondo" onClick={() => setFotoAmpliada(null)}>
          <span className="lightbox-cerrar">&times;</span>
          <img src={fotoAmpliada.imagenUrl} alt={fotoAmpliada.alt} className="lightbox-imagen-grande" />
        </div>
      )}

      <footer className="footer-sencillo">
        <div className="footer-logo-container" style={{ marginBottom: '25px' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="footer-logo" style={{ height: '90px', opacity: 0.9 }} />
        </div>
        <p className="copyright">© {new Date().getFullYear()} Amena's Pastelería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}