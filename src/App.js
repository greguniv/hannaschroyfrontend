import './App.css';
import { Routes, Route } from 'react-router-dom'
// Components
import Nav from './components/Nav';
import Footer from './components/Footer'
// Pages
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='contact' element={<Contact />}/>
        <Route path='about' element={<About />}/>

      </Routes>
        <Footer />
    </div>
  );
}

export default App;
