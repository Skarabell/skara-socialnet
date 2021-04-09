import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";


let store = {
    _state: {
        profilePage: {
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
            newPostText: "",
        },
        friendsPage: {
            friends: [
                {
                    id: 1, name: "Sveta", avatar:
                        <img
                            src="https://static5.depositphotos.com/1003371/521/i/600/depositphotos_5214674-stock-photo-tropical-sea-sunset.jpg"/>
                },
                {
                    id: 2, name: "Dasha", avatar:
                        <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg"/>
                },
                {
                    id: 3, name: "Masha", avatar:
                        <img src="https://klike.net/uploads/posts/2018-06/1530090978_1.jpg"/>
                }
            ]
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1, name: "Sveta", avatar:
                        <img
                            src="https://static5.depositphotos.com/1003371/521/i/600/depositphotos_5214674-stock-photo-tropical-sea-sunset.jpg"/>
                },
                {
                    id: 2, name: "Dasha", avatar:
                        <img src="https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg"/>
                },
                {
                    id: 3, name: "Masha", avatar:
                        <img src="https://klike.net/uploads/posts/2018-06/1530090978_1.jpg"/>
                }
            ],

            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "I'm fine"}
            ]
        },
            newMassageBody: ""
    },
    _callSubscriber() {    },

    getState() {return this._state},

    subscribe(observer) {this._callSubscriber = observer},

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;