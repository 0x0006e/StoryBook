import React from "react";

import "./Button.css";

function Button({ text, children, ...otherProps }) {
  return (
    <div className="Button" {...otherProps}>
      {text}
      {children}
    </div>
  );
}

export default Button;
