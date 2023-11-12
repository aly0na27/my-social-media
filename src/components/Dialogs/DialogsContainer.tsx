import Dialogs from "./Dialogs";
import {DialogsActions} from "../../redux/dialogs-reducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const DialogsContainer = (props: PropsFromRedux) => {
    return <Dialogs {...props}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(DialogsActions.addMessageCreateAction(newMessage));
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
export default compose(
    connector,
    withAuthRedirect)(DialogsContainer)
