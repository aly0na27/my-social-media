import styles from "./ModalWindow.module.css"
import ProfileData from "../../Profile/MyProfile/ProfileData/ProfileData";
import * as React from "react";
import {ProfileType} from "../../../redux/profile-reducer";

type PropsType = {
    moreDetailsActive: boolean,
    setMoreDetailsActive: (isActive: boolean) => void,
    profile: ProfileType,
}
const ModalWindow: React.FC<PropsType> = ({moreDetailsActive, setMoreDetailsActive, profile}) => {
    if (!moreDetailsActive) {
        return;
    }

    return (
        <div>
            <div className={styles.modalWindow}>
                <div className={styles.title}>
                    <div>
                        <span className={styles.logo__text}>
                            Detailed information
                        </span>
                    </div>

                        <button className={styles.closeModalWindow} onClick={() => setMoreDetailsActive(false)}>&times;</button>
                </div>
                <div className={styles.profileInfo}>
                    <ProfileData profile={profile}/>
                </div>
            </div>
            <div className={styles.overlay} onClick={() => setMoreDetailsActive(false)}></div>
        </div>
    )
}

export default ModalWindow