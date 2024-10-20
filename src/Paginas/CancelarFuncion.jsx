import '../assets/css/RegistrarFuncion.css'
import Header from '../Conponentes/header'
import MiniMenuRegistrarFunciones from '../Conponentes/MiniMenuRegistrarFunciones'

const CancelarFuncion = () => {
    return (
        <>
        <MiniMenuRegistrarFunciones />
        <Header nombreTitulo={'Cancelar Función'} />
        <section className=' cancelar-funcion-box box-contenido'>
            <form className='cancelar-funcion-contenido main-contenido'>
                <fieldset className='registro-funcion-form-nombre'>
                    <label htmlFor="codigoFuncion" >Codigo de funcion</label>
                    <input id="codigoFuncion" type="text" className='input-text cancelar-funcion-codigo' placeholder='105150505050505'/>
                </fieldset>
                
                
            </form>
            <div className='cancelar-funcion-botones'>
                <button  className='button-cancelar cancelar-funcion-cancelar'>Cancelar</button>
                <button className='button-confirmar'>Buscar</button>
            </div>
            
        </section>
        
        </>
    )
}

export default CancelarFuncion