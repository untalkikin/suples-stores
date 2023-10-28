import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainers from './components/ItemListContainer'

function App() {

  return (
    <>
     <NavBar />
     <ItemListContainers greeting={'Hola mundo'}/>
    </>
  )
}

export default App
