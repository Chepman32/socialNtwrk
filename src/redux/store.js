import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = {
_callSubscriber() {
        console.log("LOL")
    },
    getState() {
        return this._state
    },
    _state: {
        profilePage: { 
            postsData: [
            {id: 1, message: "How are you?", likesCount: 3},
            {id: 2, message: "It's my first post", likesCount: 1},
            {id: 3, message: "my name is...", likesCount: 2},
        ],
    newPostText: "abababbababab"
    },
        messagesPage: {
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
        },
        sidebar: [
            {id: 1, name: "Dmitriy", nickName: "Gringo101"},
            {id: 2, name: "Anton", nickName: "Ivanych"},
            {id: 3, name: "Olga", nickName: "Putinka"}
        ]
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
};
export default store;