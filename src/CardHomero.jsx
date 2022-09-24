import React from 'react';
import {Container} from 'react-bootstrap';
import homero from "./img/homero.png"

const Homero = () => {
    return (
        <Container className='fondoBlanco'>
            <div className='flexible borde'>
                <div>
                    <img className='tamañoImagen' src={homero} alt="Imagen de homero" />
                </div>
                <div className='anchoDiv'>
                    <h3>Homero Simpson</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil sint atque natus corporis fugit veniam labore incidunt perspiciatis assumenda quo deleniti, non repudiandae nam corrupti beatae tenetur commodi reiciendis</p>
              </div>
               </div>
            </Container>
    );
};

export default Homero;