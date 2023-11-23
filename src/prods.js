const Productos = [
    {
      id: 1,
      titulo: "Whey Protein",
      descripcion: "Proteina de suero de leche",
      precio: 1000,
      Categoria: "Proteinas",
      imagen: "https://fit4eversuplementos.com/cdn/shop/products/Goldstandard.png?v=1651523286",
    },
    {
      id: 2,
      titulo: "Power Creatine",
      descripcion: "Creatino ionizada",
      precio: 500,
      Categoria: "Creatinas",
      imagen: "https://static.wixstatic.com/media/b28db4_a72f4427dd5742a093cbca78ccdede43~mv2.png/v1/fill/w_484,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b28db4_a72f4427dd5742a093cbca78ccdede43~mv2.png",

    },
    {
      id: 3,
      titulo: "Psicotico",
      descripcion: "La marca del payaso te pone loco",
      precio: 400,
      Categoria: "Pre_entrenos",
      imagen: "https://captainnutrition.mx/cdn/shop/products/Psychotic-Render-Cotton-Candy_grande.png?v=1510330257",
    },
    {
      id: 4,
      titulo: "Animal package",
      descripcion: "Animal package para que te pongas como animal",
      precio: 1500,
      Categoria: "Vitaminas",
      imagen:"https://i0.wp.com/www.fitstore.com.mx/wp-content/uploads/2016/09/AnimalPak44.webp?fit=768%2C768&ssl=1",
    },
    {
      id: 5,
      titulo: "Nitraflax",
      descripcion: "Siente el poder de nitraflax",
      precio: 450,
      Categoria: "Pre_entrenos",
      imagen:"https://www.afsupplements.com.mx/cdn/shop/products/GATNITRAFLEX300GRS.png?v=1672255460",
    },
    {
      id: 6,
      titulo: "Isopure",
      descripcion: "Proteina de isolada",
      precio: 1400,
      Categoria: "Proteinas",
      imagen:"https://www.fitstore.com.mx/wp-content/uploads/2016/06/ISOPURE-ZERO-CARB-3-LBS-VAINILLA.png",
    },
    {
      id: 7,
      titulo: "MyoVector",
      descripcion: "Whey protein de una marca diferente",
      precio: 1000,
      Categoria: "Proteinas",
      imagen:"https://myovector.com.mx/wp-content/uploads/2020/04/asdff.png",
    },
    {
        id: 8,
        titulo: "Testrol",
        descripcion: "Precuersor de testosternos",
        precio: 500,
        Categoria: "Vitaminas",
        imagen:"https://fit4eversuplementos.com/cdn/shop/products/TESTROL60CAPS.png?v=1648074698",
      },
      {
        id: 9,
        titulo: "ClembuBest",
        descripcion: "Clembuterol",
        precio: 600,
        Categoria: "Vitaminas",
        imagen:"https://fit4eversuplementos.com/cdn/shop/products/CLEMBUNOX300GRS_800x.png?v=1649181145",
      },
      {
        id: 10,
        titulo: "Sayacreatina",
        descripcion: "La mejor la creatina para sayayines",
        precio: 650,
        Categoria: "Creatinas",
        imagen:"https://static.wixstatic.com/media/b28db4_cbfa6bb8844d4cb1a8ee444e8962b953~mv2.png/v1/fill/w_484,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b28db4_cbfa6bb8844d4cb1a8ee444e8962b953~mv2.png",
      },
  ]

  export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 500)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Convert idItem to number
            const itemId = parseInt(id, 10);
            const producto = Productos.find((item) => item.id === itemId);
            resolve(producto);
        }, 500);
    });
};


export const getProdByCat = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(item => item.Categoria === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}