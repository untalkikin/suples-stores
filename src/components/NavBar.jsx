import React from "react";
import brand from "../assets/images/Suples.png";
import cart from "../assets/images/cart.png";



function NotificationBubble() {
  const { message, position, color } = props;
  return (
    <div className={`bg-${color} p-2 rounded-lg`}>
      <p>{message}</p>
    </div>
  );
}

const NavBar = () => {
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
              <a href="#">Inicio</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <a href="#">Nosotros</a>
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
              <a href="#">
                Carrito
                <img src={cart} alt="carrito" />
                <NotificationBubble
                  message="¡Nueva notificación!"
                  position="top-right"
                  color="red"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
