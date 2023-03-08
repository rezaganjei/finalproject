import React from "react";

const InfoCard = ({ className, children, ...props }) => {
  return (
    <>
      <div
        className={`w-4/5 sm:w-3/5 md:w-[20%] lg:w-[330px] border border-backgrey py-[18px] rounded-[10px] flex items-center gap-1 justify-center  ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default InfoCard;
