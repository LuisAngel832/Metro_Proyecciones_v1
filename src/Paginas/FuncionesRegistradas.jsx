import React, { useState } from 'react';
import './../assets/css/FuncionesRegistradas.css'; 
import Header from '../Conponentes/header'
import Icon from '../Conponentes/icon'
import {faAmbulance, faMagnifyingGlass }from '@fortawesome/free-solid-svg-icons'
import MiniMenuRegistrarFunciones from '../Conponentes//MiniMenuRegistrarFunciones'
import RegistrarFuncionDetalles from '../Conponentes/CreacionDeFunciones/FuncionesRegistradasDetalles'

const FuncionesRegistradas = () => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const mostrarDetallesFuncion = () => {
    setMostrarDetalles(!mostrarDetalles);
  };
 
  const cancelarMostrarDetalles = () => {
    setMostrarDetalles(false);
  };

  const RenglonFuncion = ({nombreFuncion,boletosVendidos, dineroRecuadado, porcentajeOcupacion, estado}) =>{
    return(
      <>
      <tr>
        <td><div className='tabla-detalles-id' ><button onClick={mostrarDetallesFuncion} class="btn">DETALLES</button> {nombreFuncion} <br/>050240256</div></td>
        <td>{boletosVendidos}</td>
        <td>{dineroRecuadado}</td>
        <td>{porcentajeOcupacion}</td>
        <td>{estado}</td>
      </tr>
      </>
    )
  }

  return (
    <>
      <MiniMenuRegistrarFunciones />
      <Header nombreTitulo={'Funciones Registradas'} />
      <section className="busqueda">
        <div> <span className='icon'><Icon icon={faMagnifyingGlass}/> </span><input className="titulo" type="text" placeholder='TITULO' /></div>
         
        <input type="date" placeholder='fecha' />
      </section>
      <div className="table-container">
        <h1>FUNCIONES REGISTRADAS</h1>
        <table>
            <thead>
                <tr className='tabla-cabecera'>
                    <th>TÍTULO Y ID</th>
                    <th>BOLETOS VENDIDOS</th>
                    <th>DINERO RECAUDADO</th>
                    <th>PORCENTAJE DE OCUPACIÓN</th>
                    <th>ESTADO</th>
                </tr>
            </thead>
            <tbody>
                
               
      
            </tbody>
        </table>
    </div>
    <section>
      {mostrarDetalles ?
       <RegistrarFuncionDetalles
       nombreFuncion={"la mancha"}
       costoBoleto={20}
       Horario={"12:00"}
       
       DuracionF={120}
       FechaF={"12/12/2022"}
       codigoFuncion={123123}
       handleClickConfirmacion={handleClickConfirmacion}
       handleClickCancelar={cancelarMostrarDetalles}
       /> : <></>}
    </section>
    </>
  );
};

export default FuncionesRegistradas;
