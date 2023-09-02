import React from "react";
import InputElement from "./InputElement";
import ButtonElement from "./ButtonElement";

const FormContainer = ({
  className,
  label,
  placeholder,
  icon,
  value,
  setValue,
  action,
}) => {
  return (
    <React.Fragment>
      <div className="todo_left">
        <label htmlFor="todo">{label}</label>
        <InputElement
          type={"text"}
          id={"todo"}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
          action={action}
        />
      </div>

      <div className="todo_right">
        <ButtonElement className={className} type={"button"} action={action}>
          {icon}
        </ButtonElement>
      </div>
    </React.Fragment>
  );
};

export default FormContainer;
