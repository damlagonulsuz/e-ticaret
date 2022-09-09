import React from 'react';
import { moneyFormat } from '../Helper';
import '../css/Header.css';

function Header({ total, money }) {

    
  return (
    <>
        <div className='header'>
            {total > 0 && money - total !== 0 && (
                <>
                
                    Harcayacak için <span>$ { money - total }</span> paranız kaldı
                </>
            )} 
            {total === 0 && (
                <>
                    Harcamak için <span>$ { money }</span> paranız var
                </>
            )}
            { money - total === 0 && (
                <>
                    Paranız bitti!
                </>
            )}
        </div>
    
    </>
  )
}

export default Header