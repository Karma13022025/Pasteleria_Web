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

  // Datos de reseñas de clientes
  const resenasDb = [
    {
      id: 1,
      nombre: "Ana Laura T.",
      texto: "¡El pastel de mi hijo quedó increíble! No solo el diseño de Cars estaba idéntico a lo que pedí, sino que el pan de chocolate estaba súper suavecito. Súper recomendados.",
      estrellas: "⭐⭐⭐⭐⭐"
    },
    {
      id: 2,
      nombre: "Carlos M.",
      texto: "Pedimos una caja de cupcakes personalizados para un aniversario y superaron nuestras expectativas. La presentación impecable y el betún de queso crema es el mejor que he probado.",
      estrellas: "⭐⭐⭐⭐⭐"
    },
    {
      id: 3,
      nombre: "Valeria G.",
      texto: "Excelente servicio desde la cotización hasta la entrega. El pastel de bodas quedó hermoso, súper elegante y todos los invitados nos preguntaron de dónde era.",
      estrellas: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="pagina-publica">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="logo-img" style={{ height: '40px', marginRight: '10px' }} />
          <span>Amena's</span>
        </Link>
        <div className="nav-links">
          <a href="#catalogo">Menú</a>
          <Link to="/galeria">Galería</Link>
          <a href="#resenas">Reseñas</a>
        </div>
      </nav>

      {/* --- PORTADA --- */}
      <header className="hero-section">
        <div className="hero-contenido" data-aos="zoom-in" style={{ marginTop: '-80px' }}>
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
                <img src={pastel.imagenUrl} alt={`Pastel ${pastel.nombre}`} className="foto-pastel" loading="lazy" />
                <div className="info-pastel">
                  <h3>{pastel.nombre}</h3>
                  <p className="desc">{pastel.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="flecha-carrusel der" onClick={moverDer}>❯</button>
        </div>
      </main>

      {/* --- SECCIÓN COTIZAR (MINIMALISTA) --- */}
      <section className="seccion-cotizar-minimalista" data-aos="fade-up">
        <hr className="linea-divisora" />

        <h2 className="titulo-minimalista-cotizar">¿Tienes un diseño único en mente?</h2>
        <p className="texto-minimalista-cotizar">Nosotros horneamos tus sueños. Personaliza el tamaño, sabor y diseño de tu pastel ideal.</p>

        <Link to="/cotizar" className="btn-primario" style={{ marginTop: '10px', padding: '15px 35px' }}>
          ✨ Crear pedido personalizado
        </Link>

        <hr className="linea-divisora-inferior" />
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
          <img src="/images/Personalizados/Pastel_vaca.webp" alt="Pastel personalizado temático animales" className="foto-galeria" loading="lazy" />
          <img src="/images/Personalizados/CupcakesMD.webp" alt="Cupcakes dia de las madres" className="foto-galeria" loading="lazy" />
          <img src="/images/Personalizados/beisbol.webp" alt="Pastel personalizado beisbol" className="foto-galeria" loading="lazy" />
        </div>
        {/* 👇 Botón que los manda a la pantalla de galería completa */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/Galeria" className="btn-primario">Ver más diseños</Link>
        </div>
      </section>

      {/* --- SECCIÓN DE RESEÑAS (NUEVO) --- */}
      <section className="seccion-resenas" id="resenas" data-aos="fade-up">
        <h2 className="titulo-seccion">Lo que dicen nuestros clientes</h2>

        <div className="contenedor-tarjetas">
          {resenasDb.map((resena) => (
            <div key={resena.id} className="tarjeta-resena" data-aos="flip-up">
              <div className="estrellas-resena">{resena.estrellas}</div>
              <p className="texto-resena">"{resena.texto}"</p>
              <p className="autor-resena">- {resena.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHATSAPP & FOOTER --- */}
      <a href={`https://wa.me/528442075351?text=${mensajeWhatsApp}`} className="whatsapp-btn" target="_blank" rel="noreferrer">
        <span>💬 Preguntar por WhatsApp</span>
      </a>

      {/* --- FOOTER DOS COLUMNAS --- */}
      <footer className="footer-sencillo">
        <div className="footer-contenido">

          {/* Columna Izquierda: Logo y Redes */}
          <div className="footer-izq">
            <div className="footer-logo-container">
              <img src="/images/Logo/Logo.png" alt="Logo Amena's Pastelería" className="footer-logo" style={{ height: '80px', opacity: 0.9 }} />
            </div>
            <div className="redes-sociales">
              <a href="https://www.instagram.com/amenas_pasteleria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="icono-red">📸 Instagram</a>
            </div>
            <p className="copyright">© {new Date().getFullYear()} Amena's Pastelería. Todos los derechos reservados.</p>
          </div>

          {/* Columna Derecha: Mapa Próximamente */}
          <div className="footer-der">
            <div className="mapa-cuadrado" data-aos="fade-in">
              <div className="mapa-overlay">
                <span className="icono-pin">📍</span>
                <p>Próximamente en<br /><strong> Saltillo </strong></p>
              </div>
              {/* Mapa real de fondo, en blanco y negro */}
              <iframe
                title="Ubicación Ramos Arizpe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86016668749!2d-101.0336214!3d25.5411786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868813374b5c7f89%3A0x868ad1e888636f!2sRamos%20Arizpe%2C%20Coah.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) opacity(0.5)' }}
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}