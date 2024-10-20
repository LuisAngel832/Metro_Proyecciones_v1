import './../assets/css/header.css';

// eslint-disable-next-line react/prop-types
const Header = ({ nombreTitulo }) => {
    return (
        <>
            <section className='header'> 
                {/* Eliminamos el botón de menú para que las líneas grandes desaparezcan */}
                <h1 className='h1'>{nombreTitulo}</h1>
            </section>
        </>
    );
}

export default Header;
