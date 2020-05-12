import React from "react";
import s from "./Profile.module.css";
const Post = (props) => {
    return (
        <div className={s.item}>
        <img src="https://i.stack.imgur.com/gBMMe.png?s=328&g=1" alt="ava"/>
        {props.message || "post1"}
        <div><span>{props.likesCount}</span></div>
        </div>
    );
};
export default Post;