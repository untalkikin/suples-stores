import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <>
            <section id="skills" className="py-10 bg-gray-300 relative">
                <div className="mt-8 text-gray-100 text-center">
                    <h3 className="text-4xl font-semibold">
                        Nuestros <span className="text-cyan-600"> Productos</span>
                    </h3>
                    <p className="text-gray-400 mt-3 text-lg">Las mejoras marcas</p>
                    <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                        {productos.map(item => <Item key={item.id} {...item} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemList