import React from 'react';
import '../assets/css/ConfirmationScreen.css';

const ConfirmationScreen = ({ title, seats, time, total, codes, onBack, onConfirm }) => {
    return (
        <div className="confirmation-screen">
            <h2>FUNCIÓN</h2>
            <p>{title}</p>
            <h2>NUMEROS DE ASIENTOS</h2>
            <p>{seats.join(', ')}</p>
            <h2>HORARIO</h2>
            <p>{time}</p>
            <h2>TOTAL DE LA COMPRA</h2>
            <p>${total}</p>
            <h2>CODIGOS DE BOLETOS</h2>
            {codes.map((code, index) => (
                <p key={index}>{code}</p>
            ))}
            <div className="confirmation-buttons">
                <button className="button-cancelar" onClick={onBack}>Regresar</button>
                <button className="button-confirmar" onClick={onConfirm}>Confirmar</button>
            </div>
        </div>
    );
};

export default ConfirmationScreen;
