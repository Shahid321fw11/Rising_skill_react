import React from "react";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand">
            <img src={logo} alt="" srcset="" width="200px" height="200px" />
          </a>
          <div>
            <h2> RISING SKILL FOUNDATION</h2>
            <h4> Rise Of Humanity</h4>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
