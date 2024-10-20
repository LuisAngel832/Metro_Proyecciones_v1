import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link para manejar la navegación
import ConfirmationScreen from './ConfirmationScreen';
import CancelTicketScreen from './CancelTicketScreen';
import '../assets/css/MiniMenu.css';

const MiniMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showCancelScreen, setShowCancelScreen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleVentaBoleto = () => {
        setIsOpen(false);
        setShowConfirmation(true);
    };

    const handleCancelarBoleto = () => {
        setIsOpen(false);
        setShowCancelScreen(true);
    };

    const handleBack = () => {
        setShowConfirmation(false);
        setShowCancelScreen(false);
    };

    const handleConfirm = () => {
        alert('Compra confirmada');
        setShowConfirmation(false);
    };

    const handleSearch = (ticketCode) => {
        alert(`Buscando el código de boleto: ${ticketCode}`);
        setShowCancelScreen(false);
    };

    return (
        <>
            <div className="mini-menu-container">
                <button className="menu-icon-large" onClick={toggleMenu}>
                    &#9776; {/* Ícono del menú estándar */}
                </button>
                {isOpen && (
                    <div className="menu-options">
                        <button className="menu-option" onClick={handleVentaBoleto}>Venta de Boleto</button>
                        <Link to="/cancelar-boleto"><button className="menu-option" >Cancelar Boleto</button></Link>
                        <Link to="/" className="menu-option">MENU</Link>
                    </div>
                )}
            </div>
            {showConfirmation && (
                <ConfirmationScreen
                    title="The Godfather"
                    seats={['F5', 'F6']}
                    time="10 AM"
                    total={180}
                    codes={['050505505', '050505505']}
                    onBack={handleBack}
                    onConfirm={handleConfirm}
                />
            )}
            {showCancelScreen && (
                <CancelTicketScreen
                    onBack={handleBack}
                    onSearch={handleSearch}
                />
            )}
        </>
    );
};

export default MiniMenu;

