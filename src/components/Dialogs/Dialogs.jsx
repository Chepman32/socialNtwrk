import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem";
import Message from "./Message";
const Dialogs = props => {
    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>);
    
        let messagesElements = props.messagesPage.messagesData.map(m => <Message key={m.id} message={m.message} id={m.name}/>);
        let onSendMessageClick = () => {
            props.onSendMessageClick();
        };
        let onMessageChange = e => {
            let text = e.target.value;
            props.onMessageChange(text);
        }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div><textarea onChange={onMessageChange} placeholder="enter your message"></textarea></div>
            <div><button onClick = {onSendMessageClick}>Send</button></div>
        </div>
        </div>
    );
};
export default Dialogs;