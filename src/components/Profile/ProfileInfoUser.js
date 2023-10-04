import s from "./MyProfile/ProfileInfo/ProfileInfo.module.css"
import Preloader from "../common/Preloader/Preloader";
import avatar from "./../../assets/images/iconProfile.svg"
function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger;
    return (
        <div>
            <div className={s.background__profile}></div>
            <div className={s.profile}>
                <img src={props.profile.photos.small ? props.profile.photos.small : avatar} className={s.avatar} alt=""/>
                <div className={s.description}>
                    <h3>
                        {props.profile.fullName}
                    </h3>
                    <p>
                        {props.profile.aboutMe}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;