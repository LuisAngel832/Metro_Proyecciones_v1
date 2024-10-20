import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link para manejar la navegación
import '../assets/css/MiniMenu.css';

const MiniMenuEstadisticas = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mini-menu-container">
            <button className="menu-icon-large" onClick={toggleMenu}>
                &#9776; {/* Icono del menú estándar */}
            </button>
            {isOpen && (
                <div className="menu-options">
                    <Link to="/estadisticas" className="menu-option">ULTIMAS DOS SEMANAS</Link>
                    <Link to="/datos-historicos" className="menu-option">DATOS HISTORICOS</Link>
                    <Link to="/" className="menu-option">MENU</Link>
                </div>
            )}
        </div>
    );
};

export default MiniMenuEstadisticas;
