import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import SendMessage from "./AddMessageForm";
import {DialogType, MessageType} from "../../types/types";

interface Props {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (newMessage: string) => void
}

const Dialogs: React.FC<Props> = ({dialogs, messages, addMessage}) => {
    let onAddMessage = (newMessage) => {
        addMessage(newMessage);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>)}
                </div>
                <div className={s.messages}>
                    <div className={s.messageBar}>
                        {messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)}
                    </div>

                    <div className={s.sendBar}>
                        <SendMessage onAddMessage={onAddMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;