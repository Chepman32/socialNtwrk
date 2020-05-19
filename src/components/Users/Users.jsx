import React from "react";
import s from "./users.module.css";
import Photo from "../../assets/Stalker_Beta oli1-1000x1000.jpg";
import { NavLink } from "react-router-dom"
import Axios from "axios";
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
                        {u.followed ? <button onClick={()=> {
                            Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true
                            }).then(response => {
                                if(response.data.resultCode == 0) {
                                    this.props.setUser(response.data);
                                }
                                });
                        }}>unfollow</button> :
                         <button onClick={()=> {
                            Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "04d07d70-25fe-412d-9538-e707305c9c26"
                                }
                            }).then(response => {
                                if(response.data.resultCode == 0) {
                                    this.props.setUser(response.data);
                                }
                                });
                         }}>follow</button>}
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