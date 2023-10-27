import React from "react";
import "./Preloader.css"
import {ReactComponent as PreloaderImg} from "./../../../assets/images/load.svg";

let Preloader = () => {
    return (
        <div className={"preloaderDiv"}>
            <PreloaderImg/>
        </div>
    )
}

export default Preloader