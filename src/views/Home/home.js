import React from 'react'
import Cards from '../../components/Cards/cards'

import {products,homepage } from '../../data'
import Footer from '../../components/Footer/footer'

const home = () => {
    return(
        <>
        <div className="header"><h1>{homepage.welcomeMessage}</h1></div>
        <div className="product-grid">
        {products.map((product, index) => (
          <Cards
            key={index}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Footer/>
        </>
    )
}
export default home