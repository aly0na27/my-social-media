import styles from "./Preloader.module.css"
import {PreloaderIcon} from "../../../assets/svg/PreloaderIcon/PreloaderIcon";
import * as React from "react";

const Preloader: React.FC = () => {
    return (
        <div className={styles.preloaderDiv}>
            <PreloaderIcon/>
        </div>
    )
}

export default Preloader