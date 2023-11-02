import {FunctionComponent, useEffect} from "react";
import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileUser,
    getStatusUser,
    updatePhoto,
    updateProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapStatePropsType = {
    profile: ProfileType,
    status: string,
    userId: number,
}

type MapDispatchPropsType = {
    getProfileUser: (userId: number) => void,
    getStatusUser: (userId: number) => void,
    updateUserStatus: (status: string) => void,
    updatePhoto: (photo: string) => void,
    updateProfile: (profile: ProfileType, setStatus, setEditMode) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType;

const ProfileContainer: React.FC<PropsType> = ({profile, status, userId, getProfileUser,
                              getStatusUser, updateUserStatus, updatePhoto, updateProfile}) =>{

    const params = useParams();


    useEffect(() => {
        refreshProfile()
    }, []);

    useEffect(() => {
        refreshProfile()
    }, [params.userId])

    const refreshProfile = () => {
        let id = Number(params.userId);
        if (!id) {
            id = userId;
        }
        getProfileUser(id);
        getStatusUser(id);
    }

    return (
        <Profile isOwner={!params.userId} profile={profile}  status={status} updateUserStatus={updateUserStatus} updatePhoto={updatePhoto} updateProfile={updateProfile}
                 userId={Number(params.userId)}/>
    )

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
    }
}

const ProfileHOC = compose(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, {
        getProfileUser,
        getStatusUser,
        updateUserStatus,
        updatePhoto,
        updateProfile
    }))(ProfileContainer)

export default ProfileHOC as FunctionComponent
