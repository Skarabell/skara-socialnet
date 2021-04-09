import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements =
        state.dialogs.map(d =>
            <DialogItem name={d.name} key={d.id} avatar={d.avatar}/>);

    let messagesElement =
        state.messages.map(m =>
            <Message message={m.message} key={m.id}/>);

    let newMessageBody = state.newMessageBody;

    if (!props.isAuth) return <Redirect to="/login"/>

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}
             activeClassName={s.activeLink}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElement}
        </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;