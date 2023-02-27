import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const FooterButton = ({ className, children, ...props }) => {
  return (
    <button className="flex items-center">
      <GoPrimitiveDot className="hover:text-primary" />
      {children}
    </button>
  );
};

export default FooterButton;
