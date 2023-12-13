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

      <section className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24  items-center ">
        <div className="text-center">
          <h4 className="text-2xl font-semibold">
            Productos en el carrito
          </h4>
          {
            carrito.map(prod => <ItemCarrito key={prod.producto.id} {...prod} />)
          }
          <p className="text-gray-400 mt-3 text-lg">Total : $ {total}</p>
          <p className="text-gray-400 mt-3 text-lg">Cantidad Total :  {cantidadTotal}</p>
          <div className="flex items-center justify-center">
            <button className="btn-primary" onClick={() => emptytCart()}>Vaciar Carrito</button>
            <br />
            <button className="btn-primary"><Link to="/CheckOut">Finalizar compra</Link></button>
          </div>
        </div>
      </section >

    </>

  )
}

export default Carrito