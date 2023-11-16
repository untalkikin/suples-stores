import React from "react";
import brand from "../assets/images/Suples.png";
import cart from "../assets/images/cart.png";
import { Outlet, Link, useLocation } from 'react-router-dom'


const CartWidget = () => {
  return (
    <a href="#">
      Carrito
      <img src={cart} alt="carrito" />
    </a>
  );
};

const NavBar = () => {

  const location = useLocation();

  return (
    <nav className="bg-white/60  text-gray-900">
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            <span className="text-cyan-600">Suples</span>Store
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <img src={brand} alt="" />
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `} 
                        to="/">Inicio</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
            <Link 
                        className={`${location.pathname === '/Nosotros' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `} 
                        to="/Nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <a href="#">Tienda</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default NavBar;
