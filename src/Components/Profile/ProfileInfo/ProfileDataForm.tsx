import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../../utils/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../Types/Types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> &
    PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>:
                {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {
                createField<ProfileTypeKeys>("", "lookingForAJob", [],
                    Input, {type: "checkbox"}, "Looking for a job")}
            </div>

            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription ? "yes" : "no"}
                {createField<ProfileTypeKeys>("Full name", "fullName", [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
                {createField<ProfileTypeKeys>("Full name", "fullName", [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    {createField(key, "contact." + key, [], Input)}
                </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm;