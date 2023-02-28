import classNames from "classnames";
import React from "react";

const ProductCard = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const cardClassName = classNames(
    variant === "primary" &&
      "flex flex-col items-center justify-between w-[280px] h-[512px]  pb-[30px]",
    className
  );
  return (
    <button {...props} className={cardClassName}>
      <div className="w-full flex justify-center ">
        <img src="./images/products/1.jpg" className="w-full " />
      </div>
      <div>
        <h4 className=" pb-[29px]">دستبند پلاک نعل نقره با بند بافت کرم</h4>
        <p className="text-[14px] font-bold">350,000 تومان</p>
      </div>
    </button>
  );
};

export default ProductCard;
