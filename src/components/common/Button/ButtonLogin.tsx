import styles from "./ButtonLogin.module.css";
import * as React from "react";

const ButtonLogin: React.FC = () => {
    return (
        <button className={styles.customBtn}>
            <span>
                Login
            </span>
        </button>
    )
}

export default ButtonLogin;