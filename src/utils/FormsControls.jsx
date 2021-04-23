import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "./validators/validator";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, components,
                            props = {}, text = "" ) => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={components}
            {...props}
        /> {text}
    </div>
)

/*
{createField("Email", "email",
    [required], Input)}
{createField("Password", "password",
    [required], Input,
    {type: "password"})}
{createField(null, "rememberMe",
    [], Input, {type: "checkbox"},
    "remember me")}*/
