import '../assets/css/Gestiondeboletos.css';
import { useState, useEffect } from 'react';
import Header from '../Conponentes/header';
import MiniMenu from '../Conponentes/MiniMenu';
import ShowList from '../Conponentes/ShowList';
import SeatMap from '../Conponentes/SeatMap';
import ActionButtons from '../Conponentes/ActionButtons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const Gestiondeboletos = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [seatCount, setSeatCount] = useState(1); // Empieza con 1 asiento
    const [selectedSeats, setSelectedSeats] = useState([]); 
    const [shows, setShows] = useState([]); // Funciones cargadas desde la API
    const [filteredShows, setFilteredShows] = useState([]); // Funciones filtradas
    const [searchQuery, setSearchQuery] = useState(''); // Búsqueda por título
    const [selectedDate, setSelectedDate] = useState(null); // Fecha seleccionada
    const [funciones, setFunciones] = useState([])

    useEffect(() => {
        axios
          .get('http://127.0.0.1:8080/api/funciones/todas')
          .then(response => {
            setFunciones(response.data);
            console.log(response.data);
          })
          .catch(err => {
            console.error('Error al obtener las funciones: ', err);
          });
      }, []);

    // Cargar las funciones desde la API al montar el componente
    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8080/api/funciones/todas');
                setShows(response.data);
                setFilteredShows(response.data); // Inicialmente muestra todas
            } catch (error) {
                console.error('Error al cargar las funciones:', error);
            }
        };
        fetchShows();
    }, []);

    // Filtrar funciones cada vez que cambien el título o la fecha
    useEffect(() => {
        const filterShows = () => {
            let filtered = shows;

            if (searchQuery) {
                filtered = filtered.filter(show =>
                    show.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            if (selectedDate) {
                const formattedDate = selectedDate.toLocaleDateString('en-GB'); // Formato: dd-mm-yyyy
                filtered = filtered.filter(show => show.date === formattedDate);
            }

            setFilteredShows(filtered);
        };
        filterShows();
    }, [searchQuery, selectedDate, shows]);

    const toggleSearchBar = () => setShowSearchBar(!showSearchBar);
    const toggleCalendar = () => setShowCalendar(!showCalendar);

    const handleSeatCountChange = (delta) => {
        const newCount = Math.max(1, seatCount + delta); // No menos de 1
        setSeatCount(newCount);

        if (selectedSeats.length > newCount) {
            setSelectedSeats(selectedSeats.slice(0, newCount)); // Ajustar asientos seleccionados
        }
    };

    return (
        <>
            <div className="header-container">
                <MiniMenu />
                <Header nombreTitulo={'Venta de Boletos'} />
            </div>
            <section className='gestion-boletos'>
                <div className='gestion-boletos-contenido'>
                    {/* Cartelera y búsqueda */}
                    <div className="gestion-boletos-showlist">
                        <div className="showlist-filters">
                            <button className="filter-button" onClick={toggleSearchBar}>Buscar Título</button>
                            <button className="filter-button" onClick={toggleCalendar}>Buscar Fecha</button>
                        </div>
                        {showSearchBar && (
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Ingrese el título..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        )}
                        {showCalendar && (
                            <div className="datepicker-container">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    inline
                                />
                            </div>
                        )}
                        <ShowList 
                            shows={filteredShows} 
                            selectedShow={null} 
                            setSelectedShow={() => {}} 
                        />
                    </div>

                    {/* Selección de asientos */}
                    <div className="gestion-boletos-seat-selection-container">
                        <div className="seat-selection-info">
                            <div className="seat-selection-header">
                                <h2>Número de Asientos: {seatCount}</h2>
                                <h2 style={{ marginLeft: 'auto' }}>Precio del Boleto: $0.00</h2>
                            </div>
                            <div className='seat-controls'>
                                <button onClick={() => handleSeatCountChange(-1)}>-</button>
                                <button onClick={() => handleSeatCountChange(1)}>+</button>
                            </div>
                            <SeatMap 
                                selectedSeats={selectedSeats} 
                                setSelectedSeats={setSelectedSeats} 
                                seatCount={seatCount} 
                            />
                        </div>
                    </div>
                </div>
                <ActionButtons onNext={() => alert('Siguiente')} />
            </section>
        </>
    );
};

export default Gestiondeboletos;
