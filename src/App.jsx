import FormularioPrincipal from './componets/FormularioPrincipal'
import Footer from './componets/footer'
import './App.css'
import { Container } from 'react-bootstrap'
function App() {
  

  return (
    <>
      <Container className="main">
        <h1 className="text-center py-3">Colores!</h1>
        <hr />
        <FormularioPrincipal></FormularioPrincipal>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App
