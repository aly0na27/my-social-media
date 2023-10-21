import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/Validators/validators";
import {loginThunkCreate} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import styles from "./Login.module.css";
import ButtonLogin from "../common/Button/ButtonLogin";
import {Input} from "../common/FormsControllers/FormsConrtolers";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <>
            <div className={styles.containerForm}>
                <h1 className={styles.title}>Login</h1>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <Field name={"email"}
                           component={Input}
                           placeholder={"Login"}
                           validate={[required]}
                    />
                    <Field name={"password"}
                           type={"password"}
                           component={Input}
                           placeholder={"Password"}
                           validate={[required]}
                    />
                    <div>
                        <Field name={"rememberMe"}
                               component={"input"}
                               type={"checkbox"}
                        />Remember me
                    </div>
                    {
                        error &&
                        <div className={styles.formError}>
                            {error}
                        </div>
                    }
                    <ButtonLogin/>
                </form>
            </div>
        </>
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