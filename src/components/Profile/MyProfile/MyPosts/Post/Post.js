 import classes from "./Post.module.css"
import avatar from "../../../../../assets/images/avatar1.jpg"
import like from "../../../../../assets/images/Icon/like.svg"
function Post(props) {
    return (
        <div className={classes.item}>
            <div className={classes.header}>
                <img src={avatar} className={classes.img} alt=""/>
                <div className={classes.name}>
                    <h4>Alyona Kravchenko</h4>
                    <p>{props.time}</p>
                </div>
            </div>
            <div className={classes.main}>
                <p className={classes.text}>
                    {props.message}
                </p>
            </div>
            <div className={classes.like}>
                <button className={classes.like__btn}>
                    <img src={like} className={classes.like__img} alt=""/>
                    <span>Like </span>{props.likesCount}
                </button>
            </div>
        </div>
    )
}

export default Post;