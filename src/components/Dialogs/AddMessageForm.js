import {Field, reduxForm} from "redux-form";
import s from "./Dialogs.module.css";
import iconSend from "../../assets/images/Icon/iconSend.svg";
import React from "react";
// import {Textarea} from "../common/FormsControllers/FormsConrtolers";
import {maxLengthCreator, required} from "../../utils/Validators/validators";

const maxLength20 = maxLengthCreator(20)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.messagesTextarea}
                   name={"message"}
                   component={"textarea"}
                   validate={[required, maxLength20]}
                   placeholder={"Enter your message"}/>

            <button className={s.btnSend}>
                <img src={iconSend} className={s.imgSend} alt=""/>
            </button>
        </form>
    )
}

const SendMessage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.onAddMessage(formData.message)
    }
    return (
        <DialogsReduxForm onSubmit={onSubmit}/>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'sendMessage'
})(AddMessageForm);



export default SendMessage;