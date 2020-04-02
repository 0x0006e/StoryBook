import React from "react";
import { string, oneOfType, oneOf } from "prop-types";

import cx from "classnames";

import "./Button.css";

function Button({ text, type, ...otherProps }) {
  return (
    <div
      className={cx("Button", {
        default: type === "default",
        primary: type === "primary",
        success: type === "success"
      })}
      {...otherProps}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  /**
   * 按钮文字
   **/
  text: string,
  /**
   * 默认类型.
   **/
  type: oneOf(["default", "primary", "success"])
};

Button.defaultProps = {
  text: "",
  type: "default"
};

export default Button;
