const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 1},
        {id: 3, message: "my name is...", likesCount: 2},
    ],
newPostText: "",
profile: null
}
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
        let obj = {id: 5, message: state.newPostText, likesCount: 0};
        let stateCopy = {...state};
        stateCopy.postsData = [...state.postsData];
    stateCopy.postsData.push(obj);
    stateCopy.newPostText = "";
    return stateCopy;
        }
    case UPDATE_NEW_POST_TEXT: {
        let stateCopy = {...state}
        stateCopy.newPostText = action.message;
        return stateCopy;
    }
    case SET_USER_PROFILE:
        console.log(action.profile);
        return {...state, profile: action.profile};
        console.log(action.profile);
    default:
        return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, message: text});
export const setUser = profile => ({type: SET_USER_PROFILE, profile})
export default profileReducer;