import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUnProducto } from '../prods';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])
  return (
    <div>
        {producto ? <ItemDetail {...producto} />: <p>Producto no encontrado</p>}
    </div>
  )
}

export default ItemDetailContainer