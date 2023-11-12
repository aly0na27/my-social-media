import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../types/types";
import React from "react";

const DialogItem = (props: DialogType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.dialogAvatar} src={props.avatar} alt=""/>
            <NavLink className={s.nameDialog} to={path}><img src="../../../assets/images/avatar1.jpg" alt=""/>{props.name}</NavLink>

        </div>
    )
}

export default DialogItem;