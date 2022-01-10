import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Promociones from './components/Promociones';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/Promociones' element={<Promociones />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
