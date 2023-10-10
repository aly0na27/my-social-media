import ReduxForm from "redux-form/lib/reduxForm";
import {Field, reduxForm} from "redux-form";
import {Input as Input} from "./../common/FormsControllers/FormsConrtolers"
import {required} from "../../utils/Validators/validators";
import {loginThunkCreate} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"}
                       component={Input}
                       placeholder={"Login"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={"password"}
                       component={Input}
                       placeholder={"Password"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={"rememberMe"}
                       component={"input"}
                       type={"checkbox"}
                />Remember me
            </div>
            <button>Send</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({
        form: 'login'
    }
)(LoginForm);

function Login(props) {
    let onSubmit = (formData) => {
        props.loginThunkCreate(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginContainer = connect(mapStateToProps, {loginThunkCreate})(Login)

export default LoginContainer