import React, { useState } from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import NavButton from "../../../components/NavButton";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={(e) => {
            console.log(e.target);
            setIsOpen(false);
          }}
          className="min-h-[100vh] bg-black bg-opacity-60 w-full fixed top-0 right-0 z-50  md:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[60%] bg-white min-h-[100vh]"
          >
            <button onClick={() => setIsOpen(false)} className="p-2">
              <AiOutlineClose />
            </button>
            <div className="flex items-center justify-center pl-8">
              <img src=".\images\logo.jpg" />
              <p className="font-extrabold text-2xl ">فرجان گالری</p>
            </div>
            <div>
              <Input
                type="search"
                placeholder="    جستجو  ..."
                className="h-[50px] w-2/3 mr-6 rounded-[50px] border-[#BAB9B9] border-[1px] px-2 outline-none"
              />
            </div>
            <div className="flex flex-col items-start justify-around w-full m-6 gap-4">
              <a className="whitespace-nowrap">ورود/عضویت</a>
              <Button className="w-2/3">
                <div className="flex items-center h-[40px]  justify-center ">
                  <div className="flex items-center justify-center p-1 gap-1">
                    <div className="bg-secondary h-[23px] w-[23px] rounded-[11.5px]  ">
                      1
                    </div>
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </Button>
            </div>
            <nav className="bg-backgrey flex flex-col items-center justify-center h-[250px] gap-6">
              <NavButton variant="left">دستبند</NavButton>
              <NavButton variant="left">گردنبند</NavButton>
              <NavButton variant="left">گوشواره</NavButton>
              <NavButton variant="left">انگشتر</NavButton>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  return (
    <>
      <header>
        <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
        <button
          onClick={() => setIsBurgerMenuOpen(true)}
          className="block md:hidden p-2 m-auto text-[40px]"
        >
          <GiHamburgerMenu />
        </button>
        <div className="hidden md:flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between p-4 items-center ">
          <div className="flex items-center">
            <img src=".\images\logo.jpg" />
            <p className="font-extrabold text-2xl whitespace-nowrap md:hidden lg:block">
              فرجان گالری
            </p>
          </div>

          <div>
            <Input
              type="search"
              placeholder="محصول مورد نظر را جستجو کنید ..."
              className="h-[50px] md:w-[250px] lg:w-[300px] xl:w-[480px]  rounded-[50px] border-[#BAB9B9] border-[1px] px-2 outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center w-[315px] justify-around ">
            <a className="whitespace-nowrap ml-[25px]">ورود/عضویت</a>
            <Button>
              <div className="flex items-center h-[40px] w-[170px] justify-center ">
                <div className="flex items-center justify-center p-1 gap-1">
                  <div className="bg-secondary h-[23px] w-[23px] rounded-[11.5px]  ">
                    1
                  </div>
                  <AiOutlineShoppingCart />
                </div>
                <div className="text-[14px]">سبد خرید شما</div>
              </div>
            </Button>
          </div>
        </div>
        <nav className="hidden bg-backgrey h-[50px] md:flex items-center justify-center">
          <NavButton>دستبند</NavButton>
          <NavButton>گردنبند</NavButton>
          <NavButton>گوشواره</NavButton>
          <NavButton>انگشتر</NavButton>
        </nav>
      </header>
    </>
  );
};

export default Header;
