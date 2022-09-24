import './App.css';
import LogoSimpsons from './LogoSimpsons';
import CardHomero from "./CardHomero"
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container className='borde1 ancho fondo'>

   <LogoSimpsons></LogoSimpsons>
   <CardHomero></CardHomero>
    
    </Container>
  )
}

export default App;
