import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import { Formik } from "formik"
import style from "../../utils/FormsControls.module.css"
import * as yup from "yup";
import Button from 'react-bootstrap/Button';

const LoginForm = (props) => {
const validationsSchema = yup.object().shape({
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
        onSubmit={(values) => {console.log(values)}}
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
                >Send
                </button>
            </div>
        )}
    </Formik>
)
}
/*    <div>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                    <p><label htmlFor={`email`}>Email</label><br/>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    /></p>
                    {errors.email && touched.email && errors.email}
                    <p><label htmlFor={`password`}>Password</label><br/>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    /></p>
                    {errors.password && touched.password && errors.password}

                    {props.error && <div className={style.formSummaryError}>
                        {props.error}
                    </div>
                    }
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </form>
            )}
        </Formik>
    </div>
)*/

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => ({
    login: (email, password) => {
        dispatch(login(email, password));
    },
});

export default connect (mapStateToProps,mapDispatchToProps) (Login);


/*    const validationsSchema = yup.object().shape({
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
        onSubmit={(values) => {console.log(values)}}
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
                    >Send
                    </button>
                </div>
            )}
        </Formik>
    )
}*/