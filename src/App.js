import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Home from './components/pages/Home';
import Calendario from './components/pages/Calendario';
import NovaTarefa from './components/pages/NovaTarefa';
import Perfil from './components/pages/Perfil';
import Login from './components/pages/Login';

import Container from './components/layout/Container';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer'
function App() {
  return (
      <BrowserRouter>
      <Navbar />
    <Container customClass="min-height">


        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calendario" element={<Calendario />} />
          <Route exact path="/novatarefa" element={<NovaTarefa />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        
        </Container>
        <Footer />
      </BrowserRouter>
      
   
    
  );
}

export default App
