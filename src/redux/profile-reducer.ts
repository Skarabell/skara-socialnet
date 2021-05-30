import {FormAction, stopSubmit} from "redux-form"
import {AxiosResponse} from "axios"
import {PhotosType, PostType, ProfileType} from "../Types/Types";
import {userAPI} from "../api/userAPI";
import {profileAPI} from "../api/profileAPI";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: "Hi", likesCount: 12},
        {id: 2, message: "Hi man", likesCount: 7}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
};

export const actions = {
    addPostActionCreator: (newPostText: string) =>
        ({type: "SN/PROFILE/ADD-POST", newPostText} as const),
    setUserProfile: (profile: ProfileType) =>
        ({type: "SN/PROFILE/SET_USER_PROFILE", profile} as const),
    setStatus: (status: string) =>
        ({type: "SN/PROFILE/SET_USER_STATUS", status} as const),
    deletePost: (postId: number) =>
        ({type: "SN/PROFILE/DELETE_POST", postId} as const),
    savePhotoSuccess: (photos: PhotosType) =>
        ({type: "SN/PROFILE/SAVE_PHOTOS_SUCCESS", photos} as const)
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SN/PROFILE/ADD-POST": {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case "SN/PROFILE/DELETE_POST": {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case "SN/PROFILE/SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SN/PROFILE/SET_USER_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SN/PROFILE/SAVE_PHOTOS_SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await userAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = profileAPI.updateStatus(status);
    //@ts-ignore
   if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId != null) {
            await dispatch(getUserProfile(userId))
        } else {
         throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer;
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

