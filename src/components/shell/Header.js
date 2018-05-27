import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a className="navbar-brand">React Tezst1</a>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/anotherpage">Another Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
