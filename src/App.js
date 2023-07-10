import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './components/navigation/pages/Home.js';
import { AboutMe } from './components/navigation/pages/AboutMe.js';
import { GetInTouch } from './components/navigation/pages/GetInTouch.js';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/mks_Portfolio' element = {<Home />}/>
          <Route exact path='/aboutme' element = {<AboutMe />}/> 
          <Route exact path='/getintouch' element = {<GetInTouch />}/> 
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
 