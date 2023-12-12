import { useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountItem from './CountItem';
import { Link } from 'react-router-dom';
import { ContextCart } from '../context/ContextCart';


const ItemDetail = ({ id, titulo, precio, Categoria, descripcion, imagen, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { addCarrito } = useContext(ContextCart);

  const manageCantidad = (cantidad) => {
    toast.success(`Agregaste ${cantidad} de productos al carrito`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setAgregarCantidad(cantidad);
  
    const producto = { id, titulo, precio };
    addCarrito(producto, cantidad);
  };
  


  return (
    <>
      <section className="py-10 px-3 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            Producto: <span className="text-cyan-600">{titulo}</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Suples Stores</p>
        </div>
        <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Categoria: {Categoria}
            </h2>
            <h3 className="text-2xl font-semibold">
              Precio: $ {precio}
            </h3>
            <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
              Descripcion del producto : {descripcion}
            </p>
          </div>
          <img
            src={imagen}
            alt=""
            className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
          />

        </div>
        <div className="flex items-center justify-center">
          {
            agregarCantidad > 0 ? (
              <Link className="btn-primary" to="/Carrito">
                Ir al carrito
              </Link>
            ) : (
              <div className="btn-primary mt-8">
                <CountItem inicial={1} stock={stock} Functadd={manageCantidad} />
              </div>
            )
          }
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default ItemDetail