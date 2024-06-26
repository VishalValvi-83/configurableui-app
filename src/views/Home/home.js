import React, { useState } from 'react';
import Cards from '../../components/Cards/cards';
import './home.css'
import { products, sales, homepage, theme } from '../../data';
import Footer from '../../components/Footer/footer';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  const [mostPopularsLimit, setMostPopularsLimit] = useState(6);

  const handleLoadMore = () => {
    setMostPopularsLimit(mostPopularsLimit + 6);
  };

  return (
    <>
      <Slider />
      <div style={{ backgroundImage: `url(${homepage.headingBanner})` }} className='banner '><h1 fw-bold style={{ color: theme.styles.headingColor }} className="display-4 text-center">{homepage.welcomeMessage}</h1></div>
      <div className="container text-center py-5">

        <h2 className='my-3 text-center ' style={{ color: theme.styles.headingColor }}>Most Populars</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {products.slice(0, mostPopularsLimit).map((product, index) => (
            <Cards
              key={index}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              sale={sales.find((sale) => sale.productId === product.id)}
            />
          ))}
        </div>
        {mostPopularsLimit < products.length && (
          <button style={{ backgroundColor: theme.styles.buttonBg, color: theme.styles.buttonColor }} className="btn b-block my-0 mx-auto" onClick={handleLoadMore}>Load More</button>
        )}
        <div>
          <h2 className='my-3 text-center ' style={{ color: theme.styles.headingColor }}>New Arrivals</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {Array.from({ length: 3 }, () => products[Math.floor(Math.random() * products.length)]).map((product) => (
              <Cards key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div>
          <div className='sale-banner banner'>
            <h2 className='my-3 text-center ' style={{ color: theme.styles.headingColor }}>Offers</h2>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {sales.map((sale) => (
              <Cards
                key={sale.id}
                id={sale.productId}
                name={products.find((product) => product.id === sale.productId).name}
                description={products.find((product) => product.id === sale.productId).description}
                price={products.find((product) => product.id === sale.productId).price}
                image={products.find((product) => product.id === sale.productId).image}
                sale={sale}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;