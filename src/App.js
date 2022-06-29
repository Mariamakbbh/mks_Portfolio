import React from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home.js';
import { AboutMe } from './components/pages/AboutMe.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Home />}/>
          <Route exact path='/aboutme' element = {<AboutMe />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
 