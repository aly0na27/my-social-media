import styles from "./ModalWindow.module.css"
import ProfileData from "../../Profile/MyProfile/ProfileData/ProfileData";

// import scrollLock from "scroll-lock/dist/scroll-lock";

function ModalWindow(props) {
    if (!props.moreDetailsActive) {
        return;
    }
    // scrollLock.disablePageScroll()

    return (
        <div>
            <div className={styles.modalWindow}>
                <div className={styles.title}>
                    <div>
                        <span className={styles.logo__text}>
                            Detailed information
                        </span>
                    </div>

                        <button className={styles.closeModalWindow} onClick={() => props.setMoreDetailsActive(false)}>&times;</button>
                </div>
                <div className={styles.profileInfo}>
                    <ProfileData {...props.profile}/>
                </div>
                    {/*<ProfileFormDataRedux initialValues={props.profile} contacts={props.profile.contacts}*/}
                {/*                      onSubmit={onSubmit}/>*/}
            </div>
            <div className={styles.overlay} onClick={() => props.setMoreDetailsActive(false)}></div>
            {/*{props.isOwner ? <InputChangePhoto updatePhoto={props.updatePhoto}/>*/}
            {/*    : undefined}*/}
        </div>
    )
}

export default ModalWindow