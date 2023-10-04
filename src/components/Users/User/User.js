import s from "./User.module.css"
import avatarIcon from "./../../../assets/images/1573589.png"
import {NavLink} from "react-router-dom";

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
                            <button className={s.button} onClick={() => props.unfollow(props.id)}>Unfollowed</button> :
                            <button className={s.button} onClick={() => props.follow(props.id)}>Followed</button>
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