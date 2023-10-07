import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
function Header(props) {

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} className={styles.img} alt=""/>
                <span className={styles.logo__text}>Sociala.</span>
            </div>
            <div>
                {props.isAuth ?
                    <div className={styles.authUserContainer}>
                        <img className={styles.avatar} src={props.photos} alt={""}/>
                        <p className={styles.headerName}>{props.login}</p>
                    </div> :
                    <NavLink to={"/login"} className={styles.loginNavLink}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;