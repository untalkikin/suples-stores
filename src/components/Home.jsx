import React from 'react'
import strongMan from "../assets/images/cbum.png"


const Home = () => {
  return (
<section 
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={strongMan} alt="" className="md:w-7/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Bienvenido
              <br />
            </span>
            Suples <span>Stores</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-white-600">
            Tienda de suplmentos<span> Deportivos</span>
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Home
