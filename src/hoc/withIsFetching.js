import Preloader from "../components/common/Preloader/Preloader";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isFetching: state.usersPage.isFetching
    }
}

const withIsFetching = (IsFetchingComponent) => {
    let FetchingComponent = (props) => {
        // debugger
        if (props.isFetching) {
            // debugger
            return (
                <>
                    <Preloader/>
                    {/*<IsFetchingComponent {...props}/>*/}
                </>
            )
        }
        console.log(IsFetchingComponent)
        return <IsFetchingComponent {...props}/>
    }
    return connect(mapStateToProps)(FetchingComponent)
}

export default withIsFetching;