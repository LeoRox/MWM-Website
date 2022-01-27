import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MigrantMinstry from './components/pages/MigrantMinistry';
import OurMission from './components/pages/OurMission';
import Support from './components/pages/Support';
import Donate from './components/pages/Donate';
import Contact from './components/pages/Contact';
import Volunteer from './components/pages/Volunteer';


function App() {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/migrantministry' element={<MigrantMinstry/>} />
        <Route path='/ourmission' element={<OurMission/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/volunteer' element={<Volunteer/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
    
  );
}

export default App;
