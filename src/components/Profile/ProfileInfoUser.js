import s from "./ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "./../../assets/images/iconProfile.svg"
import Status from "./Status";
import InputChangePhoto from "../common/Input/InputChangePhoto";
import {useState} from "react";
import ProfileData from "./MyProfile/ProfileData";
import ProfileFormContainer from "./MyProfile/ProfileFormData";

function ProfileInfo(props) {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div>
            <div className={s.background__profile}></div>
            <div className={s.profile}>
                <img src={props.profile.photos.large ? props.profile.photos.large : avatar} className={s.avatar}
                     alt=""/>

                <div className={s.description}>
                    <h3>
                        {props.profile.fullName}
                    </h3>
                    <Status status={props.status} updateProfileStatus={props.updateUserStatus} userId={props.userId}/>
                </div>
                {props.isOwner ? <InputChangePhoto updatePhoto={props.updatePhoto}/>
                    : undefined}
            </div>

            {editMode ? <ProfileFormContainer contacts={props.profile.contacts} /> : <ProfileData {...props.profile} isOwner={props.isOwner} editMode={editMode} setEditMode={setEditMode}/>}
            {/*{props.isOwner ? <button onClick={() => setEditMode(true)}>Edit profile</button> : undefined}*/}
        </div>
    )
}







export default ProfileInfo;