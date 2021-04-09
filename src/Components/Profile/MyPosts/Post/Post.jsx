import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return <div>
        <div className={s.item}>
            { props.message }{props.avatar}
            <div>
                <span> like {props.likesCount} </span>
            </div>
        </div>
    </div>
}
export default Post;