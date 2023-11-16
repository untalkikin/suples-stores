import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainers from './components/ItemListContainer'
import Home from './components/Home'
import Nosotros from './components/Nosotros'

function App() {
  
  const productos =[
    {id: 1, titlo: "Producto A", descripcion: "Descripcion del producto", precio: 1000, Categoria: "A"},
    {id: 2, titlo: "Producto B", descripcion: "Descripcion del producto", precio: 100, Categoria: "B"},
    {id: 3, titlo: "Producto C", descripcion: "Descripcion del producto", precio: 2000, Categoria: "C"},
    {id: 4, titlo: "Producto D", descripcion: "Descripcion del producto", precio: 1500, Categoria: "D"},
  ]

  const promesaProductos = new Promise((resolve, reject)=>{
    if(productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      }, 5000)  
      }else{
        reject("No se resolvo la promesa")
      }    
  })

  promesaProductos
    .then((resultado)=>{
      console.log(resultado)
    })
  
    .catch((error)=>{
      console.log(error)
    })
  


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route
          path="/Contenedor"
          element={<ItemListContainers greeting={"Hola mundo"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
