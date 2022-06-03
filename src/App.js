import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './styles/global.css';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Container customClass = "min-height">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/newproject">New Project</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App
