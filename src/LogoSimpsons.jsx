import React from 'react';
import theSimpson from "./img/theSimpson.png"
import { Container } from 'react-bootstrap';

const LogoSimpsons = () => {
    return (
        <Container className='centrar'>
        <div className='container'>
              <img className='tamañoImagen' src={theSimpson} alt="Logo de los Simpsons" />
            </div>
            <button className='boton'>Obtener Frase</button>
            
           </Container>
    );
};

export default LogoSimpsons;