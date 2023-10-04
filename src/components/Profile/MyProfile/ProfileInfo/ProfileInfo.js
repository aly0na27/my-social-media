import s from "./ProfileInfo.module.css"
import avatar from "../../../../assets/images/avatar1.jpg";
import Preloader from "../../../common/Preloader/Preloader";

function ProfileInfo(props) {

    return (
        <div>
            <div className={s.background__profile}></div>
            <div className={s.profile}>
                <img src={avatar} className={s.avatar} alt=""/>
                <div className={s.description}>
                    <h3>
                        Alyona Kravchenko
                    </h3>
                    <p>
                        alenakravchenko1910@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;