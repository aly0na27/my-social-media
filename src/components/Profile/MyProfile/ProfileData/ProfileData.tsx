import Contacts from "../Contacts/Contacts";
import "./ProfileData.css"
import {AtSignIcon} from "../../../../assets/svg/AtSignIcon/AtSignIcon";
import * as React from "react";
import {ListIcon} from "../../../../assets/svg/ListIcon/ListIcon";
import {SearchJobIcon} from "../../../../assets/svg/SearchJobIcon/SearchJobIcon";
import {SkillsIcon} from "../../../../assets/svg/SkillsIcon/SkillsIcon";
import {ProfileType} from "../../../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType
}

const ProfileData: React.FC<PropsType> = ({profile}) => {
    return (
        <div className={"profileDataWrapper"}>
            <div className={"profileInfo"}>
                <div className={"profileInfoItem"}>
                    <AtSignIcon/>
                    <span className={"fullName"}>
                        {profile.fullName}
                    </span>
                </div>
                <div className={"profileInfoItem"}>
                    <ListIcon/>
                    About me:
                    <span className={"profileDataSpan"}>
                        {profile.aboutMe ? profile.aboutMe : undefined}
                    </span>
                </div>
            </div>

            <div className={"workInfo"}>
                <div className={"workInfoItem"}>
                    <SearchJobIcon/>
                    <span className={"profileDataSpan lookingForAJobSpan"}>
                        {profile.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}
                    </span>
                </div>
                <div className={"workInfoItem"}>
                    <SkillsIcon/>
                    Skills:
                    <span className={"profileDataSpan"}>
                        {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : undefined}
                    </span>
                </div>
            </div>
            <Contacts contacts={profile.contacts}/>
        </div>
    )
}

export default ProfileData