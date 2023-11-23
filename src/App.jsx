import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from './components/Carrito'


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Nosotros" element={<Nosotros />} />
        <Route exact path="/Categorias" element={<ItemListContainer/>} />
        <Route exact path="/Categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route exact path="/Productos" element={<ItemListContainer/>} />
        <Route exact path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route exact path="/Carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  );
}

export default App;
