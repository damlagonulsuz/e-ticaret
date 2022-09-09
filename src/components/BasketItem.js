import React from 'react';
import '../css/Basket.css';

function BasketItem({ item }) {
  return (
    <>
      <li className='basket-item'>
        {item.title} <span>x {item.amount}</span>

      </li>
    </>
  )
}

export default BasketItem