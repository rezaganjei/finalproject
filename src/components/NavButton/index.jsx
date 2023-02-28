import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const NavButton = ({ variant = "primary", className, children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`flex items-center mx-4 text-[#555555] hover:text-primary ${className}`}
      >
        {children}
        {variant === "primary" ? (
          <BiChevronDown />
        ) : variant === "left" ? (
          <BiChevronLeft />
        ) : null}
      </button>
    </>
  );
};

export default NavButton;
