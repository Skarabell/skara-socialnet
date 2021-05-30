import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number,
    name: string,
}
type MessageType = {
    id: number,
    message: string
}
let initialState = {
    dialogs: [
        {id: 1, name: "Sveta"},
        {id: 2, name: "Dasha"},
        {id: 3, name: "Masha"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I'm fine"}
    ] as Array<MessageType>
}

const dialogsReducer = (state = initialState,
                        action: ActionsType): InitialStateType => {
    switch (action.type) {
               case "SN/DIALOGS/SEND-MESSAGE":
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) =>
        ({type: "SN/DIALOGS/SEND-MESSAGE", newMessageBody} as const)
}

export default dialogsReducer;
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
