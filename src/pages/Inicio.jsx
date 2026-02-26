import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { especialidadesDb } from '../Especialidades.js'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Inicio() {
  const carruselRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const moverIzq = () => carruselRef.current?.scrollBy({ left: -340, behavior: 'smooth' });
  const moverDer = () => carruselRef.current?.scrollBy({ left: 340, behavior: 'smooth' });

  const mensajeWhatsApp = encodeURI("¡Hola Amena's Pastelería! Vi su página web y me gustaría pedir información. 🍰");

  return (
    <div className="pagina-publica">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="logo-img" style={{height: '40px', marginRight: '10px'}} />
          <span>Amena's</span>
        </Link>
        <div className="nav-links">
          <a href="#catalogo">Menú</a>
          <Link to="/galeria">Galería</Link> 
          <a href="#testimonios">Reseñas</a>
        </div>
      </nav>

      {/* --- PORTADA --- */}
      <header className="hero-section">
        <div className="hero-contenido" data-aos="zoom-in" style={{marginTop: '-80px'}}>
          <h1>Amena's Pastelería</h1>
          <p>Horneando momentos inolvidables con los mejores ingredientes.</p>
          <Link to="/cotizar" className="btn-primario btn-latido">✨ Armar mi pastel</Link>
          
        </div>
        <div className="ola-decorativa">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relleno-ola"></path>
          </svg>
        </div>
      </header>

      {/* --- MENÚ PRINCIPAL --- */}
      <main id="catalogo" className="contenedor-catalogo" data-aos="fade-up">
        <h2 className="titulo-seccion">Nuestras Especialidades</h2>
        <div className="carrusel-wrapper">
          <button className="flecha-carrusel izq" onClick={moverIzq}>❮</button>
          <div className="carrusel-pasteles" ref={carruselRef}>
            {especialidadesDb.map((pastel) => (
              <div key={pastel.id} className="tarjeta-pastel">
                <img src={pastel.imagenUrl} alt={`Pastel ${pastel.nombre}`} className="foto-pastel" />
                <div className="info-pastel">
                  <h3>{pastel.nombre}</h3>
                  <p className="desc">{pastel.descripcion}</p>
                  <p className="porciones">👥 {pastel.porciones}</p>
                  <div className="precio-fila">
                    <span className="precio">${pastel.precio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="flecha-carrusel der" onClick={moverDer}>❯</button>
        </div>
      </main>

      {/* --- BANNER COTIZADOR --- */}
      <section className="banner-cotizador" data-aos="fade-up">
        <h2>¿Tienes un diseño único en mente? 💡</h2>
        <p>Nosotros horneamos tus sueños. Personaliza el tamaño, sabor y diseño de tu pastel ideal.</p>
        <Link to="/cotizar" className="btn-banner">Crear pedido personalizado</Link>
      </section>

      {/* --- CÓMO PEDIR --- */}
      <section className="seccion-pasos" data-aos="fade-up">
        <h2 className="titulo-seccion">¿Cómo hacer tu pedido?</h2>
        <div className="grid-pasos">
          <div className="tarjeta-paso" data-aos="zoom-in" data-aos-delay="100">
            <div className="icono-paso">🎂</div>
            <h3>1. Elige tu diseño</h3>
            <p>Revisa nuestro menú o la galería para inspirarte con tu idea.</p>
          </div>
          <div className="tarjeta-paso" data-aos="zoom-in" data-aos-delay="200">
            <div className="icono-paso">💬</div>
            <h3>2. Escríbenos</h3>
            <p>Contáctanos por WhatsApp para afinar detalles y confirmar.</p>
          </div>
          <div className="tarjeta-paso" data-aos="zoom-in" data-aos-delay="300">
            <div className="icono-paso">📍</div>
            <h3>3. Recoge y disfruta</h3>
            <p>Pasa por tu pastel a nuestra sucursal. ¡Listo para sorprender!</p>
          </div>
        </div>
      </section>

      {/* --- TRABAJOS PERSONALIZADOS (REGRESÓ AL INICIO) --- */}
      <section className="seccion-galeria" data-aos="fade-up" style={{ paddingBottom: '40px' }}>
        <h2 className="titulo-seccion">Trabajos Personalizados</h2>
        <div className="grid-galeria">
          <img src="/images/Personalizados/Pastel_vaca.webp" alt="Pastel personalizado temático animales" className="foto-galeria" />
          <img src="/images/Personalizados/CupcakesMD.webp" alt="Cupcakes dia de las madres" className="foto-galeria" />
          <img src="/images/Personalizados/beisbol.webp" alt="Pastel personalizado beisbol" className="foto-galeria" />
        </div>
        {/* 👇 Botón que los manda a la pantalla de galería completa */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/galeria" className="btn-primario">Ver más diseños</Link>
        </div>
      </section>

      {/* --- TESTIMONIOS --- */}
      <section id="testimonios" className="seccion-testimonios" data-aos="fade-up">
        <h2 className="titulo-seccion">Lo que dicen nuestros clientes</h2>
        <div className="grid-testimonios">
          <div className="tarjeta-testimonio">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"El mejor pastel de Red Velvet que he probado."</p>
            <h4>- Mariana G.</h4>
          </div>
          <div className="tarjeta-testimonio">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"El pan súper esponjosito y húmedo."</p>
            <h4>- Carlos L.</h4>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP & FOOTER --- */}
      <a href={`https://wa.me/528442075351?text=${mensajeWhatsApp}`} className="whatsapp-btn" target="_blank" rel="noreferrer">
        <span>💬 Preguntar por WhatsApp</span>
      </a>

      <footer className="footer-sencillo">
        <div className="footer-logo-container" style={{ marginBottom: '25px' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="footer-logo" style={{ height: '90px', opacity: 0.9 }} />
        </div>
        <div className="redes-sociales">
          <a href="https://www.instagram.com/amenas_pasteleria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="icono-red">📸 Instagram</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Amena's Pastelería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}