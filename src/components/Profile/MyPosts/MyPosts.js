import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import newPostIcon from "./../../../images/newPostIcon.svg"
import React from "react";

function MyPosts(props) {
    let postsElements = props.state.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();


    let onButtonClick = () => {
        props.addPost();
    }

    let onPostChange = function()  {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }
    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.posts__item1}>
                    <img src={newPostIcon} className={classes.createNewPost__image} alt=""/>
                    <p>Create post</p>
                </div>
                <div className={classes.posts__item2}>
                    <textarea onChange={onPostChange} ref={newPostElement} className={classes.textarea} value={props.state.profilePage.newPostText}/>
                    <button onClick={onButtonClick} className={classes.btn}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;