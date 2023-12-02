import styles from "./ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "../../assets/images/avatar.svg"
import Status from "./Status/Status";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import ModalWindow from "../common/ModalWindow/ModalWindow";
import InputChangePhoto from "../common/Input/InputChangePhoto";
import {IconMoreDetails} from "../../assets/svg/IconMoreDetails/IconMoreDetails";
import {ProfileForm} from "./MyProfile/ProfileFormData";
import {AppStateType, useAppDispatch} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import {updatePhoto, updateProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types/types";

const ProfileInfo: React.FC<{isOwner: boolean}> = ({isOwner}) => {
    const [moreDetailsActive, setMoreDetailsActive] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const ref = useRef(null)
    const dispatch = useAppDispatch()

    const profile = useSelector((state: AppStateType) => state.profilePage.profile)

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

    const updateMyProfile = (newData: ProfileType, setStatus, setEditMode) => {
        return dispatch(updateProfile(newData, setStatus, setEditMode))
    }

    const updateProfilePhoto = (newPhoto) => {
        return dispatch(updatePhoto(newPhoto))
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
                                <Status isOwner={isOwner}/>
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
                                <InputChangePhoto updatePhoto={updateProfilePhoto}/>
                            </div>
                        </div>
                        <ProfileForm setEditMode={setEditMode} profile={profile} updateProfile={updateMyProfile}/>
                    </div>
                    : undefined}
        </>
    )
}


export default ProfileInfo;