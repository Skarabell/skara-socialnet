import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Field} from "redux-form";
import {Textarea} from "../../../utils/FormsControls";
import s from "../Dialogs.module.css";
import React from "react";

const maxLength10 = maxLengthCreator(10)

export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} name={"message"} component={"input"}>
            <div>
                <Field component={Textarea} name="newMessageBody"
                       placeholder="Enter your message"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button className={s.button}>
                    Send
                </button>
            </div>
        </form>
    )
}