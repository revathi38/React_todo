import React, { useEffect, useRef } from "react";

const InputElement = ({ type, id, placeholder, value, setValue, action }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        type={type}
        id={id}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            action();
          }
        }}
        placeholder={placeholder}
        onChange={handleInput}
        value={value}
      />
    </React.Fragment>
  );
};

export default InputElement;
