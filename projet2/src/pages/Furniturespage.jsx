import React from 'react';
import Header from '../components/Header';
import Filterbar from '../components/Filterbar';
import Articlecard from '../components/Articlecard';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../components/Footer';
import Backicon from '../components/Backicon';

import { NavLink } from 'react-router-dom';

const Furniturespage = () => {
    return (
        <div>
            <Header />
            <Filterbar />
            <div className="flex justify-center items-center h-full">
                <div className="bg-gray-200 p-2 justify-center rounded-3xl">
                    <Articlecard />
                </div>
                <div style={{ marginTop: "200vh" }}>
                    <ScrollToTop smooth className="px-1.5 rounded-3xl shadow-lg" />
                </div>
            </div>
            <NavLink to='/'> <Backicon/> </NavLink>
            <Footer />
        </div>
    );
};

export default Furniturespage;
