import React from 'react';
import './Cart.css'
const Cart = ({cart, removeFromeCart}) => {
    const {name, price, _id} = cart
    let message;
    // if(cart.length === 0){
    //     message = <p>Please add some product</p>
    // }
    // else{
    //     message = <p>Thanks for adding product</p>
    // }
    return (
        <div>
            {/* {cart.length === 0 ? <p>add product</p>  : <p>thanks</p> } */}
            {cart.length !== 0 && <p className={`blue ${cart.length > 2 && 'yellow'} ${cart.length > 4 && 'green'}`}>Thanks</p>}
            {cart.length > 0 || <p>Add products</p>}
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