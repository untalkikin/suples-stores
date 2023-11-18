import React from "react";
import Footer from "./Footer";

const Categories = () => {
  const categoies = [
    { id: 1, nombre: "Creatinas" },
    { id: 2, nombre: "Farmacos" },
    { id: 3, nombre: "Proteinas" },
    { id: 4, nombre: "Vitaminas" },
    { id: 5, nombre: "Energenitzantes" },
    { id: 6, nombre: "Bebidas" },
    { id: 6, nombre: "Pre entrenos" },
  ];

  const promesaCat = new Promise((resolve, reject) => {
    if (categoies.length > 0) {
      setTimeout(() => {
        resolve(categoies);
      }, 5000);
    } else {
      reject("No se resolvo la promesa");
    }
  });

  promesaCat
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
            Nuestro{" "}
            <span className="text-cyan-600">Catalogo de Categorias</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">
            ---------------------------
          </p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {categoies.map((category, id) => (
              <div
                key={id}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <h4>Product</h4>
                </div>
                <p className="text-xl mt-3">{category.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Categories;
