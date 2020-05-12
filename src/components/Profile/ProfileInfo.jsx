import React from "react";
import s from "./Profile.module.css";
import Loader from "../../assets/glow.gif";
const ProfileInfo = (props) => {
  console.log(props)
  if(!props.profile) {
    return (
      <div>
        <img src={Loader}/>
      </div>
    )
  }
    return (
        <div className={s.descriptionBlock}>
    </div>
    );
};
export default ProfileInfo;