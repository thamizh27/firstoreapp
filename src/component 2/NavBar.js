import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillGridFill, BsListUl } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="links">
      <NavLink activeClassName="active" to="/" exact>
        <BsListUl className="table" />
      </NavLink>
      <NavLink activeClassName="active" to="/grid">
        <BsFillGridFill className="grid" />
      </NavLink>
    </div>
  );
};

export default NavBar;
