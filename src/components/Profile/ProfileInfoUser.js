import s from "./ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "./../../assets/images/iconProfile.svg"
import Status from "./Status";
import InputChangePhoto from "../common/Input/InputChangePhoto";
import {useState} from "react";
import ProfileData from "./MyProfile/ProfileData";
import ProfileFormDataRedux from "./MyProfile/ProfileFormData";

function ProfileInfo(props) {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onSubmit = (dataForm) => {
        props.updateProfile(dataForm)
        if (props.isUpdateProfile) {
            setEditMode(false)
        }
    }

    return (
        <div>
            <div className={s.background__profile}></div>
            <div className={s.profile}>
                <img src={(props.profile.photos && props.profile.photos.large) ? props.profile.photos.large : avatar} className={s.avatar}
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

            {editMode ? <ProfileFormDataRedux initialValues={props.profile} contacts={props.profile.contacts} onSubmit={onSubmit}/> : <ProfileData {...props.profile} isOwner={props.isOwner} editMode={editMode} setEditMode={setEditMode}/>}
        </div>
    )
}







export default ProfileInfo;