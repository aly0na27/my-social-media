import {Field, reduxForm} from "redux-form";
import Textarea, {Input} from "../../common/FormsControllers/FormsConrtolers";
import Contacts from "./Contacts";
import contacts from "./Contacts";
import {updateProfile} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

function ProfileFormData({contacts, onSubmit}) {

    // debugger;
    return (
        <>
        <form onSubmit={onSubmit}>
            <div>
                <h3>Full name</h3>
                <Field name={"fullName"} component={Input} placeholder={"Full name"}/>
            </div>
            <div>
                <h3>About me</h3>
                <Field name={"aboutMe"} component={Input} placeholder={"About me"}/>
            </div>
            <div>
                <h3>Looking for a job?</h3>
                <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>
            </div>
            <div>
                <h3>My professional skills</h3>
                <Field name={"lookingForAJobDescription"} component={Textarea} placeholder={"My skills"}/>
            </div>
            <div>
                {
                    Object.keys(contacts).map(el => {
                        return (
                            <p>
                                {el}: <Field name={"contact"} component={Input} placeholder={"contact"}></Field>
                            </p>

                        )
                    })
                }
            </div>
            <button>
                Save
            </button>
        </form>
            </>
    )
}

const ProfileFormDataRedux = reduxForm({
    form: "profile"
})(ProfileFormData)


function ProfileDescription(props) {
    const onSubmit = (newData) => {
        debugger
        props.updateProfile(newData)
    }
    return <ProfileFormDataRedux onSubmit={onSubmit}/>
}

const ProfileFormContainer = connect(null, {updateProfile})(ProfileFormDataRedux)
export default ProfileFormContainer;