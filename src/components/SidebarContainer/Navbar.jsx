import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar"
const Navbar = (props) => {
    return <div>
      <nav className={s.nav}>
    <div className={s.item}>
    <NavLink activeClassName={s.activeLink} to="profile">Profile</NavLink>
    </div>
    <div className={s.item}>
    <NavLink activeClassName={s.activeLink} to="dialogs">Dialogs</NavLink>
    </div>
  </nav>
  <Sidebar />
    </div>
};
export default Navbar;