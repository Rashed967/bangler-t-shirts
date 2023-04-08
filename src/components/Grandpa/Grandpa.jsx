import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';
import './Grandpa.css'

export const RingContex = createContext("Golden ring")
export const MoneyContex = createContext(0)
const Grandpa = () => {
    const [money, setMoney] = useState(0)
    const ring = <p>Diamond Ring</p>
    return (
        <RingContex.Provider value="Diamond ring">
           <MoneyContex.Provider value={[money, setMoney]}>
           <div className='grandpa'>
                <p>Has Money : </p>
            <h2>Grandpa</h2>
            <div className='grandpa-container'>
            <Father
            ring={ring}
            ></Father>
            <Uncle></Uncle>
            <Aunt></Aunt>
            </div>
        </div>
           </MoneyContex.Provider>
        </RingContex.Provider>
    );
};

export default Grandpa;