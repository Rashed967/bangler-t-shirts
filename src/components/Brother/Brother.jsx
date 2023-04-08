import React, { useContext, useState } from 'react';
import './Brother.css'
import { MoneyContex } from '../Grandpa/Grandpa';




const Brother = () => {
    const [money, setMoney] = useContext(MoneyContex)
    return (
        <div className='brother'>
            <h2>Brother</h2>
            <button onClick={() => setMoney(money + 2000)}>send money</button>
        </div>
    );
};

export default Brother;