import React from "react";
import s from "./users.module.css";
import Photo from "../../assets/Stalker_Beta oli1-1000x1000.jpg";
import { NavLink } from "react-router-dom"
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (
        <div className={s.usersBlock}>
            <div className={s.pages} >
        { pages.map(p => {   
            return <span className={props.currentPage === p ? s.selectedPage : undefined} key={p} onClick={(e) => props.onPageChanged(p)}>{p}</span>         
        })
}
            </div>
            {props.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : Photo} alt="img"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button> : <button onClick={()=> {props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span><div>{u.name}</div></span>
                    <div>u.location</div>
                </span>
                </div>)}
        </div>
    );
};
export default Users;