import MyPostsContainer from "./MyProfile/MyPosts/MyPostsContainer";
import ProfileInfoUser from "./ProfileInfoUser";

function Profile(props) {
    return (
        <div>
            <ProfileInfoUser {...props} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;