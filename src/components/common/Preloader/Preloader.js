import preloader from "../../../assets/images/load.svg";
import React from "react";
import "./Preloader.css"
let Preloader = () => {
    debugger
    return (
        <div className={"preloaderDiv"}>
            <img className={"preloaderImg"} src={preloader} alt=""/>
        </div>
    )
}

export default Preloader