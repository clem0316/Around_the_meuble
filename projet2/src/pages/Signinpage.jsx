import React from 'react';
import Header from '../components/Header';
import Subscriptionform from '../components/Subscriptionform';
import Footer from '../components/Footer';

import { NavLink } from 'react-router-dom';
import Backicon from '../components/Backicon';

const Signinpage = () => {
    return (
        <div>
            <Header/>
            <h1>S'inscrire</h1>
            <Subscriptionform/>
            <NavLink to='/login'>Déjà un compte ? Connectez-vous</NavLink>
            <NavLink to='/'><Backicon/></NavLink>
            <Footer/>
        </div>
    );
};

export default Signinpage;