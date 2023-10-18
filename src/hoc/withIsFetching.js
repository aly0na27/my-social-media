import Preloader from "../components/common/Preloader/Preloader";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.isFetching
    }
}

const withIsFetching = (IsFetchingComponent) => {
    let FetchingComponent = (props) => {
        if (props.isFetching) {
            return (
                <>
                    <Preloader/>
                </>
            )
        }
        return <IsFetchingComponent {...props}/>
    }
    return connect(mapStateToProps)(FetchingComponent)
}

export default withIsFetching;