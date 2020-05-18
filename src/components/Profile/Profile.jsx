import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return <div>
    <div>
    <div className={s.postsBlock}>
      </div>
    </div>
    <ProfileInfo profile={props.profile} />
    <div><h2>my posts</h2></div>
    <MyPostsContainer/>
  </div>
};
export default Profile;