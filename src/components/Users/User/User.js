import s from "./User.module.css"
import avatarIcon from "./../../../assets/images/1573589.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

function User(props) {
    return (
        <div className={s.userWrapper}>
            <div className={`${s.userItem} ${s.userItem1}`}>

                <NavLink to={'/profile/'+props.id}>
                    <img src={props.photos !== null ? props.photos : avatarIcon} className={s.userIcon} alt={""}/>
                </NavLink>
                <div className={s.wrapperButton}>
                    {
                        props.followed ?
                            <button className={s.button} onClick={() => {
                                // debugger;
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "09353765-c548-4086-a6f6-a43a7968d508"
                                    }
                                }).then(response => {
                                    // debugger;
                                    if (response.data.resultCode === 0) {
                                        // debugger
                                        props.unfollow(props.id);
                                    }
                                })
                                // props.unfollow(props.id)

                            }}>Unfollowed</button> :
                            <button className={s.button} onClick={() => {
                                // debugger
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "09353765-c548-4086-a6f6-a43a7968d508"
                                    }
                                }).then(response => {
                                    // debugger
                                    if (response.data.resultCode === 0) {
                                        // debugger
                                        props.follow(props.id)
                                    }
                                })
                                // props.follow(props.id)

                            }}>Followed</button>
                    }
                </div>
            </div>
            <div className={s.userItem}>
                {
                    <h4 className={s.nameUser}>{props.name}</h4>
                }
            </div>

        </div>
    )
}

export default User;