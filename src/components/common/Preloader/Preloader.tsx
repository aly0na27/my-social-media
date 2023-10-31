import "./Preloader.css"
import {PreloaderIcon} from "../../../assets/svg/PreloaderIcon/PreloaderIcon";
import * as React from "react";

const Preloader: React.FC = () => {
    return (
        <div className={"preloaderDiv"}>
            <PreloaderIcon/>
        </div>
    )
}

export default Preloader