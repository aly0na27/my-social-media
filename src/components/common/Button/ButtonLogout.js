import {ReactComponent as LogoutIcon} from "../../../assets/images/Icon/logout.svg";
import styles from "./ButtonLogout.module.css"
function ButtonLogout(props) {
    return (
        <button onClick={props.logoutThunkCreate}
                className={styles.logoutBtn}>
            <LogoutIcon className={styles.logoutImg}/>
        </button>
    )
}

export default ButtonLogout