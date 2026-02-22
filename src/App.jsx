import React, { useRef } from 'react';
import './App.css';
import { pastelesDb } from './pasteles'; 

export default function App() {
  // 👇 1. Creamos el "control remoto" para el carrusel
  const carruselRef = useRef(null);

  // 👇 2. Funciones para mover el carrusel a la izquierda y derecha
  const moverIzq = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const moverDer = () => {
    if (carruselRef.current) {
      carruselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="pagina-publica">
      {/* 🧭 MENÚ DE NAVEGACIÓN FIJO */}
      <nav className="navbar">
        <div className="nav-logo">🍰 Pastelería Ximena</div>
        <div className="nav-links">
          <a href="#catalogo">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#testimonios">Reseñas</a>
        </div>
      </nav>
      <header className="hero-section">
        <div className="hero-contenido">
          <h1>Pastelería Ximena</h1>
          <p>Horneando momentos inolvidables con los mejores ingredientes.</p>
          <a href="#catalogo" className="btn-primario">Ver Catálogo</a>
        </div>
      </header>

      <main id="catalogo" className="contenedor-catalogo">
        <h2 className="titulo-seccion">Nuestras Especialidades</h2>
        
        {/* 👇 3. Envolvemos el carrusel para ponerle las flechas flotantes */}
        <div className="carrusel-wrapper">
          
          <button className="flecha-carrusel izq" onClick={moverIzq}>❮</button>
          
          <div className="carrusel-pasteles" ref={carruselRef}>
            {pastelesDb.map((pastel) => (
              <div key={pastel.id} className="tarjeta-pastel">
                <img src={pastel.imagenUrl} alt={pastel.nombre} className="foto-pastel" />
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

      {/* 🎨 SECCIÓN 2.5: GALERÍA DE TRABAJOS PERSONALIZADOS */}
      <section id="galeria" className="seccion-galeria">
        <h2 className="titulo-seccion">Trabajos Personalizados</h2>
        <p className="subtitulo-galeria">
          ¿Tienes una idea especial en mente? Nosotros la hacemos realidad. 
          ¡Mira algunos de nuestros diseños únicos!
        </p>
        
        <div className="grid-galeria">
          {/* Aquí pondrás las fotos de tus pasteles más creativos */}
          <img src="https://images.unsplash.com/photo-1562777717-cefc6691dcba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastel personalizado 1" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastel personalizado 2" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastel personalizado 3" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastel personalizado 4" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastel personalizado 5" className="foto-galeria" />
          <img src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Pastel personalizado 6" className="foto-galeria" />
        </div>
      </section>

      {/* ⭐ SECCIÓN 3: TESTIMONIOS */}
      <section id="testimonios" className="seccion-testimonios">
        <h2 className="titulo-seccion">Lo que dicen nuestros clientes</h2>
        
        <div className="grid-testimonios">
          <div className="tarjeta-testimonio">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"El mejor pastel de Red Velvet que he probado, el betún no empalaga nada. ¡Súper recomendada!"</p>
            <h4>- Mariana G.</h4>
          </div>
          
          <div className="tarjeta-testimonio">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"Pedí un pastel para el cumpleaños de mi mamá y quedó hermoso. El pan súper esponjosito y húmedo."</p>
            <h4>- Carlos L.</h4>
          </div>
          
          <div className="tarjeta-testimonio">
            <div className="estrellas">⭐⭐⭐⭐⭐</div>
            <p>"Excelente calidad y atención. Siempre superan mis expectativas con los detalles y el sabor."</p>
            <h4>- Sofía R.</h4>
          </div>
        </div>
      </section>

      <footer className="footer-sencillo">
        <div className="faq">
          <h3>Preguntas Frecuentes</h3>
          <p><strong>¿Cómo puedo hacer un pedido?</strong><br/>Todos los pedidos se realizan directamente en nuestra sucursal física para garantizar los detalles de tu diseño.</p>
          <p><strong>¿Con cuánto tiempo de anticipación debo pedir?</strong><br/>Recomendamos visitarnos con al menos 3 días de anticipación.</p>
        </div>
        {/* 📱 REDES SOCIALES */}
        <div className="redes-sociales">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icono-red">📸 Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icono-red">📘 Facebook</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="icono-red">🎵 TikTok</a>
        </div>
        <div className="copyright">
          <p>© 2026 Pastelería Ximena. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}