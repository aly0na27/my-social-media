import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import iconSend from "../../assets/images/iconSend.svg"
import React from "react";
import {Navigate} from "react-router-dom";

function Dialogs(props) {
    // if (!props.isAuth) {
    //     return <Navigate to={"/login"}/>
    // }
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar}/>);

    let messageElements = props.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>);

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
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
                        <textarea placeholder={"Enter your message"} onChange={onMessageChange}  className={s.messagesTextarea} value={props.newMessageText}></textarea>
                        <button onClick={onAddMessage} className={s.btnSend}>
                            <img src={iconSend} className={s.imgSend} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;