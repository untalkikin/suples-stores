import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductos, getProdByCat } from "../prods";
import Footer from "./Footer";
import ItemList from "./ItemList";




function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {

    const funcionProductos = idCategoria ? getProdByCat : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))

  }, [idCategoria])
  return (
    <>
      <div>
        <ItemList productos={productos} />
      </div>
      <Footer />
    </>
  );
}

export default ItemListContainer;
