import { Link } from 'react-router-dom';
import '../assets/css/DatosHistoricos.css';
import Header from '../Conponentes/header';
import MiniMenuEstadisticas from '../Conponentes/MiniMenuEstadisticas';

const DatosHistoricos = () => {
    return (
        <>
            <div className="header-container">
                <MiniMenuEstadisticas />
                <Header nombreTitulo={'Datos Historicos'} />
                <Link to="/">
                    <button className="datos-historicos-menu-button">Menu</button> {/* Botón funcional agregado */}
                </Link>
            </div>
            <section className="datos-historicos-contenedor">
                <div className="datos-historicos-fechas">
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
                </div>

                <div className="datos-historicos-datos">
                    <div className="datos-item">
                        <p>DINERO RECAUDADO</p>
                        <h2>$ 2985452.75</h2>
                    </div>
                    <div className="datos-item">
                        <p>ASIENTOS OFERTADOS</p>
                        <h2>24642</h2>
                    </div>
                    <div className="datos-item">
                        <p>ASIENTOS OCUPADOS</p>
                        <h2>15723</h2>
                    </div>
                    <div className="datos-item">
                        <p>NUMERO DE FUNCIONES IMPARTIDAS</p>
                        <h2>282</h2>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DatosHistoricos;
