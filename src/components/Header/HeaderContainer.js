import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreate, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
    }

    render () {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setAuthUserData, logoutThunkCreate})(HeaderContainer)


