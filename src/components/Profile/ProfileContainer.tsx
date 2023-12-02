import * as React from "react";
import {useEffect} from "react";
import Profile from "./Profile";
import {useSelector} from "react-redux";
import {getProfileUser, getStatusUser} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {AppStateType, useAppDispatch} from "../../redux/redux-store";

const ProfileContainer: React.FC = () => {

    const params = useParams()
    const dispatch = useAppDispatch()

    const userId = useSelector((state: AppStateType) => state.auth.userId)

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
        dispatch(getProfileUser(id))
        dispatch(getStatusUser(id))
        debugger
    }

    return (
        <Profile isOwner={!params.userId}/>
    )
}
export default ProfileContainer
