import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handleCart}) => {
    const {name, picture, price } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={() => handleCart(tShirt)}>Buy now</button>
        </div>
    );
};

export default TShirt;