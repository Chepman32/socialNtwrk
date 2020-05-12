import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = dispatch => {
    return {
        onMessageChange: text => dispatch(updateNewMessageBodyActionCreator(text)),
        onSendMessageClick: () => dispatch(sendMessageActionCreator())
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;