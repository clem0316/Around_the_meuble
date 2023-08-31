import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Backicon from '../components/Backicon';

import { NavLink } from 'react-router-dom';

const Cartpage = () => {
    return (
        <div>
            <Header/>
            <p>mon panier</p>
            <NavLink to='/'> <Backicon/> </NavLink>
            <Footer/>
        </div>
    );
};

export default Cartpage;
