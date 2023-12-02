import {useEffect, useState} from "react"
import styles from "./Status.module.css"
import * as React from "react";
import {AppStateType, useAppDispatch} from "../../../redux/redux-store";
import {useSelector} from "react-redux";
import {updateUserStatus} from "../../../redux/profile-reducer";

type PropsType = {
    isOwner: boolean
}

const Status: React.FC<PropsType> = ({isOwner}) => {

    const status = useSelector((state: AppStateType) => state.profilePage.status)

    const [localStatus, setLocalStatus] = useState(status);
    const [editMode, setEditMode] = useState(false)
    const dispatch = useAppDispatch()


    useEffect(() => {
        setLocalStatus(status)
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(updateUserStatus(localStatus))
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