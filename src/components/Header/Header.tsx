import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import avatar from "./../../assets/images/avatar.svg"
import {ButtonLogout} from "../common/Button/ButtonLogout";
import DarkMode from "../common/DarkMode/DarkMode";
import * as React from "react";
import {LogoIcon} from "../../assets/svg/LogoIcon/LogoIcon";
import {HeaderProps} from "./HeaderContainer";

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <LogoIcon/>
                <span className={styles.logo__text}>Sociala.</span>
            </div>
            <div className={styles.authUserContainer}>
                <DarkMode isDark={props.isDark} setIsDark={props.setIsDark}/>
                {props.isAuth ?
                    <>
                        <ButtonLogout logoutThunkCreate={props.logoutThunkCreate}/>
                        <NavLink to={"/profile"}>
                            <img className={styles.avatar}
                             src={props.photos ? props.photos : avatar}
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