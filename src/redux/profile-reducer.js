import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS"

let initialState = {
    posts: [
        {
            id: 1, message: "Hi", likesCount: 12, avatar:
                <img src="https://kisapes.ru/wp-content/uploads/2020/10/velsh-korgi-pembrok.jpg"/>
        },
        {
            id: 2, message: "Hi man", likesCount: 7, avatar:
                <img src="https://kisapes.ru/wp-content/uploads/2020/10/velsh-korgi-pembrok.jpg"/>
        }
    ],
    profile: null,
    status:"",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
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
        case SET_USER_PROFILE: {
            return {...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {...state,
            status: action.status
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export const getStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;