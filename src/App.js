import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Index from './Pages';
import About from './Pages/AboutPage/About';
import ContactPage from './Pages/Contact/Contact';
import AlgorithmPage from './Pages/Algorithms/Algorithms'

function App() {
  return (
    
    <Router>
      <div>
      <Routes>
          <Route path="/" Component={Index}/>
          <Route path="/visualizer" Component={Home} />
          <Route path="/about" Component={About}/>
          <Route path="/contact" Component={ContactPage}/>
          <Route path="/algorithm" Component={AlgorithmPage}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
