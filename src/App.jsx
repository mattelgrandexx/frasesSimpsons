import "./App.css";
import LogoSimpsons from "./LogoSimpsons";
import CardHomero from "./CardHomero";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../src/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    // la consulta a la API en este caso solo ocurre en el montaje por el corchete vacio
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      // cambiar el valor del setMostrarSpinner a true para que se vea el spinner al hacer la consulta
      setMostrarSpinner(true);
      // aqui hago la solicitud
      // el metodo fetch sirve para hacer peticiones a APIs
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      // guardar la frase del personaje en el state
      setPersonaje(dato[0]);
      // cambiar el valor de mostrarSpinner para que se vea el componente frase
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
      // mostrar un mensaje de error al usuario
    }
  };

  // cargar un componente condicional
  // usamos el operador ternario
  // (condicion logica)?(codigo si se cumple la condicion logica):(logica si no se cumple la condicion)

  // const componenteCondicional = (mostrarSpinner) forma implicita
  const componenteCondicional =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      <CardHomero propPersonaje={personaje}></CardHomero>
    );
  return (
    <Container className="borde1 ancho fondo">
      <LogoSimpsons consultarApi={consultarApi}></LogoSimpsons>
      {componenteCondicional}
    </Container>
  );
}

export default App;
