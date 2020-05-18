import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom"
const Header = (props) => {
  console.log(props);
    return <header className={s.header}>
    <div>
    <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt = "bbb"/>
    </div>
    <div>
      {props.isAuth ? props.login : <NavLink className={s.loginLink} to="/login">Login</NavLink>}
    </div>
  </header>
};
export default Header;