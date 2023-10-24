import styles from "./ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "../../assets/images/Icon/iconProfile.svg"
import Status from "./Status/Status";
import {useState} from "react";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import {ReactComponent as IconMoreDetails} from "../../assets/images/Icon/moreDetails.svg";
import ProfileFormDataRedux from "./MyProfile/ProfileFormData";

function ProfileInfo(props) {
    const [moreDetailsActive, setMoreDetailsActive] = useState(false);
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

                    <div className={styles.moreDetails}>
                        <button className={styles.btnMoreDetails} onClick={() => {
                            setMoreDetailsActive(true)
                        }}>
                            <IconMoreDetails/>
                            More details
                        </button>
                    </div>
                </div>
                <div className={styles.editProfile}>
                    {props.isOwner ?
                        <button className={styles.btnEditProfile} onClick={() => setEditMode(true)}>
                            Edit profile
                        </button> : undefined
                    }
                </div>

            </div>

            <ModalWindow moreDetailsActive={moreDetailsActive} setMoreDetailsActive={setMoreDetailsActive}
                         profile={props.profile} contacts={props.profile.contacts}/>

            {
                editMode ?
                    <ProfileFormDataRedux initialValues={props.profile}
                                          contacts={props.profile.contacts}
                                          onSubmit={onSubmit}/>
                    : undefined}
        </>
    )
}


export default ProfileInfo;