import { useState, createContext } from "react";

export const ContextCart = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const addCarrito = (producto, cantidad) => {
        const productoExistente = carrito.find(prod => prod.id === producto.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { producto, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (producto.precio * cantidad));
        } else {
            const updatedCart = carrito.map(prod => {
                if (prod.producto.id === producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            })
            setCarrito(updatedCart)
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (producto.precio * cantidad));
        }
    }
    const deleteProducto = (id) => {
        const deletedProducto = carrito.find(prod => prod.producto.id === id);
        const updateCart = carrito.filter(prod => prod.producto.id !== id);

        setCarrito(updateCart);
        setCantidadTotal(prev => prev - deletedProducto.cantidad);
        setTotal(prev => prev - (deletedProducto.producto.precio * deletedProducto.cantidad))
    }
    const emptytCart = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }
    return (
        <ContextCart.Provider value={{ carrito, total, cantidadTotal, addCarrito, deleteProducto, emptytCart }}>
            {children}
        </ContextCart.Provider>
    )
}
export default CartProvider