import React from "react";

const ButtonElement = ({ className, type, children, action }) => {
  return (
    <React.Fragment>
      <button
        onClick={action}
        type={type ?? "button"}
        className={`${className} button_icon`}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default ButtonElement;

// "add_button button_icon"
