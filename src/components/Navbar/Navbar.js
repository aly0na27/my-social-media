import iconNews from "../../images/iconNews.svg"
import iconMessages from "../../images/iconMessages.svg"
import iconProfile from "../../images/iconProfile.svg"
import iconMusic from "../../images/iconMusic.svg"
import iconSettings from "../../images/iconSettings.svg"
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import SiteBar from "./Sitebar/SiteBar";

function Navbar(props) {
    return (
        <div className={classes.nav}>
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
                <div className={classes.nav__item}>
                    <NavLink
                        className={navData => navData.isActive ? classes.nav__itemLinkActiveLink : classes.nav__itemLinkInactiveLink}
                        to="/settings">
                        <img src={iconSettings} className={classes.nav__itemImage} alt=""/>
                        <span className={classes.span}>
                        Settings
                    </span>
                    </NavLink>
                </div>
            </nav>
            {/*<SiteBar/>*/}
        </div>
    );
}

export default Navbar;