import React from 'react';
import videoOpeningFurniture from '../assets/videoOpeningFurniture.mp4';
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={videoOpeningFurniture} autoPlay muted />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center text-gray p-4 shadow-lg'>
        <h1 className='text-7xl/[40px]'>Welcome Home</h1>

        <div className="m-8 flex justify-center">
        <NavLink to='/furnitures'>
            <button className='text-2xl/[40px] block bg-slate-600 hover:bg-gray-900 text-white py-2 px-4 rounded-3xl shadow-lg'>
            <span className='text-blue-200 cursor-pointer'>See All Furnitures
            </span>
            </button>
        </NavLink>
        </div>
      </div>
      
      <div style={{ marginTop: "200vh" }} />
      <ScrollToTop smooth className ="px-1.5 rounded-3xl shadow-lg" />
      </div>
  );
};

export default Hero;
