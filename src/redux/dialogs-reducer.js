const UPDATE_NEWMESSAGE_BODY = "UPDATE_NEWMESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
    dialogsData: [
        {id: 1, name: "Андрей"},
        {id: 2, name: "Елена"},
        {id: 3, name: "Григорий"},
        ],
        messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hello"},
            {id: 3, message: "Yo"},
            ],
            newMessageBody: ""
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy ={...state, messagesData: [...state.messagesData]};
    switch(action.type) {
        case UPDATE_NEWMESSAGE_BODY: {
            stateCopy.newMessageBody = action.body;
        return stateCopy;
        }
    case SEND_MESSAGE: {
        let body = state.newMessageBody;
        stateCopy.newMessageBody ="";
        stateCopy.messagesData = [...state.messagesData];
        stateCopy.messagesData.push({id: 6, message: body});
        return stateCopy;
    }
        default:
            return state;
    }
};
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = body => ({type: UPDATE_NEWMESSAGE_BODY, body});
export default dialogsReducer;