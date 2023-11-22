import React from "react";
import { Link } from "react-router-dom"
import Footer from "./Footer";




function ItemListContainers() {
  //const { Categoria } = useParams();

  const productos = [
    {
      id: 1,
      titulo: "Whey Protein",
      descripcion: "Proteina de suero de leche",
      precio: 1000,
      Categoria: "Proteinas",
    },
    {
      id: 2,
      titulo: "Power Creatine",
      descripcion: "Creatino ionizada",
      precio: 500,
      Categoria: "Creatinas",
    },
    {
      id: 3,
      titulo: "Psicotico",
      descripcion: "La marca del payaso te pone loco",
      precio: 400,
      Categoria: "Pre entrenos",
    },
    {
      id: 4,
      titulo: "Animal package",
      descripcion: "Animal package para que te pongas como animal",
      precio: 1500,
      Categoria: "Vitaminas",
    },
    {
      id: 5,
      titulo: "Nitraflax",
      descripcion: "Siente el poder de nitraflax",
      precio: 450,
      Categoria: "Pre entrenos",
    },
    {
      id: 6,
      titulo: "Isopure",
      descripcion: "Proteina de isolada",
      precio: 1400,
      Categoria: "Proteinas",
    },
    {
      id: 7,
      titulo: "MyoVector",
      descripcion: "Whey protein de una marca diferente",
      precio: 1000,
      Categoria: "Proteinas",
    },
  ];

  const promesaProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 5000);
    } else {
      reject("No se resolvo la promesa");
    }
  });

  promesaProductos
    .then((resultado) => {
      console.log(resultado);
    })

    .catch((error) => {
      console.log(error);
    });

   
  
  return (
    <>
      <section className="py-10 bg-gray-300 relative">
        <div className="mt-8 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            Nuestros<span className="text-cyan-600">Prodcutos</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Las mejores marcas</p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {productos.map((producto, id) => (
              <div
                key={id}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <h4>Product</h4>
                </div>
                <p className="text-xl mt-3">{producto.titulo}</p>
                <p className="text-l mt-3">Categoria: {producto.Categoria}</p>
                <button className="btn-primary"><Link to={`/Producto/${producto.id}`} >Ver detalles del prodcuto</Link></button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ItemListContainers;
