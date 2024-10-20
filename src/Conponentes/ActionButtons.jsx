import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/ActionButtons.css';

const ActionButtons = ({ onNext }) => {
    return (
        <div className="action-buttons-container">
            <Link to="/" className="button-cancelar">CANCELAR</Link>
            <button className="button-confirmar" onClick={onNext}>SIGUIENTE</button>
        </div>
    );
};

export default ActionButtons;
