import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programmes from './pages/Programmes.jsx';
import Curriculum from './pages/Curriculum.jsx';
import EducationalVisits from './pages/EducationalVisits.jsx';
import Workshops from './pages/Workshops.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/educational-visits" element={<EducationalVisits />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
