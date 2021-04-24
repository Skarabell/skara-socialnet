import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../utils/FormsControls";


let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postElements = props.posts.map(p =>
        <Post key="{p}" message={p.message} likesCount={p.likesCount} avatar={p.avatar}/>);

    let newPostElement = React.createRef();

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        )
    }

    export default MyPosts