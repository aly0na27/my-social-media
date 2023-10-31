import {useEffect, useState} from "react"
import styles from "./Status.module.css"
import * as React from "react";

type PropsType = {
    status: string,
    updateProfileStatus: (newStatus: string) => void,
    isOwner: boolean
}

const Status: React.FC<PropsType> = ({status, updateProfileStatus, isOwner}) => {
    const [localStatus, setLocalStatus] = useState(status);
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setLocalStatus(status)
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateProfileStatus(localStatus)
    }

    const onChangeStatus = (newStatus: React.ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(newStatus.target.value)
    }

    return (
        <div>
            {
                isOwner ?
                    (!editMode ?
                    <div>
                        <span onClick={activateEditMode}>
                            {status ? status : "----"}
                        </span>
                    </div> :
                    <div>
                        <input className={styles.statusInput} onBlur={deactivateEditMode}
                               autoFocus={editMode}
                               value={localStatus}
                               onChange={onChangeStatus}
                        >

                        </input>
                    </div>)
                    :
                    <div>
                        <span>
                            {status ? status : "----"}
                        </span>
                    </div>
            }
        </div>
    )
}

export default Status