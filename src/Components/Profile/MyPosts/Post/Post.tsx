import React from "react";
import s from "./Post.module.css";

type PropsType = {
    message: string
    likesCount: number
}
const Post: React.FC<PropsType> = (props) => {
    return <div>
        <div className={s.item}>
            { props.message }
            <div>
                <span> like {props.likesCount} </span>
            </div>
        </div>
    </div>
}
export default Post;

