import React from "react";
import {addPostCreateAction, updatePostCreateAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostCreateAction());
    }

    let onPostChange = function(newPostText)  {
            props.store.dispatch(updatePostCreateAction(newPostText));

    }
    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={onPostChange} addPost={addPost}/>
    );
}

export default MyPostsContainer;