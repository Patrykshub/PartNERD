import React, { useState } from "react";

import Spinner from "../spinner/Spinner";
import "./header.css";
import "../spinner/spinner.css";
import Button from './Button';

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const spinnerHandler = () => {
    setIsActive(false);
    console.log("spinner deactivated");
  };

  return (
    <React.Fragment>
      <header style={{ opacity: !isActive ? 1 : 0, transition: '1.5s'}}>
        {!isActive && (
          <div className='container'>
            <div>PartNERD</div>
            <div className='buttons_right'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </div>
          </div>
        )}
      </header>

      <div
        style={{ opacity: !isActive ? 0 : 1, transition: "1.5s" }}
        className="title"
      >
        <span onClick={spinnerHandler}>PartNERD</span>
      </div>
      <div style={{ opacity: !isActive ? 0 : 1, transition: "1.5s" }}>
        <Spinner />
      </div>
    </React.Fragment>
  );
};

export default Header;
