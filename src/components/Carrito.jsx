import { useContext } from 'react';
import { ContextCart } from '../context/ContextCart';
import { Link } from 'react-router-dom';
import ItemCarrito from './ItemCarrito';


const Carrito = () => {

  const { carrito, emptytCart, total, cantidadTotal } = useContext(ContextCart);

  if (cantidadTotal === 0) {
    return (
      <>
        <section className="py-10 px-3 text-white">
          <div className="text-center">
            <h3 className="text-4xl font-semibold">
              <span className="text-cyan-600">No hay productos en el carrito</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg"><Link to="/Productos">Ver suplmentos</Link></p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="py-10 px-3 text-white flex items-center justify-center">
        <div className="text-center">
          <h4 className="text-2xl font-semibold">
            Productos en el carrito
          </h4>
          {
            carrito.map(prod => <ItemCarrito key={prod.producto.id} {...prod} />)
          }
          <p className="text-gray-400 mt-3 text-lg">Total : $ {total}</p>
          <p className="text-gray-400 mt-3 text-lg">Cantidad Total :  {cantidadTotal}</p>
          <button className="btn-primary flex items-center" onClick={() => emptytCart()}>Vaciar Carrito</button>
          <p className="text-gray-400 mt-3 text-lg"><Link to="/">Ver suplmentos</Link></p>
        </div>
      </section>
    </>
  )
}

export default Carrito