import React, { createContext, useContext, useState } from 'react';
import './Sister.css'
import { MoneyContex, RingContex } from '../Grandpa/Grandpa';



const Sister = () => {
    const [money] = useContext(MoneyContex)
    const angti = useContext(RingContex)

    return (
        <div className='sister'>


           <h2>Sister</h2>
            <p>Sister Money : {money}</p>
            <p>{angti}</p> 


        </div>
    );
};

export default Sister;