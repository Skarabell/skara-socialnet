
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {

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
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
               case SEND_MESSAGE:
            let body = action.newMassageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;