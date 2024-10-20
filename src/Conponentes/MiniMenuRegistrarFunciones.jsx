import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link para manejar la navegación
import '../assets/css/MiniMenu.css';

const MiniMenuRegistrarFunciones = () => {
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
                    <Link to="/registrar-funcion" className="menu-option">Registrar Funciones</Link>
                    <Link to="/cancelar-funcion" className="menu-option">Cancelar Funciones</Link>
                    <Link to="/funciones-registradas" className="menu-option">Funciones Registradas</Link>
                    <Link to="/" className="menu-option">Menu</Link>
                </div>
            )}
        </div>
    );
};

export default MiniMenuRegistrarFunciones;
