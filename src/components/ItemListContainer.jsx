import React from 'react'


function ItemListContainers({greeting}){
    return(
        <section className="min-h-screen flex py-10 md:flex-row flex-col items-center"> 
            <h3>{greeting}</h3>
        </section> 
    );
}

export default ItemListContainers;