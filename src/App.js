import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Home from './components/pages/Home';
import Calendario from './components/pages/Calendario';
import NovaTarefa from './components/pages/NovaTarefa';
import Perfil from './components/pages/Perfil';
import Login from './components/pages/Login';
import CriarConta from './components/pages/CriarConta';

import Container from './components/layout/Container';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">



        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/calendario" element={<Calendario />} />
          <Route exact path="/novatarefa" element={<NovaTarefa />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/criarconta" element={<CriarConta/>}/>
        </Routes>

      </Container>
      <Footer />
    </BrowserRouter>



  );
}

export default App
