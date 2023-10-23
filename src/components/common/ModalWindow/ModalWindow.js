import styles from "./ModalWindow.module.css"
import ProfileFormDataRedux from "../../Profile/MyProfile/ProfileFormData";
function ModalWindow(props) {
    if (!props.editMode) {
        return;
    }
    const onSubmit = (dataForm) => {
        props.updateProfile(dataForm)
        if (props.isUpdateProfile) {
            props.setEditMode(false)
        }
    }

    debugger
    return (
        <div>
            <div className={styles.modalWindow}>
                <div>
                    <button className={styles.closeModalWindow} onClick={() => props.setEditMode(false)}>&times;</button>
                </div>
                <ProfileFormDataRedux initialValues={props.profile} contacts={props.profile.contacts}
                                      onSubmit={onSubmit}/>
            </div>
            <div className={styles.overlay} onClick={() => props.setEditMode(false)}></div>
        </div>
    )
}

export default ModalWindow