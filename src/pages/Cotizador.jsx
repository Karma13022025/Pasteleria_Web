import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cotizador() {
    useEffect(() => {
        window.scrollTo(0, 0); // Sube al inicio al cargar
    }, []);

    // Memoria del formulario
    const [producto, setProducto] = useState('Pastel');
    const [tamano, setTamano] = useState('Chico (10 a 15 personas)');
    const [saborPan, setSaborPan] = useState('Vainilla');
    const [saborBetun, setSaborBetun] = useState('Chantilly');
    const [cantidad, setCantidad] = useState('');
    const [fecha, setFecha] = useState('');
    const [idea, setIdea] = useState('');

    // Función que arma el mensaje y abre WhatsApp
    // Función que arma el mensaje y abre WhatsApp
    const armarPedido = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        let mensaje = `¡Hola Amena's Pastelería! 🎂 Me gustaría cotizar un pedido:\n\n`;
        mensaje += `📌 *Producto:* ${producto}\n`;

        if (producto === 'Pastel') {
            mensaje += `📏 *Tamaño:* ${tamano}\n`;
            mensaje += `🍞 *Pan:* ${saborPan}\n`;
            mensaje += `🧁 *Betún:* ${saborBetun}\n`;
        } else {
            mensaje += `🔢 *Cantidad:* ${cantidad}\n`;
        }

        mensaje += `📅 *Para el día:* ${fecha}\n`;
        mensaje += `✨ *Idea/Temática:* ${idea}\n\n`;
        mensaje += `👉 (Ahorita te mando mi foto de inspiración por aquí)`;

        // Creamos el link seguro para WhatsApp
        const url = `https://api.whatsapp.com/send?phone=528442075351&text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="pagina-publica" style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
            {/* NAVBAR */}
            <nav className="navbar">
                <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                    <img src="/images/Logo/Logo.png" alt="Logo" className="logo-img" style={{ height: '40px', marginRight: '10px' }} />
                    <span>Amena's</span>
                </Link>
                <div className="nav-links"><Link to="/">⬅ Volver</Link></div>
            </nav>

            {/* FORMULARIO */}
            <div className="contenedor-cotizador">
                <h1 className="titulo-seccion">Arma tu Pedido ✨</h1>
                <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                    Llena los detalles y te enviaremos una cotización por WhatsApp sin compromiso.
                </p>

                <form onSubmit={armarPedido} className="formulario-pastel">

                    <div className="grupo-input">
                        <label>1. ¿Qué se te antoja?</label>
                        <select value={producto} onChange={(e) => setProducto(e.target.value)} required>
                            <option value="Pastel">Pastel Personalizado</option>
                            <option value="Cupcakes">Cupcakes</option>
                            <option value="Galletas">Galletas Decoradas</option>
                            <option value="Brownies o Pays">Brownies / Pays</option>
                        </select>
                    </div>

                    {/* MAGIA: Estos campos solo aparecen si eligen "Pastel" */}
                    {producto === 'Pastel' ? (
                        <>
                            <div className="grupo-input">
                                <label>2. Tamaño / Porciones</label>
                                <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
                                    <option value="Chico ( 5 personas)">Chico (5 personas)</option>
                                    <option value="Mediano (10 - 12 personas)">Mediano (10 - 12 personas)</option>
                                    <option value="Grande (25 a 30 personas)">Grande (25 a 30 personas)</option>
                                </select>
                            </div>
                            <div className="grupo-input">
                                <label>3. Sabor del Pan</label>
                                <select value={saborPan} onChange={(e) => setSaborPan(e.target.value)}>
                                    <option value="Vainilla">Vainilla</option>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Red Velvet">Red Velvet</option>
                                    <option value="Zanahoria">Zanahoria</option>
                                </select>
                            </div>
                            <div className="grupo-input">
                                <label>4. Sabor del Betún</label>
                                <select value={saborBetun} onChange={(e) => setSaborBetun(e.target.value)}>
                                    <option value="Chantilly">Chantilly</option>
                                    <option value="Mantequilla">Mantequilla (Buttercream)</option>
                                    <option value="Chocolate">Chocolate</option>
                                    <option value="Philadelphia">Philadelphia (Queso Crema)</option>
                                </select>
                                {saborBetun === 'Philadelphia' && (
                                    <p className="advertencia-betun">
                                        ⚠️ <strong>Nota:</strong> Por su textura artesanal y suave, este betún se recomienda para diseños sencillos o rústicos. Si tu diseño es muy complejo, te asesoraremos para elegir la mejor opción.
                                    </p>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="grupo-input">
                            <label>2. ¿Cuántas piezas necesitas?</label>
                            <input type="text" placeholder="Ej. 12 cupcakes, 2 docenas..." value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
                        </div>
                    )}

                    <div className="grupo-input">
                        <label>¿Para cuándo lo necesitas?</label>
                        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                        <small style={{ color: '#d81b60', display: 'block', marginTop: '5px' }}>*Sujeto a disponibilidad de agenda (3 a 5 días de anticipación ideal).</small>
                    </div>

                    <div className="grupo-input">
                        <label>Cuéntanos tu idea 🎨</label>
                        <textarea
                            rows="3"
                            placeholder="Ej. Es para un cumpleaños infantil temática Batman, con detalles en azul..."
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn-primario" style={{ width: '100%', fontSize: '1.1rem' }}>
                        📲 Enviar a WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
}