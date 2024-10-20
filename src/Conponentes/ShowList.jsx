import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/ShowList.css'; // Asegúrate de definir los estilos necesarios

const ShowList = ({ setSelectedShow }) => {
    const [shows, setShows] = useState([]);

    // Llamada a la API al montar el componente
    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/api/funciones/todas');
                setShows(response.data);
            } catch (error) {
                console.error('Error al obtener las funciones:', error);
            }
        };

        fetchShows();
    }, []);

    return (
        <div className="show-list-container">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>FECHA Y HORA</th>
                        <th>LUGARES DISPONIBLES</th>
                    </tr>
                </thead>
                <tbody>
                    {shows.map((show, index) => (
                        <tr key={index} onClick={() => setSelectedShow(show)}>
                            <td>{show.title}</td>
                            <td>{`${show.date} ${show.time}`}</td>
                            <td>{show.availableSeats}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowList;
