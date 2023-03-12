import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  rightPaginate,
  leftPaginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex gap-6 items-center">
      <BiChevronRight
        className="hover:cursor-pointer"
        onClick={rightPaginate}
      />
      {pageNumbers.map((number) => (
        <li key={number} className="hover:cursor-pointer">
          <a onClick={() => paginate(number)}>
            {number.toLocaleString("fa-IR")}
          </a>
        </li>
      ))}
      <BiChevronLeft className="hover:cursor-pointer" onClick={leftPaginate} />
    </ul>
  );
};

export default Pagination;
