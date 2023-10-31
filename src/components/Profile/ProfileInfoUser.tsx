import styles from "./ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "../../assets/images/avatar.svg"
import Status from "./Status/Status";
import {useEffect, useRef, useState} from "react";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import ProfileFormDataRedux from "./MyProfile/ProfileFormData";
import InputChangePhoto from "../common/Input/InputChangePhoto";
import {ProfileType} from "../../redux/profile-reducer";
import * as React from "react";
import {IconMoreDetails} from "../../assets/svg/IconMoreDetails/IconMoreDetails";

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
const ProfileInfo: React.FC<PropsType> = ({isOwner, userId, isUpdateProfile, updateUserStatus,
                         updatePhoto, updateProfile, profile, status}) => {

    const [moreDetailsActive, setMoreDetailsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const ref = useRef(null)

    useEffect(() => {
        moreDetailsActive ? document.querySelector("body").classList.add("lock") :
            document.querySelector("body").classList.remove("lock");
        if (editMode) {
            ref.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [moreDetailsActive, editMode])

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (dataForm) => {
        updateProfile(dataForm)
        if (isUpdateProfile) {
            setEditMode(false)
        }
    }

    return (
        <>
            <div className={styles.sectionProfile}>
                <div className={styles.background__profile}></div>
                <div className={styles.wrapperProfile}>
                    <div className={styles.profile}>
                        <img
                            src={(profile.photos && profile.photos.large) ? profile.photos.large : avatar}
                            className={styles.avatar}
                            alt=""/>

                        <div className={styles.description}>
                            <h3>
                                {profile.fullName}
                            </h3>
                            {
                                <Status isOwner={isOwner} status={status} updateProfileStatus={updateUserStatus}/>
                            }
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
                        {isOwner ?
                            <button className={styles.btnEditProfile}
                                    onClick={() => {
                                        setEditMode(true);
                                        ref.current?.scrollIntoView({behavior: "smooth"})
                                    }}>
                                Edit profile
                            </button> : undefined
                        }
                    </div>

                </div>
            </div>
            <ModalWindow moreDetailsActive={moreDetailsActive} setMoreDetailsActive={setMoreDetailsActive}
                         profile={profile}/>

            {
                editMode ?
                    <div ref={ref} className={styles.profileFormData}>
                        <div className={styles.changePhotoSection}>
                            <h3>Change photo</h3>
                            <div className={styles.profilePhotoEdit}>
                                <img
                                    src={(profile.photos && profile.photos.large) ? profile.photos.large : avatar}
                                    className={styles.avatar}
                                    alt=""/>
                                <InputChangePhoto updatePhoto={updatePhoto}/>
                            </div>
                        </div>
                        <ProfileFormDataRedux initialValues={profile}
                                              contacts={profile.contacts}
                                              onSubmit={onSubmit}/>
                    </div>
                    : undefined}
        </>
    )
}


export default ProfileInfo;