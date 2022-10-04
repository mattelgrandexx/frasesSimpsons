import {Container} from 'react-bootstrap';

const Homero = ({propPersonaje}) => {
    return (
        <>
        <Container className='fondoBlanco'>
            <div className='flexible'>
                <div>
                    <img className='tamañoImagen' src={propPersonaje.image} alt={propPersonaje.character} />
                </div>
                <div className='anchoDiv'>
                    <h3>{propPersonaje.character}</h3>
                    <p>{propPersonaje.quote}</p>
              </div>
               </div>
            </Container>
        </>
    );
};

export default Homero;