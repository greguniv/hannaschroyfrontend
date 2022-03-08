import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
// Components
import Nav from './components/Nav';
import Footer from './components/Footer'
import Upcoming from './components/Upcoming';
// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Storyboards from './pages/Storyboards';
// Contexts
import UserContext from './contexts/UserContext';

const App = () => {
  const [user, setUser] = useState('')

  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='storyboards' element={<Storyboards />} />
        </Routes>

        <Upcoming />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
