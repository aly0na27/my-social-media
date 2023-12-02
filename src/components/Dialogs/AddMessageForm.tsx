import s from "./Dialogs.module.css";
import iconSend from "../../assets/images/Icon/iconSend.svg";
import React from "react";
import {Form, FormikProps, withFormik} from "formik";
import FormItem from "formik-antd/es/form-item";
import TypedInput from "formik-antd/lib/input";

interface FormValues {
    message: string
}

const SendMessageForm = (props: FormikProps<FormValues>) => {
    return (
        <Form>
            <FormItem name={"message"}>
                <TypedInput.TextArea name={"message"} placeholder={"Enter your message"}/>
            </FormItem>
            <button className={s.btnSend} type={"submit"} disabled={props.isSubmitting}>
                <img src={iconSend} className={s.imgSend} alt=""/>
            </button>
        </Form>
    )
}

interface MyFormProps {
    onAddMessage: (message: string) => void
}

export const SendMessageFormik = withFormik<MyFormProps, FormValues>({
        mapPropsToValues: () => {
            return {
                message: ''
            }
        },
        handleSubmit: (values, props) => {
            props.props.onAddMessage(values.message)
            values.message = ''
        }
    }
)(SendMessageForm)

