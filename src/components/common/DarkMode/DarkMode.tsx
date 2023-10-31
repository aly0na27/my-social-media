import styles from "./DarkMode.module.css";
import * as React from "react";
import {DarkModeIcon} from "../../../assets/svg/DarkModeIcon/DarkModeIcon";

type PropsType = {
    isDark: boolean,
    setIsDark: (isDark: boolean) => void
}

const DarkMode: React.FC<PropsType> = ({isDark, setIsDark}) => {
    return (
        <div className={styles.darkMode}>
            <input
                className={styles.darkModeInput}
                type='checkbox'
                id='darkmode-toggle'
                onChange={() => {
                    return isDark ? setIsDark(false) : setIsDark(true)
                }}
            />
            <label className={styles.darkModeLabel} htmlFor='darkmode-toggle'>
                {/*<Sun />*/}
                <DarkModeIcon/>
            </label>
        </div>
    );
};

export default DarkMode;
