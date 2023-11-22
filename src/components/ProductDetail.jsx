import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const { id } = useParams()

  const producto = productos.find((producto) => producto.id === id);

  if (!producto) {
    return null;
  }


  return (
    <div>
      <h1>Producto:{id}</h1>
      <h2>{titulo}</h2>
      <h3>{descripcion}</h3>
      <h4>{Categoria}</h4>
      <h5>{precio}</h5>

    </div>
  )
}

export default ProductDetail