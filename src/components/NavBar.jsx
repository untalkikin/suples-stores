import React, { Fragment } from "react";
import brand from "../assets/images/Suples.png";
import cart from "../assets/images/cart.png";
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const CartWidget = () => {
  return (
    <>
      <NavLink
        className={`${location.pathname === '/Carrito' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `}
        to="/Carrito">Carrito</NavLink>
      <img src={cart} alt="carrito" />
    </>
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
              <NavLink to='/'><img src={brand} alt="" /></NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <NavLink className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `}
                to="/">Inicio</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <NavLink className={`${location.pathname === '/Nosotros' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `}
                to="/Nosotros">Nosotros</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Categorias
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-1 py-2 text-lg">
            <li className="px-6 hover:text-cyan-600">
              <NavLink
                className={`${location.pathname === '/Productos' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 `}
                to="/Productos">Productos</NavLink>
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
