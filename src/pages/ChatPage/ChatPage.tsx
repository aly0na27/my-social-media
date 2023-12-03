import React, {useEffect, useState} from "react"
import styles from "./ChatPage.module.css"
import {Col, Row} from "antd";
import {Form, Formik} from "formik";
import FormItem from "formik-antd/es/form-item";
import Input from "formik-antd/es/input"
import {SendRounded} from "@mui/icons-material";


type MessageType = {
    userId: number
    photo: string
    userName: string
    message: string
}

const ChatPage: React.FC = () => {

    const [wsChannel, setWsChannel] = useState<null | WebSocket>(null)

    useEffect(() => {
        let ws: WebSocket
        const eventHandler = () => {
            console.log("Error")
            createChannel()
        }

        function createChannel() {
            if (ws) {
                ws.removeEventListener("close", eventHandler)
            }
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            ws.addEventListener("close", eventHandler)
            setWsChannel(ws)

        }
        createChannel()

        return () => {
            ws.removeEventListener("close", eventHandler)
            ws.close()
        }

    }, [])


    return (
        <div>
            <header className={styles.header}>
                <h2>
                    Chat
                </h2>
            </header>
            <main className={styles.main}>
                <Messages wsChannel={wsChannel}/>
                <MessageForm wsChannel={wsChannel}/>
            </main>
        </div>
    )
}


const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {

    const [messages, setMessages] = useState<Array<MessageType>>([])

    useEffect(() => {
        const eventHandler = (e) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        wsChannel?.addEventListener("message", eventHandler)

        return () => {
            wsChannel?.removeEventListener("message", eventHandler)
        }
    }, [wsChannel])

    return (
        <div style={{height: "400px", overflowY: "auto"}}>
            {messages.map(m => <Message userId={m.userId} photo={m.photo} userName={m.userName} message={m.message}/>)}
        </div>
    )
}

const Message: React.FC<MessageType> = ({userId, photo, userName, message}) => {
    return (
        <div>
            <Row>
                <Col flex={2}>
                    <img src={photo} alt={""} style={{width: "5rem", height: "5rem"}}/>
                </Col>
                <Col flex={3}>
                    <h4>{userName}</h4>
                    <p>{message}</p>
                </Col>
            </Row>
            <hr/>
        </div>
    )
}
const MessageForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {

    const [status, setStatus] = useState<'pending' | 'open'>('pending')

    useEffect(() => {
        const eventHandler = () => {
            setStatus('open')

        }
        wsChannel?.addEventListener('open', eventHandler)

        return () => {
            wsChannel?.removeEventListener("open", eventHandler)
        }
    }, [wsChannel])
    const initialValues = {
        message: ''
    }
    return (
        <Formik initialValues={initialValues}  onSubmit={(values, FormikHelpers) => {
            wsChannel.send(values.message)
            // FormikHelpers.setValues(initialValues)
            FormikHelpers.resetForm()
        }}>
            {props =>
                <Form>
                    <FormItem name={"message"}>
                        <Input.TextArea name={"message"}/>
                    </FormItem>
                    <button disabled={status !== 'open'} type={"submit"}>
                        <SendRounded style={{transform: "rotate(-45deg)"}}/>
                    </button>
                </Form>
            }
        </Formik>
    )
}

export default ChatPage