import React from "react";
import {DispatchPropsType, MapPropsType} from "./MyPosts";
import {actions} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import MyPostsMemorized from "./MyPosts";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {},
    AppStateType>
(mapStateToProps,{
    addPost: actions.addPostActionCreator}) (MyPostsMemorized);

export default MyPostsContainer;