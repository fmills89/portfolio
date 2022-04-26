import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
   
      <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
      </>
   
  );
}

export default App;
