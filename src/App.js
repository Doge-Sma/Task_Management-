import { BrowserRouter, Routes, Route } from 'react-router-dom'



import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer'
function App() {
  return (
      <BrowserRouter>
      
    <Container customClass="min-height">


        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
        
        </Container>
        <Footer />
      </BrowserRouter>
      
   
    
  );
}

export default App
