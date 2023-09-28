import s from "./User.module.css"

function User(props) {
    return (
        <div>
            <div className={s.leftbar}></div>
            <div className={s.avatar}>
            </div>
            {
                props.followed ? <button onClick={() => props.unfollow(props.id)}>Unfollowed</button> :
                    <button onClick={() => props.follow(props.id)}>Followed</button>
            }


            {
                props.fullName
            }
        </div>
    )
}

export default User;