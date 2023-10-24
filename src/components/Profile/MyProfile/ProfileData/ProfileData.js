import Contacts from "../Contacts/Contacts";
import {ReactComponent as AtSignIcon} from "../../../../assets/images/Icon/AtSign.svg";
import {ReactComponent as ListIcon} from "../../../../assets/images/Icon/StatusList.svg";
import {ReactComponent as SearchJobIcon} from "../../../../assets/images/Icon/searchWork.svg";
import {ReactComponent as SkillsIcon} from "../../../../assets/images/Icon/skills.svg";

function ProfileData(props) {
    return (
        <div className={"profileDataWrapper"}>
            <div className={"profileInfo"}>
                <div className={"profileInfoItem"}>
                    <AtSignIcon/>
                    <span className={"fullName"}>
                        {props.fullName}
                    </span>
                </div>
                <div className={"profileInfoItem"}>
                    <ListIcon/>
                    About me:
                    <span className={"profileDataSpan"}>
                        {props.aboutMe ? props.aboutMe : undefined}
                    </span>
                </div>
            </div>

            <div className={"workInfo"}>
                <div className={"workInfoItem"}>
                    <SearchJobIcon/>
                    <span className={"profileDataSpan lookingForAJobSpan"}>
                        {props.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}
                    </span>
                </div>
                <div className={"workInfoItem"}>
                    <SkillsIcon/>
                    Skills:
                    <span className={"profileDataSpan"}>
                        {props.lookingForAJobDescription ? props.lookingForAJobDescription : undefined}
                    </span>
                </div>
            </div>

            <Contacts contacts={props.contacts}/>

        </div>
    )
}

export default ProfileData