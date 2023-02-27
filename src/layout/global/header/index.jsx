import React from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between p-4 items-center">
          <div className="flex items-center">
            <img src=".\src\assests\images\logo.jpg" />
            <div className="font-extrabold text-2xl">فرجان گالری</div>
          </div>

          <div>
            <Input
              type="search"
              placeholder="محصول مورد نظر را جستجو کنید ..."
              className="h-[50px] w-[518px] rounded-[50px] border-[#BAB9B9] border-[1px] px-2"
            />
          </div>
          <div className="flex items-center w-[315px] justify-around">
            <a>ورود/عضویت</a>
            <Button className="flex items-center h-[40px] w-[170px] justify-center ">
              <div className="flex items-center justify-center p-2">
                <div className="bg-secondary h-[23px] w-[23px] rounded-[11.5px] ">
                  1
                </div>
                <AiOutlineShoppingCart />
              </div>
              <div className="text-[14px]">سبد خرید شما</div>
            </Button>
          </div>
        </div>
        <nav></nav>
      </header>
    </>
  );
};

export default Header;
