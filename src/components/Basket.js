import React from 'react';
import BasketItem from './BasketItem';
import '../css/Basket.css';

function Basket({ basket, total, resetBasket }) {
    return (
        <div className='basket-container container'>
            <h3>Sepet:</h3>

            <ul>
                {
                    basket.map(item => (
                        <BasketItem key={item.id} item={item} />
                    ))
                }
            </ul>
            <div className='total'>
                Toplam: {total}
            </div>
            <button className='basket-reset' onClick={resetBasket}>Sepeti Sıfırla</button>
        </div>
    )
}

export default Basket;