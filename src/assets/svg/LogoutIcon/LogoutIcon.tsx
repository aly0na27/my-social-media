import * as React from "react";
import styles from "./LogoutIcon.module.css"

export const LogoutIcon: React.FC = () => {
    return (
        <svg className={styles.logoutIcon} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12H20M20 12L17 9M20 12L17 15"  strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17"
                  strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}