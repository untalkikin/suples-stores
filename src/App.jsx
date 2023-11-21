import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainers from './components/ItemListContainer'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Categories from './components/Categories'
import Carrito from './components/Carrito'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Nosotros" element={<Nosotros />} />
        <Route eaxt path="/Categorias" element={<Categories/>}/>
        <Route eaxt path="/Categorias/:Categoria" element={<Categories/>}/>
        <Route exact path="/Productos" element={<ItemListContainers />} />
        <Route exact path="/Producto/:id" element={<ProductDetail />} />
        <Route exact path="/Carrito" element={<Carrito/>}/>
      </Routes>
    </Router>
  );
}

export default App;
