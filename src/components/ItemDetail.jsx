import React from 'react'

const ItemDetail = ({id, titulo, precio, Categoria, descripcion, imagen}) => {
  return (
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
            Precio $ {precio}
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
    </section>
  )
}

export default ItemDetail