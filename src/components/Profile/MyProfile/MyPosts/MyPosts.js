import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import newPostIcon from "../../../../assets/images/Icon/newPostIcon.svg"
import React from "react";
import AddPost from "./AddPostForm";

function MyPosts(props) {
    let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (newPostText) => {

        props.addPost(newPostText);

    }

    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.posts__item1}>
                    <img src={newPostIcon} className={classes.createNewPost__image} alt=""/>
                    <p>Create post</p>
                </div>
                <AddPost onAddPost={onAddPost}/>
            </div>
            <div>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;