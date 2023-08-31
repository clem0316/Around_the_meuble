import React from 'react';

const Filterbar = () => {
    return (
        <div>
            <ul className='flex'>
                <li className='flex-auto'>filtres :</li>
                <li className='flex-auto'>catégories</li>
                <li className='flex-auto'>couleurs</li>
                <li className='flex-auto'>matières</li>
                <li className='flex-auto'>prix</li>
            </ul>
        </div>
    );
};

export default Filterbar;