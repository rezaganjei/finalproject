import classNames from "classnames";
import React from "react";

const Button = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}) => {
  const btnClassName = classNames(
    variant === "primary" &&
      "bg-primary rounded-[30px] text-white px-[22px] py-[10px]",
    size === "small" && "text-[14px]",
    size === "medium" && "text-[16px]",
    className
  );
  return (
    <>
      <button {...props} className={btnClassName}>
        {children}
      </button>
    </>
  );
};

export default Button;
