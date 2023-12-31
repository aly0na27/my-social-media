import s from "./User.module.css"
import avatarIcon from "./../../../assets/images/avatar.svg"
import {NavLink} from "react-router-dom";
import * as React from "react";
import {useState} from "react";
import Skeleton from "@mui/material/Skeleton";


type PropsType = {
    id: number,
    name: string,
    photos: string,
    followed: boolean,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

const User: React.FC<PropsType> = ({id, name, photos, followingInProgress, followed, follow, unfollow}) => {

    const [loading, setLoading] = useState(true);

    return (
        <div className={s.userWrapper}>
            <NavLink to={'/profile/' + id}>

                <img src={photos !== null ? photos : avatarIcon}
                     className={s.userIcon} alt={""}
                     onLoad={e => setLoading(false)}
                />
                {loading &&
                    <Skeleton animation={"wave"} variant={"circular"} sx={{width: "7rem", height: "7rem"}}/>
                }
            </NavLink>
            {
                <NavLink className={s.nameUser__link} to={"/profile/" + id}>
                    <h3 className={s.nameUser}>{name}</h3>
                </NavLink>
            }
            <div className={s.wrapperButton}>
                {
                    followed ?
                        <button disabled={followingInProgress.some(userId => id === userId)}
                                className={s.button + ' ' + s.activeBtn}
                                onClick={() => {
                                    unfollow(id);
                                }}>
                            Unfollowed
                        </button> :
                        <button disabled={!!followingInProgress.some(userId => id === userId)}
                                className={s.button + ' ' + s.disactiveBtn}
                                onClick={() => {
                                    follow(id);
                                }}>
                            Followed
                        </button>
                }
            </div>
        </div>
    )
}

export default User;