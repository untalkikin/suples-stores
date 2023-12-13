import { useContext } from 'react'
import cart from "../assets/images/cart.png";
import { NavLink } from 'react-router-dom';
import { ContextCart } from '../context/ContextCart';

const WidgetCarrito = () => {

    const { cantidadTotal } = useContext(ContextCart);

  return (
    <>
    <NavLink
        className={`${location.pathname === '/Carrito' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `}
        to="/Carrito">Carrito</NavLink>
      <img src={cart} alt="carrito" />
      {cantidadTotal > 0 && (<h2 className="text-xl font-semibold tracking-tight text-blue-600">{cantidadTotal}</h2>)}
    </>
  )
}

export default WidgetCarrito