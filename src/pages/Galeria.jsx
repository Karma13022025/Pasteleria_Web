import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { galeriaDb } from '../Galeria'; // 👈 Importamos tu nueva base de datos

export default function Galeria() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mensajeWhatsApp = encodeURI("¡Hola Amena's Pastelería! Vi una foto en su galería y me encantaría cotizar un pastel así. ✨");

  return (
    <div className="pagina-publica">
      {/* --- NAVBAR DE NAVEGACIÓN --- */}
      <nav className="navbar">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="logo-img" style={{height: '40px', marginRight: '10px'}} />
          <span>Amena's</span>
        </Link>
        <div className="nav-links">
          <Link to="/">⬅ Volver al Inicio</Link>
        </div>
      </nav>

      {/* --- ENCABEZADO DE GALERÍA --- */}
      <header className="seccion-galeria" style={{ paddingTop: '50px', paddingBottom: '60px' }} data-aos="fade-up">
        <h1 className="titulo-seccion">Nuestro Portafolio</h1>
        <p className="subtitulo-galeria">
          Explora algunos de nuestros diseños personalizados. Cada pastel es único y horneado especialmente para ti. Si ves algo que te gusta, ¡tómale captura y mándanos un WhatsApp!
        </p>

        {/* --- LA MAGIA: CUADRÍCULA AUTOMÁTICA --- */}
        <div className="grid-galeria" style={{ marginTop: '50px' }}>
          {galeriaDb.map((foto, index) => (
            <img 
              key={foto.id} 
              src={foto.imagenUrl} 
              alt={foto.alt} 
              className="foto-galeria" 
              data-aos="zoom-in" 
              /* 👇 Truco Pro: Hace que las fotos vayan apareciendo en cascada, una por una */
              data-aos-delay={(index % 6) * 100} 
            />
          ))}
        </div>
      </header>

      {/* --- WHATSAPP & FOOTER COMPARTIDO --- */}
      <a href={`https://wa.me/528442075351?text=${mensajeWhatsApp}`} className="whatsapp-btn" target="_blank" rel="noreferrer">
        <span>💬 Preguntar por WhatsApp</span>
      </a>

      <footer className="footer-sencillo">
        <div className="footer-logo-container" style={{ marginBottom: '25px' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="footer-logo" style={{ height: '90px', opacity: 0.9 }} />
        </div>
        <p className="copyright">© {new Date().getFullYear()} Amena's Pastelería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}