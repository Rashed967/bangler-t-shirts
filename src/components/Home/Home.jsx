import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import {toast } from 'react-toastify';

const Home = () => {
    const [cart, setCart] = useState([])
    const tShirts = useLoaderData()

    const handleCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id)
        if(!exist){
            const newCart = [...cart, tShirt]
        setCart(newCart)
        }
        else{
            toast.error('Already added', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
        
    }

    const removeFromeCart = id => {
        const remaning = cart.filter(tShirt => tShirt._id !== id)
        setCart(remaning)
    }


    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleCart={handleCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart'

            >
                <Cart
                    cart={cart}
                    key={cart._id}
                    removeFromeCart={removeFromeCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;