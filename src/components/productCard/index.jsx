import classNames from "classnames";
import React from "react";

const ProductCard = ({
  variant = "primary",
  className,
  children,
  dataObject,
  ...props
}) => {
  const cardClassName = classNames(
    variant === "primary" &&
      "flex flex-col items-center justify-between min-w-[200px] h-[420px]  pb-[30px]",
    className
  );
  return (
    <button {...props} className={cardClassName} key={dataObject.id}>
      <div className="w-full flex justify-center ">
        <img src={`${dataObject.image}`} className="w-full " />
      </div>
      <div>
        <h4 className=" pb-[29px]">{dataObject.name}</h4>
        <p className="text-[14px] font-bold">
          {(+dataObject.price).toLocaleString("fa-IR")}
        </p>
      </div>
    </button>
  );
};

export default ProductCard;
