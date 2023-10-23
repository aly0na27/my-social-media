import styles from "./ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "./../../assets/images/iconProfile.svg"
import Status from "./Status/Status";
import InputChangePhoto from "../common/Input/InputChangePhoto";
import {useState} from "react";
import ModalWindow from "../common/ModalWindow/ModalWindow";

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
        <>
            <div className={styles.background__profile}></div>
            <div className={styles.wrapperProfile}>
                <div className={styles.profile}>
                    <img
                        src={(props.profile.photos && props.profile.photos.large) ? props.profile.photos.large : avatar}
                        className={styles.avatar}
                        alt=""/>

                    <div className={styles.description}>
                        <h3>
                            {props.profile.fullName}
                        </h3>
                        <Status status={props.status} updateProfileStatus={props.updateUserStatus}
                                userId={props.userId}/>
                    </div>
                </div>
                <div className={styles.editProfile}>
                    <button className={styles.btnEditProfile} onClick={() => {
                        debugger
                        setEditMode(true)
                    }
                    }>Edit profile</button>
                </div>
            </div>
            {props.isOwner ? <InputChangePhoto updatePhoto={props.updatePhoto}/>
                : undefined}
            <ModalWindow  editMode={editMode} setEditMode={setEditMode} profile={props.profile} contacts={props.profile.contacts} updateProfile={props.updateProfile}/>
            {/*{editMode ? <ProfileFormDataRedux initialValues={props.profile} contacts={props.profile.contacts}*/}
            {/*                                  onSubmit={onSubmit}/> :*/}
            {/*    <ProfileData {...props.profile} isOwner={props.isOwner} editMode={editMode} setEditMode={setEditMode}/>}*/}
        </>
    )
}


export default ProfileInfo;