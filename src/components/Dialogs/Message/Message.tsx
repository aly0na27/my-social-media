import s from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../types/types";

const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div>
            <div className={s.message}>
                {message}
            </div>
        </div>
    );
}

export default Message;