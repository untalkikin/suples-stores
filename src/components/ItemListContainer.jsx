import React from 'react'


function ItemListContainers() {
    const productos = [
        { id: 1, titulo: "Producto A", descripcion: "Descripcion del producto", precio: 1000, Categoria: "A" },
        { id: 2, titulo: "Producto B", descripcion: "Descripcion del producto", precio: 100, Categoria: "B" },
        { id: 3, titulo: "Producto C", descripcion: "Descripcion del producto", precio: 2000, Categoria: "C" },
        { id: 4, titulo: "Producto D", descripcion: "Descripcion del producto", precio: 1500, Categoria: "D" },
    ]

    const promesaProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 5000)
        } else {
            reject("No se resolvo la promesa")
        }
    })

    promesaProductos
        .then((resultado) => {
            console.log(resultado)
        })

        .catch((error) => {
            console.log(error)
        })

    return (
        <section id="skills" className="py-10 bg-gray-300 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
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
                            <p className="text-l mt-3">{producto.Categoria}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ItemListContainers;