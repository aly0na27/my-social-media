import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import avatar from "./../../assets/images/avarar.jpg"
import ButtonLogout from "../common/Button/ButtonLogout";
import DarkMode from "../common/DarkMode/DarkMode";

function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Logo/>
                <span className={styles.logo__text}>Sociala.</span>
            </div>
            <div className={styles.authUserContainer}>
                <DarkMode isDark={props.isDark} setIsDark={props.setIsDark}/>
                {props.isAuth ?
                    <>
                        <ButtonLogout logoutThunkCreate={props.logoutThunkCreate}/>
                        <NavLink to={"/profile"}>
                            <img className={styles.avatar}
                             src={(props.profile && props.profile.photos) ? props.profile.photos.small : avatar}
                             alt={""}/>
                        </NavLink>


                    </> :
                    <div>
                        <NavLink to={"/login"} className={styles.loginNavLink}>Login</NavLink>
                    </div>
                }
            </div>

        </header>
    );
}

export default Header;