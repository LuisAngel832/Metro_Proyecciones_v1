import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MenuPrinsipal from '../Paginas/MenuPrinsipal';
import RegistrarFuncion from '../Paginas/RegistrarFuncion';
import Gestiondeboletos from '../Paginas/Gestiondeboletos';
import Estadisticas from '../Paginas/Estadisticas';
import DatosHistoricos from '../Paginas/DatosHistoricos';
import FuncionesRegistradas from '../Paginas/FuncionesRegistradas';
import CancelarFuncion from '../Paginas/CancelarFuncion';
import CancelarBoleto from '../Paginas/CancelarBoleto';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPrinsipal/>} />
        <Route path="/registrar-funcion" element={<RegistrarFuncion/>} />
        <Route path="/gestion-de-boletos" element={<Gestiondeboletos/>} />
        <Route path="/Estadisticas" element={<Estadisticas/>}/>
        <Route path="/Datos-Historicos" element={<DatosHistoricos/>}/>
        <Route path="/funciones-registradas" element={<FuncionesRegistradas/>}/>
        <Route path="/cancelar-funcion" element={<CancelarFuncion/>}/>
        <Route path="/cancelar-boleto" element={<CancelarBoleto/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
