import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">My Meetups</div>
      <ul>
        <li>
          <Link to="/new-meetups">New Meetups</Link>
        </li>
        <li>
          <Link to="/favorite-meetups">Favorite Meetups</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
