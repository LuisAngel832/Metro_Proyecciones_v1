import { useState, useEffect } from 'react'; 
import '../assets/css/Estadisticas.css';
import Header from '../Conponentes/header';
import MiniMenuEstadisticas from '../Conponentes/MiniMenuEstadisticas';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Estadisticas = () => {
    const [startDate, setStartDate] = useState(() => {
        // Cargar la fecha almacenada localmente si existe
        const storedDate = localStorage.getItem('selectedDate');
        return storedDate ? new Date(storedDate) : null;
    });
    const [showCalendar, setShowCalendar] = useState(false);
    const [filterByWeek, setFilterByWeek] = useState(false);
    const [selectedDay, setSelectedDay] = useState(() => {
        // Cargar el día seleccionado almacenado localmente si existe
        return localStorage.getItem('selectedDay') || 'Lunes';
    });
    const [activeCalendar, setActiveCalendar] = useState(null);

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
        setFilterByWeek(false); 
        setActiveCalendar(null);
    };

    const toggleFilterByWeek = () => {
        setFilterByWeek(!filterByWeek);
        setShowCalendar(false); 
        setActiveCalendar(null);
    };

    const handleDayChange = (direction) => {
        const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        let currentIndex = daysOfWeek.indexOf(selectedDay);
        if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + daysOfWeek.length) % daysOfWeek.length;
        } else {
            currentIndex = (currentIndex + 1) % daysOfWeek.length;
        }
        const newDay = daysOfWeek[currentIndex];
        setSelectedDay(newDay);
        localStorage.setItem('selectedDay', newDay); // Guardar el día seleccionado en localStorage
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        localStorage.setItem('selectedDate', date); // Guardar la fecha seleccionada en localStorage
    };

    const toggleWeekCalendar = (calendarId) => {
        if (activeCalendar === calendarId) {
            setActiveCalendar(null);
        } else {
            setActiveCalendar(calendarId);
            setShowCalendar(false); 
            setFilterByWeek(false); 
        }
    };

    return (
        <>
            <div className="header-container">
                <MiniMenuEstadisticas />
                <Header nombreTitulo={'Ultimas Dos Semanas'} />
            </div>
            <section className="estadisticas-contenedor">
                <div className="estadisticas-fechas">
                    <div className="fecha-item">
                        <p>INICIO DE DATOS</p>
                        <p>14/10/2024</p>
                    </div>
                    <div className="fecha-item">
                        <p>FIN DE DATOS</p>
                        <p>28/10/2024</p>
                    </div>
                    <div className="fecha-item">
                        <p>FECHA ACTUAL</p>
                        <p>25/10/2024</p>
                    </div>
                    <div className="botones-filtro">
                        <button className="filter-button" onClick={toggleCalendar}>Buscar Día</button>
                        <button className="filter-button" onClick={toggleFilterByWeek}>
                            {filterByWeek ? 'Filtrar por Día' : 'Filtrar por Semana'}
                        </button>
                    </div>
                </div>

                {showCalendar && (
                    <div className="datepicker-container">
                        <DatePicker 
                            selected={startDate} 
                            onChange={handleDateChange} 
                            inline 
                        />
                    </div>
                )}

                {filterByWeek && (
                    <div className="day-selector">
                        <button className="day-button" onClick={() => handleDayChange('prev')}>&lt;</button>
                        <span className="day-display">{selectedDay}</span>
                        <button className="day-button" onClick={() => handleDayChange('next')}>&gt;</button>
                    </div>
                )}

                <div className="estadisticas-datos">
                    <div className="estadisticas-column-izquierda">
                        <div className="estadistica-item">
                            <p>DINERO RECAUDADO</p>
                            <h2>$ 29,852.75</h2>
                        </div>
                        <div className="estadistica-item">
                            <p>ASIENTOS OFERTADOS</p>
                            <h2>2464</h2>
                        </div>
                        <div className="estadistica-item">
                            <p>ASIENTOS OCUPADOS</p>
                            <h2>1573</h2>
                        </div>
                        <div className="estadistica-item">
                            <p>NUMERO DE FUNCIONES IMPARTIDAS</p>
                            <h2>28</h2>
                        </div>
                    </div>

                    <div className="estadisticas-column-derecha">
                        <div className="estadisticas-semanas">
                            <button className="semana-button" onClick={() => toggleWeekCalendar('semana1')}>Semana 1</button>
                            <button className="semana-button" onClick={() => toggleWeekCalendar('semana2')}>Semana 2</button>
                        </div>
                        {activeCalendar && activeCalendar === 'semana1' && (
                            <div className="datepicker-container">
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={handleDateChange} 
                                    inline 
                                />
                            </div>
                        )}
                        {activeCalendar && activeCalendar === 'semana2' && (
                            <div className="datepicker-container">
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={handleDateChange} 
                                    inline 
                                />
                            </div>
                        )}
                        <div className="estadistica-item">
                            <p>PORCENTAJE DE ASISTENCIA</p>
                            <h2>95.50%</h2>
                        </div>
                        <div className="estadistica-item">
                            <p>FUNCION MAS POPULAR</p>
                            <h2>The Godfather</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Estadisticas;
