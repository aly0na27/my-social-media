import logo from "../../images/logo.svg";
import classes from "./Header.module.css"
function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} className={classes.img} alt=""/>
            <span className={classes.logo__text}>Sociala.</span>
        </header>
    );
}

export default Header;