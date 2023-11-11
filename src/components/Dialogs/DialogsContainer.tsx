import Dialogs from "./Dialogs";
import {DialogsActions} from "../../redux/dialogs-reducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import {Navigate} from "react-router-dom";


const DialogsContainer = (props: PropsFromRedux) => {
    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }
    return <Dialogs {...props}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
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
export default connector(DialogsContainer)
