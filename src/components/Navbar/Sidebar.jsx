import React from "react";
import s from "./Navbar.module.css";
const Sidebar = (props) => {
  let oncloneFriend =(e) => {
    let name = e.target.dataset.name;
    let nickname = e.target.dataset.nickname;
props.cloneFriend(name, nickname)
  };
  let sidebarElements = props.sidebarData.map(sd => <div className={s.photo} key={sd.name}>
    <button className={s.rButton} onClick={oncloneFriend} data-name={sd.name} data-nickname={sd.nickName}>&times;</button>
    <p>{sd.name}</p>
    <h5>{sd.nickName}</h5>
  </div>);
    return (
      <div className={s.sideBar}>
        {sidebarElements}
      </div>
    )
};
export default Sidebar;