import { Container } from 'react-bootstrap'

import Footer from "./components/Footer";
import Header from "./components/Header";

import Get_Mushrooms from './components/api/Get_Mushrooms';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container className='py-3'>
          <h1>Welcome to the Mushroom Application!</h1>
          <Get_Mushrooms />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
