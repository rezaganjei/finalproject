import React from "react";
import { BiChevronDown } from "react-icons/bi";

const NavButton = ({ className, children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`flex items-center mx-4 text-[#555555] hover:text-primary ${className}`}
      >
        {children}
        <BiChevronDown />
      </button>
    </>
  );
};

export default NavButton;
