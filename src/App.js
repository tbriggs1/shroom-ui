import { Container } from 'react-bootstrap'

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container className='py-3'>
          <h1>Welcome to Mushroom Application</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
