import { Fragment } from "react";

import "./button.css";

const Button = (props) => {
  return (
    <Fragment>
      <div className="button">{props.children}</div>
    </Fragment>
  );
};
export default Button;
