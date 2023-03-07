import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="h-[43px] w-[396px] rounded-[10px] border-2 border-backgrey"
    />
  );
};

export default Input;
