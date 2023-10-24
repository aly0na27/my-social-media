import React from "react";
import {ReactComponent as Moon} from "../../../assets/images/Icon/dark-mode.svg";
import styles from "./DarkMode.module.css";

const DarkMode = (props) => {
    return (
        <div className={styles.darkMode}>
            <input
                className={styles.darkModeInput}
                type='checkbox'
                id='darkmode-toggle'
                onChange={() => {
                    return props.isDark ? props.setIsDark(false) : props.setIsDark(true)
                }}
            />
            <label className={styles.darkModeLabel}>
                {/*<Sun />*/}
                <Moon />

            </label>
        </div>
    );
};

export default DarkMode;
