import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import avatarUser from "./../../assets/images/1573589.png"
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
                    let photos = response.data.photos.small;
                    if (!photos) {
                        photos = avatarUser;
                    }
                    this.props.setAuthUserData(id, email, login, photos);
                })
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)


