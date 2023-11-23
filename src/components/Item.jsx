import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, titulo, precio, Categoria, imagen }) => {
    return (
        <div className="w-full p-2 rounded-lg shadow-xl lg:flex lg:max-w-lg">
            <img
                className="object-cover w-full lg:w-40 lg:h-40"
                src={imagen}
                alt="image"
            />
            <div className="pl-2">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {titulo}
                </h4>
                <p className="mb-2 leading-normal">
                    ${precio}
                </p>
                <p className="mb-2 leading-normal">
                    Categoria: {Categoria}
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    <Link to={`/item/${id}`}>Detalle del prodcuto</Link>
                </button>
            </div>
        </div>
    )
}

export default Item