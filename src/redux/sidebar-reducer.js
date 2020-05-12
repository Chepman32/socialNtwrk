const CLONE_FRIEND = "CLONE_FRIEND";
let initialState = {
    sidebarData: [
        {id: 1, name: "Dmitriy", nickName: "Gringo101"},
    {id: 2, name: "Anton", nickName: "Ivanych"},
    {id: 3, name: "Olga", nickName: "Putinka"}
    ]
};
const sidebarReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type) {
        case CLONE_FRIEND: {
        let obj = {id: 6, name: action.name, nickname: action.nickname};
    stateCopy.sidebarData.push(obj);
    console.log("test", stateCopy.sidebarData);
return stateCopy;
        }
default:
    return state;
    }
    
};
export const cloneFriendActionCreator = (name, nick) => ({type: CLONE_FRIEND, name: name, nickname: nick});
export default sidebarReducer;