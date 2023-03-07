import React from "react";

const SearchInput = ({ className, ...props }) => {
  return (
    <input
      type="search"
      {...props}
      className={`rounded-[50px] border-[#BAB9B9] border-[1px] px-2 outline-none ${className}`}
    />
  );
};

export default SearchInput;
