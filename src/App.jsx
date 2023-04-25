import React from 'react';
import Home from './components/home';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/project" element={<Projects/>} />
        <Route exact path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  );
}

export default App;
