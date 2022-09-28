import './App.css';
import LogoSimpsons from './LogoSimpsons';
import CardHomero from "./CardHomero"
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';


function App() {
 const [personaje, setPersonaje]= useState({});

  useEffect(()=>{
    // la consulta a la API en este caso solo ocurre en el montaje por el corchete vacio
    consultarApi();
    
},[])

const consultarApi= async ()=>{
try {
  // aqui hago la solicitud
  // el metodo fetch sirve para hacer peticiones a APIs
  const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
  console.log(respuesta);
  const dato = await respuesta.json();
  console.log(dato[0])
  // guardar la frase del personaje en el state
  setPersonaje(dato[0]);
} catch (error) {
  console.log(error)
  // mostrar un mensaje de error al usuario
}
}
  return (
    <Container className='borde1 ancho fondo'>

   <LogoSimpsons></LogoSimpsons>
   <CardHomero propPersonaje={personaje}></CardHomero>
    
    </Container>
  )
}

export default App;
