import theSimpson from "./img/theSimpson.png"
import { Button, Container } from 'react-bootstrap';
import consultarApi from "./App"

const LogoSimpsons = ({consultarApi}) => {
    return (
        <Container className='centrar'>
        <div className='container'>
              <img className='tamañoImagen' src={theSimpson} alt="Logo de los Simpsons" />
            </div>
            <Button type="button" variant="warning" onClick={consultarApi}>Obtener Frase</Button>
            
           </Container>
    );
};

export default LogoSimpsons;