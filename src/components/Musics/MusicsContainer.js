import {addMusicCreateAction, deleteMusicCreateAction} from "../../redux/musics-reducer";
import {connect} from "react-redux";
import Musics from "./Musics";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        musics: state.musicsPage.musics,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add(userId) {
            dispatch(addMusicCreateAction(userId));
        },
        delete(userId) {
            dispatch(deleteMusicCreateAction(userId));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Musics);