import React, { useState } from 'react';
import '../assets/css/CancelTicketScreen.css';

const CancelTicketScreen = ({ onBack, onSearch }) => {
    const [ticketCode, setTicketCode] = useState('');
    const [showTicketDetails, setShowTicketDetails] = useState(false);

    const handleSearchClick = () => {
        
        if (ticketCode.trim() === '050505505') { 
            setShowTicketDetails(true);
        } else {
            alert('Código de boleto no encontrado');
        }
    };

    return (
        <>
            {!showTicketDetails ? (
                <div className="cancel-ticket-container">
                    <h2>Cancelar Boleto</h2>
                    <input
                        type="text"
                        placeholder="Ingrese el código de boleto"
                        value={ticketCode}
                        onChange={(e) => setTicketCode(e.target.value)}
                        className="ticket-code-input"
                    />
                    <div className="action-buttons">
                        <button onClick={onBack} className="back-button">Regresar</button>
                        <button onClick={handleSearchClick} className="search-button">Buscar</button>
                    </div>
                </div>
            ) : (
                <div className="ticket-details-container">
                    <h2>Función</h2>
                    <p>The Godfather</p>
                    <h3>Números de Asientos</h3>
                    <p>F6, F5</p>
                    <h3>Horario</h3>
                    <p>10:00 AM</p>
                    <h3>Total de la Compra</h3>
                    <p>90</p>
                    <div className="action-buttons">
                        <button onClick={onBack} className="back-button">Regresar</button>
                        <button className="cancel-button">Cancelar Boleto</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CancelTicketScreen;
