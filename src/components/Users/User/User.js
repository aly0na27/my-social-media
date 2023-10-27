import s from "./User.module.css"
import avatarIcon from "./../../../assets/images/avatar.svg"
import {NavLink} from "react-router-dom";

function User(props) {
    return (
        <div className={s.userWrapper}>
            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos !== null ? props.photos : avatarIcon} className={s.userIcon} alt={""}/>
            </NavLink>
            {
                <NavLink className={s.nameUser__link} to={"/profile/" + props.id}>
                    <h3 className={s.nameUser}>{props.name}</h3>
                </NavLink>
            }
            <div className={s.wrapperButton}>
                {
                    props.followed ?
                        <button disabled={props.followingInProgress.some(id => id === props.id)}
                                className={s.button + ' ' + s.activeBtn}
                                onClick={() => {
                                    props.setUnfollow(props.id);
                                }}>
                            Unfollowed
                        </button> :
                        <button disabled={!!props.followingInProgress.some(id => id === props.id)}
                                className={s.button + ' ' + s.disactiveBtn}
                                onClick={() => {
                                    props.setFollow(props.id);
                                }}>
                            Followed
                        </button>
                }
            </div>
        </div>
    )
}

export default User;