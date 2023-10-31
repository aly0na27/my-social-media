import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControllers/FormsConrtolers";
import {required} from "../../../utils/Validators/validators";
import styles from "../../Login/Login.module.css";
import s from "./ProfileFormData.module.css"
import React from "react";

function ProfileFormData({contacts, handleSubmit, error}) {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.formProfileData}>
                <div className={s.formItem}>
                    <div className={s.formItemTitle}>
                        <h3>Full name:</h3>
                    </div>
                    <div>
                        <Field name={"fullName"} component={Input} placeholder={"Full name"} validate={[required]}/>
                    </div>
                </div>
                <div className={s.formItem}>
                    <div className={s.formItemTitle}>
                        <h3>About me:</h3>
                    </div>
                    <div>
                        <Field name={"aboutMe"} component={Input} placeholder={"About me"} validate={[required]}/>

                    </div>
                </div>
                <div className={s.formItem}>

                    <div className={s.formItemTitle}>
                        <h3>Looking for a job?</h3>

                    </div>
                    <div>
                        <Field name={"lookingForAJob"} component={"input"} type={"checkbox"}/>

                    </div>
                </div>
                <div className={s.formItem}>
                    <div className={s.formItemTitle}>
                        <h3>My skills:</h3>
                    </div>
                    <div>
                        <Field name={"lookingForAJobDescription"} component={Textarea} placeholder={"My skills"}
                               validate={[required]}/>
                    </div>
                </div>
            </div>
            <div className={s.formProfileData}>
                {
                    Object.keys(contacts).map(el => {
                        return (
                            <div key={el} className={s.formItem}>
                                <div className={s.formItemTitle}><h3>{el}:</h3></div>
                                <div><Field key={el} name={"contacts." + el} component={Input}
                                              placeholder={"contact"}></Field></div>
                            </div>

                        )
                    })
                }
            </div>
            {
                error && <div className={styles.formError}>{error}</div>
            }
            <button className={s.btnSave}>
                Save
            </button>
        </form>

    )
}

const ProfileFormDataRedux = reduxForm({
    form: "edit-profile"
})(ProfileFormData)

export default ProfileFormDataRedux