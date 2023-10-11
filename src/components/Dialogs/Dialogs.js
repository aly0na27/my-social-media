import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import SendMessage from "./AddMessageForm";

function Dialogs(props) {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);

    let messageElements = props.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>);

    let onAddMessage = (newMessage) => {
        props.addMessage(newMessage);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div className={s.messageBar}>
                        {messageElements}
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