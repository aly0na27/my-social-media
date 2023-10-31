import iconNews from "../../assets/images/Icon/iconNews.svg"
import iconMessages from "../../assets/images/Icon/iconMessages.svg"
import iconProfile from "../../assets/images/Icon/iconProfile.svg"
import iconMusic from "../../assets/images/Icon/iconMusic.svg"
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import * as React from "react";

const Navbar: React.FC = () => {
    return (
            <nav>
                <div className={styles.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? styles.nav__itemLinkActiveLink : styles.nav__itemLinkInactiveLink}
                        to="/profile">
                        <img src={iconProfile} className={styles.nav__itemImage} alt=""/>
                        <span className={styles.span}>
                        Profile
                    </span>
                    </NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? styles.nav__itemLinkActiveLink : styles.nav__itemLinkInactiveLink}
                        to="/news">
                        <img src={iconNews} className={styles.nav__itemImage} alt=""/>
                        <span className={styles.span}>
                        News
                    </span>
                    </NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink className={navData => navData.isActive ? styles.nav__itemLinkActiveLink : styles.nav__itemLinkInactiveLink}
                             to="/users">
                        <img src={iconNews} className={styles.nav__itemImage} alt=""/>
                        <span className={styles.span}>
                            Find Users
                        </span>
                    </NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? styles.nav__itemLinkActiveLink : styles.nav__itemLinkInactiveLink}
                        to="/dialogs">
                        <img src={iconMessages} className={styles.nav__itemImage} alt=""/>
                        <span className={styles.span}>
                        Messages
                    </span>
                    </NavLink>
                </div>
                <div className={styles.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? styles.nav__itemLinkActiveLink : styles.nav__itemLinkInactiveLink}
                        to="/music">
                        <img src={iconMusic} className={styles.nav__itemImage} alt=""/>
                        <span className={styles.span}>
                        Music
                    </span>
                    </NavLink>
                </div>
            </nav>
    );
}

export default Navbar;