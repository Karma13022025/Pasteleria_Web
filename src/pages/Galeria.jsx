import React, { useState, useEffect } from 'react'; // 👈 Agregamos useState aquí
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { galeriaDb } from '../Galeria'; 

export default function Galeria() {
  // 👈 ESTO ES NUEVO: Aquí guardamos qué filtro eligió el cliente (por defecto es 'Todos')
  const [filtro, setFiltro] = useState('Todos');
  
  useEffect(() => {
    window.scrollTo(0, 0); 
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mensajeWhatsApp = encodeURI("¡Hola Amena's Pastelería! Vi una foto en su galería y me encantaría cotizar un pastel así. ✨");

  // 👈 ESTO ES NUEVO: La computadora decide qué fotos mostrar basada en el botón
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
          Explora algunos de nuestros diseños personalizados. ¡Si ves algo que te gusta, tómale captura y mándanos un WhatsApp!
        </p>

        {/* 👈 ESTO ES NUEVO: Tus botones de filtro */}
        <div className="filtros-galeria">
          <button className={filtro === 'Todos' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('Todos')}>Todos</button>
          <button className={filtro === 'pasteles' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('pasteles')}>Pasteles</button>
          <button className={filtro === 'galletas' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('galletas')}>Galletas</button>
          <button className={filtro === 'cupcakes' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('cupcakes')}>Cupcakes</button>
          <button className={filtro === 'brownies' ? 'btn-filtro activo' : 'btn-filtro'} onClick={() => setFiltro('brownies')}>Brownies</button>
        </div>

        {/* 👇 Fíjate cómo ahora usamos "fotosFiltradas" en lugar de "galeriaDb" */}
        <div className="grid-galeria" style={{ marginTop: '40px' }}>
          {fotosFiltradas.map((foto, index) => (
            <img 
              key={foto.id} 
              src={foto.imagenUrl} 
              alt={foto.alt} 
              className="foto-galeria" 
              data-aos="zoom-in" 
            />
          ))}
        </div>
      </header>

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