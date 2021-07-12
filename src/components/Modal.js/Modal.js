import React, { Fragment, } from "react";
import Button from "../header/Button";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <ModalOverlay>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="text"></input>
          </div>
          <Button>Close</Button>
        </form>
      </ModalOverlay>
    </Fragment>
  );
};

export default Modal;
