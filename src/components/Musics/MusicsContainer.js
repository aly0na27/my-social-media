import {addMusicCreateAction, deleteMusicCreateAction} from "../../redux/musics-reducer";
import {connect} from "react-redux";
import Musics from "./Musics";

const mapStateToProps = (state) => {
    return {
        musics: state.musicsPage.musics
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add(userId) {
            dispatch(addMusicCreateAction(userId));
        },
        delete(userId)  {
            dispatch(deleteMusicCreateAction(userId));
        }
    }
}

const MusicsContainer = connect(mapStateToProps, mapDispatchToProps)(Musics);

export default MusicsContainer;