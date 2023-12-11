import React, {useState} from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'

const SendOrder = () => {
    
    const [ id, setId] = useState('')
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail] = useState('')

    const handleSubmit = () =>{
        e.preventDefault()

        addDoc(orderCollection, order).then(({id})=>setId(id))
    }
    const order ={
        nombre,
        email
    }
    const orderCollection = collection(db, "ordenes")
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <button>Enivar</button>
        </form>
        <p>id de la compra: {id}</p>
    </div>
  )
}

export default SendOrder