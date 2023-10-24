import styles from "./InputChangePhoto.module.css"
import {updatePhoto} from "../../../redux/profile-reducer";
function InputChangePhoto(props) {

    let selectPhoto = (e) => {
        let file = e.target.files[0]
        props.updatePhoto(file)
    }
    return (
        <div className={styles.edit}>
            <label htmlFor="myfile" className={styles.label} >Select file</label>
            <input type="file" className={styles.my} id="myfile" onChange={selectPhoto} name="myfile"/>
        </div>
    )
}

export default InputChangePhoto