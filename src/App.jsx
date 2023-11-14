import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import ItemListContainers from './components/ItemListContainer'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Footer from './components/Footer'

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
    <>
     <NavBar />
     <Home />
     <Nosotros />
     <Footer />
     <ItemListContainers greeting={'Hola mundo'}/>
     {
      productos.map((p)=>{
        return(
          <div key={p.id}>
            <h2>Producto : {p.titlo}</h2>
            <h4> $ {p.precio}</h4>
          </div>
        )
      })
     }
    </>
  )
}

export default App;
