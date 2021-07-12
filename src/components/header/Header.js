import React, { useState, useEffect } from "react";

import Spinner from "../spinner/Spinner";
import "./header.css";
import "../spinner/spinner.css";
import Button from "./Button";

const Header = (props) => {
  const [isActive, setIsActive] = useState(true);
  const [deactivated, setDecativated] = useState(false);

  const spinnerHandler = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => setDecativated(true), 1500);
    }
  });

  return (
    <React.Fragment>
      <header style={{ opacity: !isActive ? 1 : 0, transition: "1.5s" }}>
        {!isActive && (
          <div className="container">
            <div className="partNERD">PartNERD</div>
            <div className="buttons_right">
              <Button onClick={props.onShowModal}>Log in</Button>
              <Button onClick={props.onShowRegister}>Register</Button>
            </div>
          </div>
        )}
      </header>
      {!deactivated && (
        <div>
          <div
            style={{ opacity: !isActive ? 0 : 1, transition: "1.5s" }}
            className="title"
          >
            <span onClick={spinnerHandler}>PartNERD</span>
          </div>
          <div style={{ opacity: !isActive ? 0 : 1, transition: "1.5s" }}>
            <Spinner />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
