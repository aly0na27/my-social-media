import ProfileInfoUser from "./ProfileInfoUser";
import * as React from "react";

type PropsType = {
    isOwner: boolean,
}

const Profile: React.FC<PropsType> = ({isOwner}) => {
    return (
        <main>
            <ProfileInfoUser isOwner={isOwner}/>
            {/*<MyPostsContainer/>*/}
        </main>
    );
}

export default Profile;