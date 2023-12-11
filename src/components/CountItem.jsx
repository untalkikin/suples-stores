import { useState } from 'react'

const CountItem = ({ inicial, stock, Functadd }) => {

    const [contador, setContador] = useState(inicial);

    const incremento = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decremento = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }
    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={incremento}
            >
                +
            </button>
            <p  className="bg-gray-200 text-2xl font-bold px-4">{contador}</p>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={decremento}
            >
                -
            </button>
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" onClick={()=>Functadd(contador)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default CountItem