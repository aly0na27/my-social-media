import React from "react"
import styles from "./ChatPage.module.css"
import {Col, Row} from "antd";
import {Form, Formik} from "formik";
import FormItem from "formik-antd/es/form-item";
import Input from "formik-antd/es/input"
import {SendOutlined, SendRounded} from "@mui/icons-material";

const ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
const ChatPage: React.FC = () => {

    const messages: Array<MessageType> = [
        {
            url: "https://ru-static.z-dn.net/files/d96/ced913ba9fe71679ae395a4be5fac683.jpg",
            name: "Alyona",
            message: "hi"
        },
        {
            url: "https://ru-static.z-dn.net/files/d96/ced913ba9fe71679ae395a4be5fac683.jpg",
            name: "Alyona",
            message: "hi"
        },
        {
            url: "https://ru-static.z-dn.net/files/d96/ced913ba9fe71679ae395a4be5fac683.jpg",
            name: "Alyona",
            message: "hi"
        },
    ]
    return (
        <div>
            <header className={styles.header}>
                <h2>
                    Chat
                </h2>
            </header>
            <main className={styles.main}>
                <Messages messages={messages}/>
                <MessageForm/>
            </main>
        </div>
    )
}

type MessageType = {
    url: string
    name: string
    message: string
}

const Messages: React.FC<{ messages: Array<MessageType> }> = ({messages}) => {
    return (
        <>
            {messages.map(m => <Message url={m.url} name={m.name} message={m.message}/>)}
        </>
    )
}

const Message: React.FC<MessageType> = ({url, name, message}) => {
    return (
        <div>
            <Row>
                <Col flex={2}>
                    <img src={url} alt={""} style={{width: "5rem", height: "5rem"}}/>
                </Col>
                <Col flex={3}>
                    <h4>{name}</h4>
                    <p>{message}</p>
                </Col>
            </Row>
            <hr/>
        </div>
    )
}
const MessageForm: React.FC = () => {
    const initialValues = {
        message: ''
    }
    return (
        <Formik initialValues={initialValues}  onSubmit={values => {

        }}>
            {props =>
                <Form>
                    <FormItem name={"message"}>
                        <Input.TextArea name={"message"}/>
                    </FormItem>
                    <button type={"submit"}>
                        <SendRounded style={{transform: "rotate(-45deg)"}}/>
                    </button>
                </Form>
            }
        </Formik>
    )
}

export default ChatPage