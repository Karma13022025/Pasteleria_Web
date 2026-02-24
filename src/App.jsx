import React, { useRef, useEffect } from 'react';
import './App.css';
import { pastelesDb } from './pasteles'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function App() {
  const carruselRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const moverIzq = () => carruselRef.current?.scrollBy({ left: -340, behavior: 'smooth' });
  const moverDer = () => carruselRef.current?.scrollBy({ left: 340, behavior: 'smooth' });

  // 👇 Mejora 1: Creamos un mensaje predeterminado para WhatsApp (codificado para URL)
  const mensajeWhatsApp = encodeURI("¡Hola Pastelería Ximena! Vi su página web y me gustaría pedir información sobre sus pasteles. 🍰");

  return (
    <div className="pagina-publica">
      <nav className="navbar">
        <div className="nav-logo">🍰 Pastelería Ximena</div>
        <div className="nav-links">
          <a href="#catalogo">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#testimonios">Reseñas</a>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-contenido" data-aos="zoom-in">
          <h1>Pastelería Ximena</h1>
          <p>Horneando momentos inolvidables con los mejores ingredientes.</p>
          <a href="#catalogo" className="btn-primario">Ver Catálogo</a>
        </div>
      </header>

      <main id="catalogo" className="contenedor-catalogo" data-aos="fade-up">
        <h2 className="titulo-seccion">Nuestras Especialidades</h2>
        <div className="carrusel-wrapper">
          <button className="flecha-carrusel izq" onClick={moverIzq}>❮</button>
          <div className="carrusel-pasteles" ref={carruselRef}>
            {pastelesDb.map((pastel) => (
              <div key={pastel.id} className="tarjeta-pastel">
                <img src={pastel.imagenUrl} alt={`Fotografía de pastel ${pastel.nombre}`} className="foto-pastel" />
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

      <section id="galeria" className="seccion-galeria" data-aos="fade-right">
        <h2 className="titulo-seccion">Trabajos Personalizados</h2>
        <div className="grid-galeria">
          {/* 👇 Mejora 3 y 4: Rutas corregidas (sin el punto) y con su texto "alt" para SEO */}
          <img src="/images/personalizado_1.webp" alt="Pastel personalizado temático" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=500" alt="Pastel decorado con flores" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500" alt="Pastel artesanal de cumpleaños" className="foto-galeria" />
        </div>
      </section>

      <section id="testimonios" className="seccion-testimonios" data-aos="fade-up">
        <h2 className="titulo-seccion">Lo que dicen nuestros clientes</h2>
        <div className="grid-testimonios">
          <div className="tarjeta-testimonio" data-aos="flip-left" data-aos-delay="200">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"El mejor pastel de Red Velvet que he probado."</p>
            <h4>- Mariana G.</h4>
          </div>
          <div className="tarjeta-testimonio" data-aos="flip-left" data-aos-delay="400">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"El pan súper esponjosito y húmedo."</p>
            <h4>- Carlos L.</h4>
          </div>
        </div>
      </section>

      {/* 👇 Mejora 1: Botón de WhatsApp con mensaje pre-cargado */}
      <a 
        href={`https://wa.me/528442075351?text=${mensajeWhatsApp}`} 
        className="whatsapp-btn" 
        target="_blank" 
        rel="noreferrer"
      >
        <span>💬 Preguntar por WhatsApp</span>
      </a>

      <footer className="footer-sencillo">
        <div className="redes-sociales">
          <a href="https://www.instagram.com/amenas_pasteleria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="icono-red">📸 Instagram</a>
        </div>
        {/* 👇 Mejora 2: El año ahora se calcula automáticamente */}
        <p>© {new Date().getFullYear()} Pastelería Ximena. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}