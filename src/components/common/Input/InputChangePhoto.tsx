import styles from "./InputChangePhoto.module.css"
import * as React from "react";

type PropsType = {
    updatePhoto: (file: string) => void
}

const InputChangePhoto: React.FC<PropsType> = ({updatePhoto}) => {

    let selectPhoto = (e) => {
        let file = e.target.files[0]
        updatePhoto(file)
    }
    return (
        <div className={styles.edit}>
            <label htmlFor="myfile" className={styles.label} >Select file</label>
            <input type="file" className={styles.my} id="myfile" onChange={selectPhoto} name="myfile"/>
        </div>
    )
}

export default InputChangePhoto