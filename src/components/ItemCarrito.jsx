import { useContext } from 'react'
import { ContextCart } from '../context/ContextCart'

const ItemCarrito = ({producto, cantidad}) => {

  const { eliminarProducto } = useContext(ContextCart);

  return (
    <>
      <p className="text-gray-400 mt-3 text-lg">Producto : <span>{producto.titulo}</span></p>
      <p className="text-gray-400 mt-3 text-lg">Cantidad : <span>{cantidad}</span></p>
      <p className="text-gray-400 mt-3 text-lg">Precio $: <span>{producto.precio}</span></p>
      <div className="flex items-center justify-center">
        <button className="btn-primary" onClick={() => eliminarProducto(producto.id)}>Eliminar producto</button>
      </div>
    </>
  )
}

export default ItemCarrito