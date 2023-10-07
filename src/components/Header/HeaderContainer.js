import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunkCreate, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {

        this.props.authThunkCreate();

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
        photos: state.auth.photos
    }
}

export default connect(mapStateToProps, {setAuthUserData, authThunkCreate})(HeaderContainer)


