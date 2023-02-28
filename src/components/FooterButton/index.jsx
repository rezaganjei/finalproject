import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const FooterButton = ({ className, children, ...props }) => {
  return (
    <button className="flex items-center footerButton gap-[10px]">
      <GoPrimitiveDot className="hover:text-primary pointIcon" />
      {children}
    </button>
  );
};

export default FooterButton;
