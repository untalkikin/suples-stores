import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ productos }) => {

  const { id } = useParams();

  const producto = productos.find((producto) => producto.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
    <h1>{producto.titulo}</h1>
    <p>Precio: {producto.precio}</p>
    <p>Descripción: {producto.descripcion}</p>
  </div>
  )
}

export default ProductDetail