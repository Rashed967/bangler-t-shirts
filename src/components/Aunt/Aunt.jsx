import React, { useContext } from 'react';
import './Aunt.css'
import { MoneyContex } from '../Grandpa/Grandpa';
const Aunt = () => {
    const [money] = useContext(MoneyContex)
    return (
        <div className='aunt'>
            <h2>Aunt</h2>
            <p>Money : {money}</p>
        </div>
    );
};

export default Aunt;