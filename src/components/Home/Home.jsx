import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const [cart, setCart] = useState([])
    const tShirts = useLoaderData()

    const handleCart = tShirts => {
        console.log(tShirts)
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
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;