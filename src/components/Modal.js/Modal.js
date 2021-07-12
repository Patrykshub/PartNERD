import React, { Fragment, useState } from "react";
import Button from "../header/Button";
import cls from "./AddUser.module.css";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={`${classes.content} ${classes.buttons_input}}`}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
    const [enteredName, setEnteredName] = useState('');
  
    const nameInputHandler = event => {
      setEnteredName(event.target.value);
    }
    
//   const logInHandler = () => {

//   }

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <ModalOverlay>
        <form onSubmit={addUserHandler} className={cls.input}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={nameInputHandler}></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="text"></input>
          <div className={cls.buttons_input}>
          <Button onSubmit={""}>Log in</Button>
          <Button onClick={props.onHideModal}>Close</Button>
        </div>
        </form>
        
      </ModalOverlay>
    </Fragment>
  );
};

export default Modal;
