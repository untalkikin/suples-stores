import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainers from './components/ItemListContainer'
import Home from './components/Home'
import Nosotros from './components/Nosotros'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contenedor" element={<ItemListContainers />} />
      </Routes>
    </Router>
  );
}

export default App;
