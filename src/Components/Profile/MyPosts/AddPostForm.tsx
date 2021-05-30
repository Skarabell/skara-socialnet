import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../../../utils/FormsControls";

type PropsType = {}
export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

let AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType,
    PropsType> & PropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            { createField<AddPostFormValuesTypeKeys>
            ("Your post", 'newPostText', [require], Input) }
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}
export default reduxForm<AddPostFormValuesType, PropsType>({form: "profile-add-post"})(AddPostForm)