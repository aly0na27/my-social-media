import {MusicActions} from "../../redux/musics-reducer";
import {connect, ConnectedProps} from "react-redux";
import Musics from "./Musics";
import {AppStateType} from "../../redux/redux-store";
import * as React from "react";
import {Navigate} from "react-router-dom";


const mapStateToProps = (state: AppStateType) => {
    return {
        musics: state.musicsPage.musics,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong(userId: number) {
            dispatch(MusicActions.addMusicCreateAction(userId));
        },
        deleteSong(userId: number) {
            dispatch(MusicActions.deleteMusicCreateAction(userId));
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


const MusicsContainer: React.FC<PropsFromRedux> = ({addSong, musics, deleteSong, isAuth}) => {
    return (
        <>
            {
                isAuth ?
                    <Musics addSong={addSong} deleteSong={deleteSong} musics={musics}/>
                    : <Navigate to={"/login"}/>
            }
        </>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicsContainer);