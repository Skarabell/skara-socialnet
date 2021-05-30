import React from 'react';
import {createField, Input} from "../../utils/FormsControls";
import {required} from "../../utils/validators/validator";
import {login} from "../../redux/auth-reducer";
import style from "../../utils/FormsControls.module.css"
import {InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error, captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
                {createField<LoginFormValuesTypeKeys>("Password", "password",
                    [required], Input, {type: "password"})}
                {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [],
                    Input, {type: "checkbox"}, "remember me")}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image",
                    "captcha", [required], Input, {})}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean,
            captcha: string) => void
}
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password,
            formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);

{/*const validationsSchema = yup.object().shape({
    email: yup.string().required("Must have")
        .email("Enter real email")
        .min(5, 'Must be exactly 5 digits')
        .max(20, 'Must be exactly 20 digits'),
    password: yup.string().required("Must have")
        .min(5, 'Must be exactly 5 digits')
        .max(10, 'Must be exactly 10 digits')
})
return (
    <Formik
        initialValues={{
            email: "",
            password: "",
        }}
        validateOnBlur
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
        validationsSchema={validationsSchema}
    >
        {({values, errors,
              touched, handleChange,
              handleBlur,
              isValid,handleSubmit, dirty}) => (
            <div>
                <p>
                    <label htmlFor={`email`}>Email</label><br/>
                    <input
                        type={`email`}
                        name={`email`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}/>
                </p>
                {touched.email && errors.email && <p
                >{errors.email}</p>}
                <p>
                    <label htmlFor={`password`}>Password</label><br/>
                    <input
                        type={`password`}
                        name={`password`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}/>
                </p>
                {touched.password && errors.password && <p
                >{errors.password}</p>}
                <p>
                    <label htmlFor={`checkbox`}>Remember Me</label><br/>
                    <input
                        type={`checkbox`}
                        name={`rememberMe`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rememberMe}/>
                </p>
                <button
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                    type={`submit`}
                    className="custom-btn-toolbar"
                >Login
                </button>
            </div>
        )}
    </Formik>*/
}

