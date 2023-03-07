import React from "react";
import "../assets/css/Navbar.css";
import tesla_logo from "../assets/resources/img/tesla_logo_no_bg.png"

const Navbar = () => {
  return (
    <div className="navBarRoot">
      <div className="logo">
        <img src={tesla_logo} alt="logo"/>
      </div>
      <div className="productNav">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>
      <div className="actionNav">
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
