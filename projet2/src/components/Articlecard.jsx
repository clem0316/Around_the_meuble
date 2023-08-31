import React from 'react';
import Favbutton from './Favbutton';
import Addtocartbutton from './Addtocartbutton';
import cardList from '../pages/data.js';
import { NavLink } from 'react-router-dom';

const Articlecard = () => {
    return (

<div className="m-5">
  <div className="grid lg:grid-cols-3 gap-4 justify-center">
    {cardList.map((card, index) => (
      <div key={index} className="mb-5 px-5 p-5 bg-slate-300 rounded-3xl shadow-lg">
        <NavLink to={`/singlefurniture`}>
          <img
            src={card.img}
            alt={card.title}
            className="rounded-3xl"
            height="300"
            width="400"
          />
          <div>
              {card.id}
          </div>
          <p className="items-center">
            Pour avoir plus de détails sur ce meuble 
            <span className="text-blue-700 cursor-pointer"> Cliquez ici</span>
          </p>
        </NavLink>
        <p>{card.title}</p>
        <p>{card.price}</p>
        <div className='flex justify-between mb-6'>
        <Addtocartbutton />
        <Favbutton />
        </div>
      </div>
    ))}
  </div>
</div>

    );
};

export default Articlecard;
