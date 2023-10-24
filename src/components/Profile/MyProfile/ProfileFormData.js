import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControllers/FormsConrtolers";
import {required} from "../../../utils/Validators/validators";
import styles from "../../Login/Login.module.css";
import s from "./ProfileFormData.module.css"
import React from "react";

function ProfileFormData({contacts, handleSubmit, initialValues, error, isOwner}) {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div>
            <div>
                <h3>Full name</h3>
                <Field name={"fullName"} component={Input} placeholder={"Full name"} validate={[required]}/>
            </div>
            <div>
                <h3>About me</h3>
                <Field name={"aboutMe"} component={Input} placeholder={"About me"} validate={[required]}/>
            </div>
            <div>
                <h3>Looking for a job?</h3>
                <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>
            </div>
            <div>
                <h3>My professional skills</h3>
                <Field name={"lookingForAJobDescription"} component={Textarea} placeholder={"My skills"}/>
            </div>
            </div>
            <div>
                {
                    Object.keys(contacts).map(el => {
                        return (
                            <p>
                                {el}: <Field key={el} name={"contacts." + el} component={Input} placeholder={"contact"}></Field>
                            </p>

                        )
                    })
                }
            </div>
            {
                error && <div className={styles.formError}>{error}</div>
            }
            <button >
                Save
            </button>
        </form>

    )
}

const ProfileFormDataRedux = reduxForm({
    form: "edit-profile"
})(ProfileFormData)

export default ProfileFormDataRedux