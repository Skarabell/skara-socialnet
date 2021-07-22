import {AppStateType} from "./redux-store";


export const getPost = (state: AppStateType) => {
    return state.profilePage.posts
}

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}

export const getNewPostText = (state: AppStateType) => {
    return state.profilePage.newPostText
}

export const getAuthorizedUserId = (state: AppStateType) => {
    return state.auth.userId
}
