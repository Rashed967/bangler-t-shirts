import React from 'react';
import './Wife.css'

const Wife = ({ring}) => {
    return (
        <div className='wife'>
            <h2>Wife</h2>
            {ring}
        </div>
    );
};

export default Wife;