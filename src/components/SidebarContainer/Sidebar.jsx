import React from "react";
import s from "./Navbar.module.css";
import { cloneFriendActionCreator } from "../../redux/sidebar-reducer";
const Sidebar = (props) => {
  let onButtonClick =(e) => {
    let name = e.target.dataset.name;
    let nickName = e.target.dataset.nickName;
props.dispatch(cloneFriendActionCreator(name, nickName))
    console.log(name)
  }
  let sidebarElements = props.sidebarData.map(sd => <div className={s.photo}>
    <button className={s.rButton} onClick={onButtonClick} data-name={sd.name} data-nickName={sd.nickName}>&times;</button>
    <p>{sd.name}</p>
    <h5>{sd.nickName}</h5>
  </div>)
    return (
      <div className={s.sideBar}>
        {sidebarElements}
      </div>
    )
};
export default Sidebar;