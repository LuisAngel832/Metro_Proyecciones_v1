import React from 'react';
import '../assets/css/SeatMap.css';
import movieNoSelectedSilla from '../assets/img/movieNoSelectecSilla.png';
import movieSelectedSilla from '../assets/img/movieSelectedSilla.png'; 
import pantalla from '../assets/img/pantalla.png';

const SeatMap = ({ selectedSeats, setSelectedSeats, seatCount }) => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const columns = Array.from({ length: 11 }, (_, i) => i + 1);

    const toggleSeatSelection = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else if (selectedSeats.length < seatCount) { // Limitar selección según seatCount
            setSelectedSeats([...selectedSeats, seat]);
        } else {
            alert('Has alcanzado el número máximo de asientos seleccionados');
        }
    };

    return (
        <div className="seat-map-container">
            <img src={pantalla} alt="Pantalla de la silla" className='pantalla'/>
            {rows.map((rowLabel) => (
                <div key={rowLabel} className="seat-row">
                    <div className="seat-row-label">{rowLabel}</div>
                    {columns.map((colNumber) => {
                        const seatId = `${rowLabel}${colNumber}`;
                        const isSelected = selectedSeats.includes(seatId);

                        return (
                            <img
                                key={seatId}
                                src={isSelected ? movieSelectedSilla : movieNoSelectedSilla}
                                alt={`Seat ${seatId}`}
                                className={`seat ${isSelected ? 'selected' : ''}`}
                                onClick={() => toggleSeatSelection(seatId)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default SeatMap;
