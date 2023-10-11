import ReduxForm from "redux-form/lib/reduxForm";
import {Field, reduxForm} from "redux-form";
import {Input as Input} from "./../common/FormsControllers/FormsConrtolers"
import {required} from "../../utils/Validators/validators";
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"}
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
                <Field name={"checkbox"}
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
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

export default Login