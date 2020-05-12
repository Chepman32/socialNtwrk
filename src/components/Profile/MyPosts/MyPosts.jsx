import React from "react";
import s from "../Profile.module.css"
import Post from "../Post";
const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    let postsElements = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount}/>)
    return (
        <div className={s.posts}>
            <div>
            <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={ onPostChange }></textarea>
        <button onClick={addPost}>add post</button>
            </div>
            {postsElements}
    </div>
    );
};
export default MyPosts;