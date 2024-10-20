import './../assets/css/MenuPrinsipal.css';
import imagen from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

const MenuPrinsipal = () => {
  return (
    
    <>
      <section className="menu-prinsipal-flex">
        <img src={imagen} alt="logo" className="menu-prinsipal-logo" />
        <div className="menu-prinsipal-group-buttons">
        <Link to="/gestion-de-boletos">
            <button className="menu-pricipal-button">Gestión de boletos</button>
          </Link>
          <Link to="/registrar-funcion">
            <button className="menu-pricipal-button">Gestión de función</button>
          </Link>
          <Link to={"/Estadisticas"}> 
          <button className="menu-pricipal-button">Estadísticas</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MenuPrinsipal;
