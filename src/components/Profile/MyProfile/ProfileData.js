import Contacts from "./Contacts";

function ProfileData(props) {
    return (
        <div>
            {
                props.aboutMe ?
                    <div>
                        About me <span> {props.aboutMe}</span>
                    </div> :
                    undefined
            }
            {
                props.lookingForAJob !== null ?
                    <div>
                        Am I work? <span> {props.lookingForAJob ? "yes" : "no"}</span>
                    </div> :
                    undefined
            }
            {
                props.lookingForAJobDescription ?
                    <div>
                        Professional skills <span> {props.lookingForAJobDescription}</span>
                    </div> :
                    undefined
            }
            <Contacts contacts={props.contacts}/>
            {props.isOwner ? <button onClick={() => props.setEditMode(true)}>Edit profile</button> : undefined}

        </div>
    )
}

export default ProfileData