import ProfileInfoUser from "./ProfileInfoUser";
import * as React from "react";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    isOwner: boolean,
    profile: ProfileType,
    status: string,
    userId: number,
    isUpdateProfile: boolean,
    updateUserStatus: (status: string) => void,
    updatePhoto: (photo: string) => void,
    updateProfile: (profile: ProfileType) => void
}

const Profile: React.FC<PropsType> = ({isOwner, userId, isUpdateProfile, updateUserStatus,
                                        updatePhoto, updateProfile, profile, status}) => {
    return (
        <div>
            <ProfileInfoUser isOwner={isOwner} profile={profile}  status={status} isUpdateProfile={isUpdateProfile}
                             updateUserStatus={updateUserStatus} updatePhoto={updatePhoto} updateProfile={updateProfile}
                             userId={userId} />
            {/*<MyPostsContainer/>*/}
        </div>
    );
}

export default Profile;