import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from 'firebase/firestore';
import Swal from "sweetalert2";
import Footer from "./Footer";
import ItemList from "./ItemList";




function ItemListContainer() {
  const [productos, setProductos] = useState([]);


  const [loader, setLoader] = useState(true);

  const idCategoria = useParams().idCategoria;

  useEffect(() => {
    const showProducts = idCategoria ? query(collection(db, "suplementos"), where("Categoria", "==", idCategoria)) : collection(db, "suplementos");

    const loadingSwal = Swal.fire({
      title: "Buscando productos",
      didOpen: () => {
        Swal.showLoading();
      },
    });

      getDocs(showProducts)
        .then((resp) => {
        setProductos(resp.docs.map((doc) => { return { ...doc.data(), id: doc.id } }))
      })
        .catch(error => console.log(error))
        .finally(() => {
          loadingSwal.close();
          setLoader(false);
        })
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
