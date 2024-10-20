import '../assets/css/RegistrarFuncion.css'
import Header from '../Conponentes/header'
import MiniMenu from '../Conponentes/MiniMenu'


const CancelarBoleto = () => {
    return (
        <>
        <MiniMenu />
        <Header nombreTitulo={'Cancelar Boleto'} />
        <section className=' cancelar-funcion-box box-contenido'>
            <form className='cancelar-funcion-contenido main-contenido'>
                <fieldset className='registro-funcion-form-nombre'>
                    <label htmlFor="codigoFuncion" >Codigo de Boleto</label>
                    <input id="codigoFuncion" type="text" className='input-text cancelar-funcion-codigo' placeholder='Ingresa el codigo del boleto'/>
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

export default CancelarBoleto