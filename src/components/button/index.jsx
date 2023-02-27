import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`bg-primary rounded-[30px] text-white ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
