import React from 'react';
import '../assets/css/ConfirmationScreen.css';

const ConfirmationScreen = ({ title, seats, time, total, codes, onBack, onConfirm }) => {
    return (
        <div className="confirmation-screen">
            <h2 className="confirmation-title">FUNCIÓN</h2>
            <p className="confirmation-detail">{title}</p>

            <h2 className="confirmation-title">NÚMEROS DE ASIENTOS</h2>
            <p className="confirmation-detail">{seats.join(', ')}</p>

            <h2 className="confirmation-title">HORARIO</h2>
            <p className="confirmation-detail">{time}</p>

            <h2 className="confirmation-title">TOTAL DE LA COMPRA</h2>
            <p className="confirmation-detail">${total}</p>

            <h2 className="confirmation-title">CÓDIGOS DE BOLETOS</h2>
            {codes.map((code, index) => (
                <p key={index} className="confirmation-detail">{code}</p>
            ))}

            <div className="confirmation-buttons">
                <button className="back-button" onClick={onBack}>Regresar</button>
                <button className="confirm-button" onClick={onConfirm}>Confirmar</button>
            </div>
        </div>
    );
};

export default ConfirmationScreen;
