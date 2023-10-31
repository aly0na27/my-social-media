import styles from "./ButtonLogout.module.css"
import * as React from "react";
import {LogoutIcon} from "../../../assets/svg/LogoutIcon/LogoutIcon";

type PropsType = {
    logoutThunkCreate: () => void
}

export const ButtonLogout: React.FC<PropsType> = ({logoutThunkCreate}) => {
    return (
        <button onClick={logoutThunkCreate}
                className={styles.logoutBtn}>
            <LogoutIcon/>
        </button>
    )
}
