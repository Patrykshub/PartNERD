import React, { useState } from "react";

import Spinner from "../spinner/Spinner";
import "./header.css";
import "../spinner/spinner.css";

const Header = () => {
  const [isActive, setIsActive] = useState(true);

  const spinnerHandler = () => {
    setIsActive(false);
    console.log("spinner deactivated");
  };

  return (
    <React.Fragment>
        <div style={{opacity: !isActive ? 0 : 1, transform: 'all 5s'}} className="title">
          <span onClick={spinnerHandler}>PartNERD</span>
        </div>
        <div style={{opacity: !isActive ? 0 : 1, transform: 'all 5s'}}>
        <Spinner />
        </div>
    </React.Fragment>
  );
};

export default Header;
