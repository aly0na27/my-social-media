import {Form, Formik, FormikErrors} from "formik";
import React from "react";
import FormItem from "formik-antd/es/form-item";
import Input from "formik-antd/es/input";
import TypedInput from "formik-antd/es/input";
import Checkbox from "formik-antd/es/checkbox";
import styles from "./Login.module.css"
import {ConfigProvider} from "antd";

type FormValues = {
    login: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

type PropsType = {
    loginThunkCreate: (email: string, password: string, rememberMe: boolean, captcha: null | string, setStatus: (status: any) => void) => void
    captcha: string
}

const LoginForm: React.FC<PropsType> = ({loginThunkCreate, captcha}) => {
    const initialValues = {
        login: '',
        password: '',
        rememberMe: false,
        captcha: null as null | string
    }
    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                let errors: FormikErrors<FormValues> = {}
                if (!values.login) {
                    errors.login = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                if (captcha && !values.captcha) {
                    errors.captcha = 'Required'
                }
                return errors
            }}
            onSubmit={(values, actions) => {
                loginThunkCreate(values.login, values.password, values.rememberMe, values.captcha, actions.setStatus)
                actions.setSubmitting(false)
            }}
        >
            {props => (
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
                            colorIcon: "var(--primary-text-color)"
                        },
                        Checkbox: {
                            colorBgContainer: "var(--foreground-color)",
                            // colorBorder: "var(--background-color)",
                            colorPrimary: "var(--first-btn-color)",
                            colorPrimaryHover: "var(--second-btn-color)",
                            colorText: "var(--primary-text-color)"
                        },
                    }
                }}>
                    <Form className={styles.form}>
                        <FormItem name={'login'}>
                            <Input name={'login'} placeholder={'Enter your login'}/>
                        </FormItem>
                        <FormItem name={'password'}>
                            <TypedInput.Password name={'password'} placeholder={'Enter your password'}/>
                        </FormItem>
                        <FormItem name={'rememberMe'}>
                            <Checkbox name={'rememberMe'}>Remember me</Checkbox>
                        </FormItem>
                        {captcha &&
                            <>
                                <img src={captcha} alt={""}/>
                                <FormItem name={'captcha'}>
                                    <Input name={"captcha"}/>
                                </FormItem>
                            </>
                        }
                        {props.status && <><span className={styles.formError}>{props.status}</span></>}
                        <button disabled={false} type={"submit"} className={styles.loginBtn}>
                            Login
                        </button>
                    </Form>
                </ConfigProvider>
            )}
        </Formik>
    )
}

export default LoginForm