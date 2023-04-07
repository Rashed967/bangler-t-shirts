import React from 'react';

const Cart = ({cart, removeFromeCart}) => {
    const {name, price, _id} = cart
    return (
        <div>
           {
            cart.map(tshirt => <p
                key={tshirt._id}
                >
                {tshirt.name}
                <button onClick={() => removeFromeCart(tshirt._id)}>X</button>
                </p>)
           }
        </div>
    );
};

export default Cart;