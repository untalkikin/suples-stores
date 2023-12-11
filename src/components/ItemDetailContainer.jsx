import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import{db} from "../firebase/config";
import{doc, getDoc} from "firebase/firestore";
import Swal from 'sweetalert2';
import ItemDetail from './ItemDetail';
import Footer from './Footer';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loader, setLoader] = useState(true)
    const {idItem} = useParams();

    useEffect(() => {
      const docRef= doc(db,"suplementos", idItem);
      getDoc(docRef)
          .then((resp)=>{
              setProducto (
                  {...resp.data(), idItem: resp.idItem}
                  );
          })
          .catch( error=>{
              Swal.fire({
                  icon: "error",
                  title: "Algo salió mal",
                  text: "No encontramos el producto :( ",
              });
          })
          .finally(()=> setLoader(false))
      }, [idItem])
  return (
    <div>
        {producto ? <ItemDetail {...producto} />: <p>Producto no encontrado</p>}
        <Footer />
    </div>
  )
}

export default ItemDetailContainer