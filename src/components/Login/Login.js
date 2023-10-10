import ReduxForm from "redux-form/lib/reduxForm";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field name={"login"} component={"input"} placeholder={"Login"} />
            </div>
            <div>
                <Field name={"password"} component={"input"} placeholder={"Password"} />
            </div>
            <div>
                <Field name={"checkbox"} component={"input"} type={"checkbox"} />Remember me
            </div>
            <button>Send</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
        form: 'login'
    }
)(LoginForm);

function Login(props) {
    let onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

export default Login