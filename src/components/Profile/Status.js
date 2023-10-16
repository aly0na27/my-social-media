import React, {useEffect, useState} from "react"

function Status(props) {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status)
    }

    const onChangeStatus = (newStatus) => {
        setStatus(newStatus.target.value)
    }

    return (
        <div>
            {
                !editMode ?
                    <div>
                        <span onClick={activateEditMode}>
                            {props.status ? props.status : "----"}
                        </span>
                    </div> :
                    <div>
                        <input onBlur={deactivateEditMode}
                               autoFocus={editMode}
                               value={status}
                               onChange={onChangeStatus}
                        >

                        </input>
                    </div>
            }
        </div>
    )
}

export default Status