import React from "react";
import {addPostCreateAction, updatePostCreateAction} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

// function MyPostsContainer(props) {
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//             let state = store.getState();
//             let addPost = () => {
//                 store.dispatch(addPostCreateAction());
//             }
//
//             let onPostChange = function(newPostText)  {
//                 store.dispatch(updatePostCreateAction(newPostText));
//
//             }
//             return <MyPosts posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}
//                             updateNewPostText={onPostChange}
//                             addPost={addPost}/>
//         }}</StoreContext.Consumer>
//
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostCreateAction(text));
        },
        addPost: () => {
            dispatch(addPostCreateAction());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;