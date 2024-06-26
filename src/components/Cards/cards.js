import React from 'react';
import './cards.css'
import { theme } from '../../data';


const Card = ({ id, description, name, image, price, sale }) => {
  return (
   <>
    <div style={{backgroundColor : theme.styles.footerBgColor}} 
    className="card m-2 p-2 border rounded shadow">
      <h4 style={{ color : theme.styles.footerSubHeadingColor }} className="text-center ">{name}</h4>
      <div className="card-body ">
        <div className="img-container"> 
        <img src={image} alt={name} className="img-fluid rounded" />
        </div>
        <p className="card-text text-justify">{description}</p>
        <p className="card-text text-center">
          {sale ? ( 
            <span>
            <strike className='text-muted discount-price'>{price}</strike>
            <span className='text-primary'>
              {sale.salePrice}
            </span></span>
          ) : (
            <span className='text-primary'>{price}</span>
          )}
        </p>
       
      </div> <button style={{backgroundColor : theme.styles.buttonBg, color : theme.styles.buttonColor}} className="btn w-50 my-0 mx-auto btn-block">Add to Cart</button>
    </div>
    </>
  );
};

export default Card;