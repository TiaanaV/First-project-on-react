import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DIalogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messages.map((props) => (
    <Message
      message={props.message}
      writer={props.writer}
      avatar={props.avatar}
    />
  ));
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
    newMessageElement.current.value = " ";
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.newMessageArea}>
          <textarea
            className={classes.newMessage}
            ref={newMessageElement}
          ></textarea>
          <button className={classes.buttonSend} onClick={addMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
