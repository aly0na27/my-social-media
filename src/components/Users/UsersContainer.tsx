import {connect} from "react-redux";
import {changeSelectedPage, getUsers, setFollow, setUnfollow} from "../../redux/users_reducer";
import * as React from "react";
import {useEffect} from "react";
import Users from "./Users";
import {
    getFollowingInProgress,
    getIsFetching,
    getPageSelected,
    getPageSize,
    getTotalUserCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";


type MapStatePropsType = {
    pageSize: number,
    isFetching: boolean,
    pageSelected: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    totalUserCount: number
}

type MapDispatchPropsType = {
    getUsers: (pageSize: number, pageSelected: number) => void,
    changeSelectedPage: (page: number) => void,
    setFollow: (pageNumber: number) => void,
    setUnfollow: (pageNumber: number) => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

const UsersContainer: React.FC<PropsType> = ({getUsers, pageSelected, changeSelectedPage, pageSize,
                                                        isFetching, users, followingInProgress,
                                                    totalUserCount, setFollow, setUnfollow
                                                      }) => {

    useEffect(() => {
        getUsers(pageSize, pageSelected)
    }, [])

    const onChangePageUsers = (p) => {
        changeSelectedPage(p);
        getUsers(pageSize, p);
    }

    return (
        <>
            {isFetching ? <Preloader/> :
                <Users users={users} followingInProgress={followingInProgress} setFollow={setFollow} setUnfollow={setUnfollow}
                       onChangePageUsers={onChangePageUsers} pageSize={pageSize} pageSelected={pageSelected} totalUserCount={totalUserCount}/>
            }
        </>
    );
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        pageSelected: getPageSelected(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state)
    }
}


export default connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, {
    changeSelectedPage,
    getUsers, setUnfollow, setFollow
})(UsersContainer);
