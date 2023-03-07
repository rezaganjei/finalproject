import React, { useState } from "react";
import Button from "../../../components/button";
import SearchInput from "../../../components/searchInput";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import NavButton from "../../../components/NavButton";
import { Link } from "react-router-dom";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={(e) => {
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
            <Link className="flex items-center justify-center pl-8" to="/">
              <img src=".\images\logo.jpg" />
              <p className="font-extrabold text-2xl ">فرجان گالری</p>
            </Link>
            <div>
              <SearchInput
                placeholder="    جستجو  ..."
                className="h-[50px] w-2/3 mr-6"
              />
            </div>
            <div className="flex flex-col items-start justify-around w-full m-6 gap-4">
              <Link to="/login" className="whitespace-nowrap">
                ورود/عضویت
              </Link>
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
              <Link to="/bracelet">
                <NavButton>دستبند</NavButton>
              </Link>
              <Link to="/necklace">
                <NavButton>گردنبند</NavButton>
              </Link>
              <Link to="/earings">
                <NavButton>گوشواره</NavButton>
              </Link>
              <Link to="/rings">
                <NavButton>انگشتر</NavButton>
              </Link>
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

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between p-4 items-center ">
          <Link className="flex items-center" to="/">
            <img src=".\images\logo.jpg" />
            <p className="font-extrabold text-2xl whitespace-nowrap md:hidden lg:block">
              فرجان گالری
            </p>
          </Link>

          <div>
            <SearchInput
              placeholder="محصول مورد نظر را جستجو کنید ..."
              className="h-[50px] md:w-[250px] lg:w-[300px] xl:w-[480px]  "
            />
          </div>
          <div className="flex flex-col md:flex-row items-center w-[315px] justify-around ">
            <Link to="/login" className="whitespace-nowrap ml-[25px]">
              ورود/عضویت
            </Link>
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
        <button
          onClick={() => setIsBurgerMenuOpen(true)}
          className="block md:hidden p-2 m-auto text-[40px]"
        >
          <GiHamburgerMenu />
        </button>
        <nav className="hidden bg-backgrey h-[50px] md:flex items-center justify-center">
          <Link to="/bracelet">
            <NavButton>دستبند</NavButton>
          </Link>
          <Link to="/necklace">
            <NavButton>گردنبند</NavButton>
          </Link>
          <Link to="/earings">
            <NavButton>گوشواره</NavButton>
          </Link>
          <Link to="/rings">
            <NavButton>انگشتر</NavButton>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
