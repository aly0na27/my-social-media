import ProfileInfoUser from "./ProfileInfoUser";
import * as React from "react";
import {ProfileType} from "../../types/types";

type PropsType = {
    isOwner: boolean,
    profile: ProfileType,
    status: string,
    userId: number,
    updateUserStatus: (status: string) => void,
    updatePhoto: (photo: string) => void,
    updateProfile: (profile: ProfileType, setStats, setEditMode) => void
}

const Profile: React.FC<PropsType> = ({isOwner, userId, updateUserStatus,
                                        updatePhoto, updateProfile, profile, status}) => {
    return (
        <div>
            <ProfileInfoUser isOwner={isOwner} profile={profile}  status={status}
                             updateUserStatus={updateUserStatus} updatePhoto={updatePhoto} updateProfile={updateProfile}
                             userId={userId} />
            {/*<MyPostsContainer/>*/}
        </div>
    );
}

export default Profile;