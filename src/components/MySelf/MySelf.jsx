import React from 'react';
import './MySelf.css'
import Wife from '../Wife/Wife';

const MySelf = ({ring}) => {
    return (
        <div className='my-self'>
            <h2>My Self</h2>
            <Wife
            ring={ring}
            ></Wife>
        </div>
    );
};

export default MySelf;