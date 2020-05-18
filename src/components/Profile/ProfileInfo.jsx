import React from "react";
import s from "./Profile.module.css";
import Loader from "../../assets/glow.gif";
const ProfileInfo = (props) => {
  if(!props.profile) {
    return (
      <div>
        <img src={Loader} alt="" />
      </div>
    );
  };
    return (
        <div className={s.descriptionBlock}>
          <div>
          <img src={props.profile.photos.large} alt=""/>
          <p>Имя:&nbsp;<span>{props.profile.fullName}</span></p>
          <p>Статус:&nbsp;<span>{props.profile.aboutMe} </span></p>
          </div>
          <div className="contacts">
          <div><p>Контакты:</p></div>
          <p>Facebook:&nbsp;<span>{props.profile.contacts.facebook} </span></p>
          <p>Twitter:&nbsp;<span>{props.profile.contacts.twitter} </span></p>
          <p>Instagram:&nbsp;<span>{props.profile.contacts.instagram} </span></p>
          </div>
    </div>
    );
};
export default ProfileInfo;