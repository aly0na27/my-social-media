import iconNews from "../../assets/images/Icon/iconNews.svg"
import iconMessages from "../../assets/images/Icon/iconMessages.svg"
import iconProfile from "../../assets/images/Icon/iconProfile.svg"
import iconMusic from "../../assets/images/Icon/iconMusic.svg"
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
            <nav>
                <div className={classes.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? classes.nav__itemLinkActiveLink : classes.nav__itemLinkInactiveLink}
                        to="/profile">
                        <img src={iconProfile} className={classes.nav__itemImage} alt=""/>
                        <span className={classes.span}>
                        Profile
                    </span>
                    </NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? classes.nav__itemLinkActiveLink : classes.nav__itemLinkInactiveLink}
                        to="/news">
                        <img src={iconNews} className={classes.nav__itemImage} alt=""/>
                        <span className={classes.span}>
                        News
                    </span>
                    </NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink className={navData => navData.isActive ? classes.nav__itemLinkActiveLink : classes.nav__itemLinkInactiveLink}
                             to="/users">
                        <img src={iconNews} className={classes.nav__itemImage} alt=""/>
                        <span className={classes.span}>
                            Find Users
                        </span>
                    </NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? classes.nav__itemLinkActiveLink : classes.nav__itemLinkInactiveLink}
                        to="/dialogs">
                        <img src={iconMessages} className={classes.nav__itemImage} alt=""/>
                        <span className={classes.span}>
                        Messages
                    </span>
                    </NavLink>
                </div>
                <div className={classes.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? classes.nav__itemLinkActiveLink : classes.nav__itemLinkInactiveLink}
                        to="/music">
                        <img src={iconMusic} className={classes.nav__itemImage} alt=""/>
                        <span className={classes.span}>
                        Music
                    </span>
                    </NavLink>
                </div>
            </nav>
    );
}

export default Navbar;