import Dialogs from "./Dialogs";
import {addMessageCreateAction, updateMessageCreateAction} from "../../redux/dialogs-reducer";

function DialogsContainer(props) {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageCreateAction());

    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageCreateAction(text));

    }
    return (
        <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;