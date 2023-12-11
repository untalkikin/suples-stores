import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'

const ItemCarrito = ({producto, cantidad}) => {
  
    const { deleteProducto } = useContext(ContextCart)
  
    return (
    <>
        <p className="text-gray-400 mt-3 text-lg"><span>{producto.titulo}</span></p>
        <p className="text-gray-400 mt-3 text-lg"><span>{cantidad}</span></p>
        <p className="text-gray-400 mt-3 text-lg"><span>{producto.precio}</span></p>
        <button className="btn-primary" onClick={() => deleteProducto(producto.id)}>Eliminar productos</button>
    </>
  )
}

export default ItemCarrito