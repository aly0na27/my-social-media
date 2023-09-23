import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import iconSend from "./../../images/iconSend.svg"
import React from "react";
import {addMessageCreateAction, updateMessageCreateAction} from "../../redux/dialogs-reducer";

function Dialogs(props) {


    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messageElements = props.state.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>);

    // let addNewMessage = React.createRef();
    let sendMessageOnclick = () => {
        debugger
        props.dispatch(addMessageCreateAction());

    }

    let messageChanged = (e) => {
        let text = e.target.value;
        // let text = addNewMessage.current.value;
        props.dispatch(updateMessageCreateAction(text));

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
                        <textarea placeholder={"Enter your message"} onChange={messageChanged}  className={s.messagesTextarea} value={props.state.dialogsPage.newMessageText}></textarea>
                        <button onClick={sendMessageOnclick} className={s.btnSend}>
                            <img src={iconSend} className={s.imgSend} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;