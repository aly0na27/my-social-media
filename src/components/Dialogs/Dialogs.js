import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import iconSend from "./../../images/iconSend.svg"
import React from "react";
function Dialogs(props) {


    let dialogsElements = props.state.messagePage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messageElements = props.state.messagePage.messages.map(m => <Message id={m.id} message={m.message}/>);

    let addNewMessage = React.createRef();
    let sendMessageOnclick = () => {
        debugger
        props.addMessage();

    }

    let messageChanged = () => {
        let text = addNewMessage.current.value;
        props.updateMessage(text);
        console.log(text);
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
                        <textarea onChange={messageChanged} ref={addNewMessage} className={s.messagesTextarea} value={props.state.messagePage.newMessageText}></textarea>
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