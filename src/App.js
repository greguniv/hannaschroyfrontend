import './App.css';
import { Routes, Route } from 'react-router-dom'
// Components
import Nav from './components/Nav';
// Pages
import People from './pages/People';
import About from './pages/About';

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='people' element={<People />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
