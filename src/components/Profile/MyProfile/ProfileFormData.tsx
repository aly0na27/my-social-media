import React from "react";
import {Form, Formik, FormikErrors} from "formik";
import {ContactsType, ProfileType} from "../../../types/types";
import Input from 'formik-antd/es/input'
import FormItem from "formik-antd/es/form-item";
import s from './ProfileFormData.module.css'
import Checkbox from "formik-antd/es/checkbox";
import {ConfigProvider} from "antd";

interface OtherProps {
    profile: ProfileType,
    setEditMode: (isEdit: boolean) => void,
    updateProfile: (dataForm: FormValues, setStatus, setEditMode: (isEditMode: boolean) => void) => void
}

interface FormValues {
    userId: number
    fullName: string,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    contacts: ContactsType,
}

export const ProfileForm: React.FC<OtherProps> = ({profile, setEditMode, updateProfile}) => {
    const initialValues = {
        userId: profile.userId,
        fullName: profile.fullName,
        aboutMe: profile.aboutMe,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        contacts: profile.contacts
    }

    return (
        <Formik initialValues={initialValues}
                validate={(values) => {
                    let errors: FormikErrors<FormValues> = {}
                    if (!values.fullName) {
                        errors.fullName = 'Required'
                    }
                    if (!values.aboutMe) {
                        errors.aboutMe = "Required"
                    }

                    return errors
                }}
                onSubmit={async (values, actions) => {
                    await updateProfile(values, actions.setStatus, setEditMode)
                    actions.setSubmitting(false)
                }
                }
        >
            {props => (
                    <Form className={s.form}>
                        <ConfigProvider theme={{
                            components: {
                                Input: {
                                    colorBgContainer: "var(--background-color)",
                                    colorPrimary: "var(--second-btn-color)",
                                    colorPrimaryActive: "var(--second-btn-color)",
                                    activeBorderColor: "var(--second-btn-color)",
                                    hoverBorderColor: "var(--first-btn-color)",
                                    colorText: "var(--primary-text-color)",
                                    activeShadow: "0 0 0 1px var(--btn-color-shadow)",
                                },
                                Checkbox: {
                                    colorPrimary: "var(--first-btn-color)",
                                    colorPrimaryHover: "var(--second-btn-color)"
                                }
                            }
                        }}>
                        <div className={s.formProfileData}>
                            <div className={s.formItem}>
                                <div className={s.formItemTitle}>
                                    <h3>Full name:</h3>
                                </div>
                                <div>
                                    <FormItem name={"fullName"} showValidateSuccess={true} hasFeedback={true}>
                                        <Input name={"fullName"} placeholder={"Full name"}/>
                                    </FormItem>
                                </div>
                            </div>
                            <div className={s.formItem}>
                                <div className={s.formItemTitle}>
                                    <h3>About me:</h3>
                                </div>
                                <div>
                                    <FormItem name={"aboutMe"} hasFeedback={true} showValidateSuccess={true}>
                                        <Input name={"aboutMe"} placeholder={"About me"}/>
                                    </FormItem>
                                </div>
                            </div>
                            <div className={s.formItem}>
                                <div className={s.formItemTitle}>
                                    <h3>Looking for a job?</h3>
                                </div>
                                <div>
                                    <FormItem name={"lookingForAJob"}>
                                        <Checkbox name={"lookingForAJob"}></Checkbox>
                                    </FormItem>
                                </div>
                            </div>
                            <div className={s.formItem}>
                                <div className={s.formItemTitle}>
                                    <h3>My skills:</h3>
                                </div>
                                <div>

                                    <Input name={"lookingForAJobDescription"} placeholder={"Skills"}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.formProfileData}>
                            {
                                Object.keys(profile.contacts).map(el => {
                                    return (
                                        <div key={el} className={s.formItem}>
                                            <div className={s.formItemTitle}>
                                                <h3>{el}:</h3>
                                            </div>
                                            <div>
                                                <Input key={el} name={"contacts." + el}/>
                                                {props.status && (props.status.errors[el]) && props.status.errors[el]}

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <button className={s.btnSave} type={"submit"} disabled={false}>
                            Save
                        </button>
                        </ConfigProvider>

                    </Form>
            )}
        </Formik>
    )
}
