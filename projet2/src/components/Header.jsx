import React from "react";
import { NavLink } from "react-router-dom";
import Loginicon from "./Loginicon";
// import Carticon from './Carticon';
import Carticon from "./Carticon";

const Header = () => {
  return (
    <div className="bg-bleuGris flex p-2">
      <NavLink to="/" className="flex-auto">
        Home(logo du site)
      </NavLink>
      <h1 className="flex-auto">Around the meuble</h1>
      <NavLink to="/login">
        <Loginicon />
      </NavLink>
      <NavLink to="/cart">
        <Carticon />
      </NavLink>
    </div>
  );
};

export default Header;
