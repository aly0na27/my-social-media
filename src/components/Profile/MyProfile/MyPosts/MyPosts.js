import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import newPostIcon from "../../../../assets/images/newPostIcon.svg"
import React from "react";

function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = function()  {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.posts__item1}>
                    <img src={newPostIcon} className={classes.createNewPost__image} alt=""/>
                    <p>Create post</p>
                </div>
                <div className={classes.posts__item2}>
                    <textarea onChange={onPostChange} ref={newPostElement} className={classes.textarea} value={props.newPostText}/>
                    <button onClick={onAddPost} className={classes.btn}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;