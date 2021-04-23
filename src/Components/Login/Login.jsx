import React from 'react';
import {createField, Input} from "../../utils/FormsControls";
import {required} from "../../utils/validators/validator";
import {login} from "../../redux/auth-reducer";
import style from "../../utils/FormsControls.module.css"
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password",
                [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null,
                Input,{type: "checkbox"}, "remember me")}
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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
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

