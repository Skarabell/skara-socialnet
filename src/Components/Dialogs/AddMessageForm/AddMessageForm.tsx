import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../utils/FormsControls";
import s from "../Dialogs.module.css";
import React from "react";
import { NewMessageFormValuesType } from "../Dialogs";

const maxLength10 = maxLengthCreator(10)

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

export const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType,
    PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesKeysType>("Enter your message",
                    'newMessageBody', [required, maxLength10], Textarea)}
            </div>
            <div>
                <button className={s.button}>
                    Send
                </button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({form:
    'dialog-add-message-form'})(AddMessageForm)
